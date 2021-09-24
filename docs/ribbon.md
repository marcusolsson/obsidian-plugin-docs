---
sidebar_position: 30
---

# Ribbon

The sidebar on the left side of the Obsidian interface is mainly known as the _ribbon_. In addition to system operations, such as opening the preferences or another vault, the ribbon can also host actions defined by plugins.

To add a action to the ribbon, use the `addRibbonIcon()` method:

```ts title="main.ts" {5-7}
import { Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    this.addRibbonIcon("dice", "Print to console", () => {
      console.log("Hello, you!");
    });
  }
}
```
