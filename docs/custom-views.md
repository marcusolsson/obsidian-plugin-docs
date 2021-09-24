---
sidebar_position: 70
---

# Custom views

Views determine how Obsidian displays content. The file explorer, graph view, and the Markdown view are all examples of views. You can create your own custom custom views that display content in a way that makes sense for your plugin.

To create a custom view, create a class that extends the `ItemView` interface:

```ts
import { ItemView, WorkspaceLeaf } from "obsidian";

const VIEW_TYPE_EXAMPLE = "example-view";

class ExampleView extends ItemView {
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
    const container = this.containerEl.children[1];
    container.empty();
    container.createEl("h4", { text: "Example view" });
  }

  async onClose() {
    // ...
  }
}
```

:::note
For more information on how to use the `createEl()` method, refer to [HTML elements](html-elements.md).
:::

Each view is uniquely identified by a text string and many operations require that you specify the view you'd like to modify. Extracting it to a constant, `VIEW_TYPE_EXAMPLE`, is a good idea—as you will see later in this guide.

- `getViewType()` returns a unique identier for the view.
- `getDisplayText()` returns a human-friendly name for the view.
- `onOpen()` is called when the view is opened within a new leaf and is responsible for building the content of your view.
- `onClose()` is called when the view should close and is responsible for cleaning up any resources used by the view.

## Register a custom view

Custom views need to be registered by the plugin before they can be used.

```ts title="main.ts" {4,7,11-15}
import { Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  view: ExampleView;

  async onload() {
    this.registerView(VIEW_TYPE_EXAMPLE, (leaf) => (this.view = new ExampleView(leaf)));
  }

  async onunload() {
    await this.view.onClose();

    this.app.workspace
      .getLeavesOfType(VIEW_TYPE_EXAMPLE)
      .forEach((leaf) => leaf.detach());
  }
}
```

The second argument to `registerView()` is a callback that returns an instance of the view you want to register.

:::tip
`(leaf) => (this.view = new ExampleView(leaf))` lets you return the view instance _and_ save the instance so that you can reference it later. Neat! 👌
:::

To make sure that you clean up the view whenever the plugin is disabled:

- Allow the view clean up after itself by calling `onClose()`.
- Detach all leaves that are using the view.

```ts
async onunload() {
  await this.view.onClose();

  this.app.workspace
    .getLeavesOfType(VIEW_TYPE_EXAMPLE)
    .forEach((leaf) => leaf.detach());
}
```

## Activate a custom view

Now that you've registered a custom view for the plugin, you should to give the user a way to activate it. The following example gives you a convienient function that lets you activate the view:

```ts title="main.ts"
import { Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {

  // ...

  async activateView() {
    this.app.workspace.detachLeavesOfType(VIEW_TYPE_EXAMPLE);

    await this.app.workspace.getRightLeaf(false).setViewState({
      type: VIEW_TYPE_EXAMPLE,
      active: true,
    });

    this.app.workspace.revealLeaf(
      this.app.workspace.getLeavesOfType(VIEW_TYPE_EXAMPLE)[0]
    );
  }
}
```

Here, `activateView()` does three things:

- Detaches all leaves with the custom view.
- Adds the custom view on the right leaf.
- Reveals the leaf that contains the custom view.

:::tip
The `activateView()` restricts your plugin to at most one leaf at a time. Try commenting out the call to `detachLeavesOfType()` to create multiple leaves. One for every call to `activateView()`.
:::

How you want the user to activate the custom view is up to you. Here's an example of using a [ribbon action](./ribbon-action.md), but you can also use a [command](./commands.md).

```ts
async onload() {
  this.addRibbonIcon("dice", "Activate view", () => {
    this.activateView();
  });
}
```
