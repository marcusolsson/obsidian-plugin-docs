# Icons

Several of the UI components in the Obsidian API lets you configure an accompanying icon. You can choose from one of the built-in icons, or you can add your own.

## Browse available icons

If you'd like to see all available icons and their corresponding names, you can install the
[Icon Swapper](https://github.com/mgmeyers/obsidian-icon-swapper) plugin by mgmeyers. While its main purpose is to replace the built-in icons with custom ones, it also serves as a list of what icons are available in Obsidian.

## Draw icons

If you'd like to use icons in your custom interfaces, use the [`setIcon`](../api/functions/setIcon.md) utility function to add an icon to an [HTML element](html-elements.md). The following example adds icon to the status bar:

```ts title="main.ts"
import { Plugin, setIcon } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    const item = this.addStatusBarItem();
    setIcon(item, "info", 14);
  }
}
```

## Add your own icon

To add a custom icon for your plugin, use the [`addIcon`](../api/functions/addIcon.md) utility:

```ts title="main.ts"
import { addIcon, Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    addIcon("circle", `<circle cx="50" cy="50" r="50" fill="currentColor" />`);

    this.addRibbonIcon("circle", "Click me", () => {
      console.log("Hello, you!");
    });
  }
}
```

`addIcon` takes two arguments:

1. A name to uniquely identify your icon.
1. The SVG content for the icon, without the surrounding `<svg>` tag.

Note that your icon needs to fit within a `0 0 100 100` view box to be drawn properly.

After the call to `addIcon`, you can use the icon just like any of the built-in icons.
