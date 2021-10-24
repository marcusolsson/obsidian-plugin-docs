---
sidebar_position: 78
---

# Svelte

:::info
This guide is written for an older version of the sample plugin that uses Rollup. If you know how to adapt it for ESBuild, consider [contributing](../contribute.md) the changes.
:::

This guide explains how to configure your plugin to use [Svelte](https://svelte.dev/), a light-weight alternative to traditional frameworks like React and Vue.

Svelte is built around a compiler that preprocesses your code and outputs vanilla JavaScript, which means it doesn't need to load any libraries at run time. This also means that it doesn't need a virtual DOM to track state changes, which allows your plugin to run with minimal additional overhead.

If you want to learn more about Svelte, and how to use it, refer to the [tutorial](https://svelte.dev/tutorial/basics) and the [documentation](https://svelte.dev/docs).

This guide assumes that you've finished [Create your first plugin](../getting-started/create-your-first-plugin).

:::tip Visual Studio Code
Svelte has an [official Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) that enables syntax highlighting and rich IntelliSense in Svelte components.
:::

## Configure your plugin

To build a Svelte application, you need to install the dependencies and configure your plugin to compile code written using Svelte.

1. Add Svelte to your plugin dependencies:

   ```bash
   npm install --save-dev svelte svelte-preprocess @tsconfig/svelte rollup-plugin-svelte
   ```

1. Extend the `tsconfig.json` to enable additional type checking for common Svelte issues. The `types` property is important for TypeScript to recognize `.svelte` files.

   ```json title="tsconfig.json"
   {
     "extends": "@tsconfig/svelte/tsconfig.json",
     "compilerOptions": {
       "types": ["svelte", "node"],

       // ...
     }
   }
   ```

1. Remove the following line from your `tsconfig.json` as it conflicts with the Svelte configuration.

   ```json title="tsconfig.json"
   "inlineSourceMap": true,
   ```

1. In `rollup.config.js`, add the following imports to the top of the file:

   ```js title="rollup.config.js"
   import svelte from "rollup-plugin-svelte";
   import sveltePreprocess from "svelte-preprocess";
   ```

1. Add Svelte to the list of plugins.

   ```js title="rollup.config.js" {14}
   export default {
     input: 'main.ts',
     output: {
       dir: '.',
       sourcemap: 'inline',
       sourcemapExcludeSources: isProd,
       format: 'cjs',
       exports: 'default',
       banner,
     },
     external: ['obsidian'],
     plugins: [
       typescript(),
       svelte({ emitCss: false, preprocess: sveltePreprocess() }),
       nodeResolve({browser: true}),
       commonjs(),
     ]
   };
   ```

## Create a Svelte component

In the root directory of the plugin, create a new file called `Component.svelte`:

```tsx title="Component.svelte"
<script lang="ts">
  export let variable: number;
</script>

<div class="number">
  <span>My number is {variable}!</span>
</div>

<style>
  .number {
    color: red;
  }
</style>
```

## Mount the Svelte component

To use the Svelte component, it needs to be mounted on an existing [HTML element](../guides/html-elements.md). For example, if you are mounting on a custom [`ItemView`](../api/classes/ItemView.md) in Obsidian:

```ts
import { ItemView, WorkspaceLeaf } from "obsidian";

import Component from "./Component.svelte";

const VIEW_TYPE_EXAMPLE = "example-view";

class ExampleView extends ItemView {
  component: Component;

  constructor(leaf: WorkspaceLeaf) {
    super(leaf);
  }

  getViewType() {
    return VIEW_TYPE_EXAMPLE;
  }

  getDisplayText() {
    return "Example view";
  }

  async onOpen() {
    this.component = new Component({
      target: this.contentEl,
      props: {
        variable: 1
      }
    });
  }

  async onClose() {
    this.component.$destroy();
  }
}
```

## Create a Svelte store

To create a store for your plugin and access it from within a generic Svelte component instead of passing the plugin as a prop, follow these steps:

1. Create a file called `store.ts`:

   ```jsx title="store.ts"
   import { writable } from "svelte/store";
   import type ExamplePlugin from "./main";

   const plugin = writable<ExamplePlugin>();
   export default { plugin };
   ```

1. Configure the store:

   ```ts title="view.ts" {}
   import { ItemView, WorkspaceLeaf } from "obsidian";
   import type ExamplePlugin from "./main";
   import store from "./store";
   import Component from "./Component.svelte";

   const VIEW_TYPE_EXAMPLE = "example-view";

   class ExampleView extends ItemView {
     // ...

     async onOpen() {
       store.plugin.set(this.plugin);

       this.component = new Component({
         target: this.contentEl,
         props: {
           variable: 1
         }
       });
     }
   }
   ```

1. To use the store in your component:

   ```jsx title="Component.svelte" {}
   <script lang="ts">
     import type MyPlugin from "./main";

     let plugin: MyPlugin;
     store.plugin.subscribe((p) => (plugin = p));
   </script>
   ```
