---
sidebar_position: 79
---

# Vue

This guide can help you to configure your plugin to use [Vue.js](https://vuejs.org).

Vue is a JavaScript and TypeScript framework for building reactive user interfaces, like [React](https://reactjs.org).

Here is a repository of full working example of plugin using Vue - https://github.com/guopenghui/obsidian-vue-starter

But let's see how to add Vue from scratch.
As starting point let's get [obsidian-sample-plugin](https://github.com/obsidianmd/obsidian-sample-plugin) what you could met in tutorial [Create your first plugin](https://marcus.se.net/obsidian-plugin-docs/getting-starte d/create-your-first-plugin)

## Configure your plugin

1. Add Vue to your plugin dependencies:

   ```bash
   npm add vue
   npm add -D @the_tree/esbuild-plugin-vue3 hash-sum
   ```

1. Type definitions.
	VueJs provides its own type definitions, so you don't need `@types/vue` installed.
	
	But to helps your IDE to understand what a file ending in `.vue` and for working with [Webpack](https://webpack.js.org) and hence for compiling there is need to save following code as file `shims.d.ts` in the plugin root directory.
	```javascript title="shims.d.ts"
	declare module '*.vue' {  
		import { DefineComponent } from 'vue';  
		const defineComponent: DefineComponent;  
		export default defineComponent;  
	}
	```

1. In `tsconfig.json`, add `.tsx` and `.vue` extensions to the `include` section:
	
	```ts title="tsconfig.json"
	{
		"include": [  
			"**/*.ts",  
			"**/*.tsx",  
			"**/*.vue"  
		]
	}
	```
	The `.ts` extension must be already there by default.

	Also add jsx preserve option to the `compilerOptions` section:
	```ts title="tsconfig.json"
	{
		"compilerOptions": {
			"jsx":"preserve",
		}
	}
	```

1.  Add Vue to the list of plugins in file `esbuild.config.mjs`.
    
    ```js title="esbuild.config.mjs"
    import Vue from '@the_tree/esbuild-plugin-vue3';
    // ...
    esbuild
    .build({
	    plugins: [
		    Vue({ isProd: true })
	    ],
		// ...
	})
	.catch(() => process.exit(1));
    ```

## Create a Vue component

There is 2 ways to make and use components. In `vue` format and in `tsx` format. So let's try both.

1. Create file with name `VueComponent1.vue`  in the plugin root directory, with the following content:
```tsx title="VueComponent1.vue"
<template>
    <h2>{{ hi }}</h2>
</template>


<script setup lang="ts">
	defineProps<{
		hi: string;
	}>()

	let hi = 'This is text from Component 1';
</script>


<style>
</style>
```

2. Create file `VueComponent2.tsx` in the plugin root directory, with the following content:
```tsx title="VueComponent2.tsx"
import { defineComponent } from 'vue';
export default defineComponent({
    setup() {
        return () => (
            <>
                <h1>This is text from VueComponent2.</h1>
                <SubComponent></SubComponent>
            </>
        )
    }
})

const SubComponent = defineComponent({
    setup() {
        return () => <h2>This is text from SubComponent of VueComponent2.</h2>
    }
})
```

## Mount the Vue component

To use the Vue component, it needs to be mounted on Vue app and then registered as view.

1. **Creating view App.** Create a new file called `App.vue` in the plugin root directory, with the following content:
	
	```tsx title="App.vue"
	<template>
	    <h2>This is text from App.vue.</h2>
	    <Component1></Component1>
	    <Component2 :hi="hi"></Component2>
	    <InlineComponent></InlineComponent>
	</template>
	
	<script setup lang="tsx">
		import Component1 from './VueComponent1.vue';
		import Component2 from './VueComponent2';
		import { ref } from 'vue';
		let hi = ref('');
		let InlineComponent = () => (<h1><Component1></Component1></h1>)
	</script>
	
	
	<style scoped>
		h2 {
			color: lightcoral;
		}
	</style>
	```
	
	Here actually created third component `InlineComponent` what reuse `Component1` but envelops it in H1 tag.

1. **Creating view**. Create a new file called `view.ts` in the plugin root directory, with the following content:
	```tsx title="view.ts"
	import { ItemView, WorkspaceLeaf } from 'obsidian';
	import { createApp, App as VueApp } from 'vue';
	import App from './App.vue';
	
	export const VIEW_TYPE: string = 'my-view';
	
	export class MyView extends ItemView {
	    vue_app: VueApp;
	    constructor(leaf: WorkspaceLeaf) {
	        super(leaf);
	    }
	    getViewType(): string {
	        return VIEW_TYPE;
	    }
	    getDisplayText(): string {
	        return 'Vue View';
	    }
	    getIcon(): string {
	        return 'dice';
	    }
	    async onOpen() {
	        const container = this.containerEl.children[1];
	        container.empty();
	        container.createEl('div', {
	            cls: 'my-plugin-view'
	        });
	        this.vue_app = createApp(App);
	        this.vue_app.mount('.my-plugin-view');
	    }
	    async onClose() {
	        this.vue_app.unmount();
	    }
	
	}
	```

2. **Register view**. In file `main.ts` add import of `MyView`:
	```ts title="main.ts"
	// ...
	import { MyView, VIEW_TYPE } from './view'
	// ...
	```

	Add function `activateView` to `MyPlugin`:

	```tsx title="main.ts"
	// ...
	export default class MyPlugin extends Plugin {
		// ...
		async activateView() {
			if (this.app.workspace.getLeavesOfType(VIEW_TYPE).length === 0) {
				await this.app.workspace.getLeaf(false).setViewState({
					type: VIEW_TYPE,
					active: true,
				})
			}
	
			this.app.workspace.revealLeaf(
				this.app.workspace.getLeavesOfType(VIEW_TYPE)[0]
			)
		}
		// ...
	}
	// ...
	```

	Add call of `this.registerView` and `addRibbonIcon` to `onload` function of `MyPlugin`:
	```ts title="main.ts"
	// ...
	export default class MyPlugin extends Plugin {
		// ...
		async onload() {
			// ...
			this.registerView(
				VIEW_TYPE,
				(leaf) => new MyView(leaf)
			)

			this.addRibbonIcon('dice', 'Open my view', (evt) => {
				this.activateView()
			})
			// ...
		}
		// ...
	}
	```

## Conclusion
Thats it. Now you can run `npm run dev` or `npm run build` and try out this plugin in Obsidian.

After enabling plugin in Obsidian there should be a dice icon on ribbon bar. On clicking on that icon should be opened a view with components from this tutorial.