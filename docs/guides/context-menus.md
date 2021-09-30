# Context menus

If you want to open up a context menu, use `Menu`:

```ts {6,26}
import { Menu, Notice, Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    this.addRibbonIcon("dice", "Open menu", (event) => {
      const menu = new Menu(this.app);

      menu.addItem((item) =>
        item
          .setTitle("Copy")
          .setIcon("documents")
          .onClick(() => {
            new Notice("Copied");
          })
      );

      menu.addItem((item) =>
        item
          .setTitle("Paste")
          .setIcon("paste")
          .onClick(() => {
            new Notice("Pasted");
          })
      );

      menu.showAtMouseEvent(event);
    });
  }
}
```

`showAtMouseEvent()` opens the menu where you clicked with the mouse.

:::tip
If you need more control of where the menu appears, you can use `menu.showAtPosition({ x: 20, y: 20 })` to open the menu at a position relative to the top-left corner of the Obsidian window.
:::

For more information on what icons you can use, refer to [Icons](icons.md).
