---
sidebar_position: 5
---

# Ribbon actions

On the left side of the Obsidian interface, you find the sidebar, or the _app ribbon_. In addition to system operations, such as opening the preferences or another vault, the app ribbon can also host actions defined by plugins.

To add a plugin action to the app ribbon, use the `addRibbonIcon` method.

```ts title="main.ts" {5-7}
import { Plugin } from "obsidian";

export default class MyPlugin extends Plugin {
  async onload() {
    this.addRibbonIcon("dice", "Sample Plugin", () => {
      console.log("Hello, you!");
    });
  }
}
```
