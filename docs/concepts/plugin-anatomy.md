---
sidebar_position: 20
---

# Anatomy of a plugin

The [`Plugin`](api/../../api/classes/Plugin_2.md) class defines the lifecycle of a plugin and exposes the operations available to all plugins:

```ts {1,3} title="main.ts"
import { Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    // Configure resources needed by the plugin.
  }
  async onunload() {
    // Release any resources configured by the plugin.
  }
}
```

Notice the line `class ExamplePlugin extends Plugin`. This means that `ExamplePlugin` is an instance of the class `Plugin`. In a next couple pages, you will occasionally meet the syntax `this.doSomeThing`. For example: `this.addRibbonIcon`, `this.addCommand`. Because we are inside the class block, so `this` in here refers to the instance `ExamplePlugin`. `this.addRibbonIcon` mean that you `addRibbonIcon` to `ExamplePlugin`. Click these links to learn more about JavaScript [class](https://dmitripavlutin.com/javascript-classes-complete-guide/#41-instance-methods "The Complete Guide to JavaScript Classes") and [`this`](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/#41-this-in-a-constructor-invocation "Gentle Explanation of &quot;this&quot; in JavaScript") syntax.

## Plugin lifecycle

[`onload()`](../api/classes/Component.md#onload) runs whenever Obsidian the user starts using the plugin. This is where you'll configure most of the plugin's capabilities.

[`onunload()`](../api/classes/Component.md#onunload) runs when the plugin is disabled. Any resources that your plugin is using must be released here to avoid affecting the performance of Obsidian after your plugin has been disabled.

To better understand when these methods are called, you can print a message to the console whenever the plugin loads and unloads.

```ts {5,8} title="main.ts"
import { Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    console.log('loading plugin')
  }
  async onunload() {
    console.log('unloading plugin')
  }
}
```
