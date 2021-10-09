---
sidebar_position: 45
---

# Status bar

To create a new block in the status bar, call the [`addStatusBarItem()`](../api/classes/Plugin_2.md#addstatusbaritem) in the `onload()` method. The `addStatusBarItem()` method returns an [HTML element](html-elements.md) that you can add your own elements to.

```ts title="main.ts"
import { Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    const item = this.addStatusBarItem();
    item.createEl("span", { text: "Hello from the status bar 👋" });
  }
}
```

:::note
For more information on how to use the `createEl()` method, refer to [HTML elements](html-elements.md).
:::

You can add multiple status bar items by calling `addStatusBarItem()` multiple times. Since Obsidian adds a gap between of them, you need to create multiple HTML element on the same status bar item if you need more control of spacing.

```ts title="main.ts"
import { Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    const fruits = this.addStatusBarItem();
    fruits.createEl("span", { text: "🍎" });
    fruits.createEl("span", { text: "🍌" });

    const veggies = this.addStatusBarItem();
    veggies.createEl("span", { text: "🥦" });
    veggies.createEl("span", { text: "🥬" });
  }
}
```

The example above results in the following status bar:

![Status bar](../../static/img/status-bar.png)
