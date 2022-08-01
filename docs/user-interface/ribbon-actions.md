# Ribbon actions

The sidebar on the left side of the Obsidian interface is mainly known as the _ribbon_. In addition to system operations, such as opening the preferences or another vault, the ribbon can also host actions defined by plugins.

To add a action to the ribbon, use the [`addRibbonIcon()`](../reference/typescript/classes/Plugin_2.md#addribbonicon) method:

```ts title="main.ts"
import { Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    // highlight-start
    this.addRibbonIcon("dice", "Print to console", () => {
      console.log("Hello, you!");
    });
    // highlight-end
  }
}
```

The first argument specifies which icon to use. For more information on the available icons, and how to add your own, refer to [Icons](icons.md).
