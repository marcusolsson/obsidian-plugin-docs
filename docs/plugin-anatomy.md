---
sidebar_position: 2
---

# Anatomy of a plugin

The `Plugin` interface defines the lifecycle of a plugin and exposes the operations available to all plugins:

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

## Plugin lifecycle

`onload()` runs whenever Obsidian the user starts using the plugin. This is where you'll configure most of the plugin's capabilities.

`onunload()` runs when the plugin is disabled. Any resources that your plugin is using must be released here to avoid affecting the performance of Obsidian after your plugin has been disabled.

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

## What's next?

- Add [commands](commands.md) to let your users perform actions from the Command Palette
