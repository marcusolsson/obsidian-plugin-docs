# Custom views

Views determine how content is visualized in Obsidian, for example as a file explorer or as a graph.
By adding custom views, you can display content in a way that makes sense for your plugin.

You can create a custom view by extending the `ItemView` interface.

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

Each view is uniquely identified by a text string and many operations require that you specify the view you'd like to modify. Extracting it to a constant, `VIEW_TYPE_EXAMPLE`, is a good idea—as you will see later in this guide.

- `getViewType` returns a unique identier for the view
- `getDisplayText` returns a human-friendly name for the view
- `onOpen` is called when the view is opened within a new leaf. Use this method to build the content of your view.
- `onClose` is called when the view should close and is responsible for cleaning up any resources used by the view.

## Register a custom view

Let's look at an example of how to register a custom view for your plugin.

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

To create a custom view, call the `registerView` inside `onload`. The second argument to `registerView` is a callback that returns an instance of the view you want to register.

```ts
async onload() {
  this.registerView(VIEW_TYPE_EXAMPLE, (leaf) => (this.view = new ExampleView(leaf)));
}
```

:::tip
`(leaf) => (this.view = new ExampleView(leaf))` lets us return the view instance _and_ save the instance so that we can reference it later. Neat! 👌
:::

We need to make sure that we clean up the view when the plugin is disabled. In this case, we need to:

- Allow the view clean up after itself by calling `onClose`
- Detach all leaves that are using the view

```ts
async onunload() {
  await this.view.onClose();

  this.app.workspace
    .getLeavesOfType(VIEW_TYPE_EXAMPLE)
    .forEach((leaf) => leaf.detach());
}
```

## Activate a custom view

Now that we've registered a custom view for our plugin, we need to give the user a way to activate it. The following example is a convienient function that lets us activate our custom view.

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

Here, `activateView` does three things:

- Detaches all leaves with our custom view
- Adds our custom view on the right leaf
- Reveals the leaf that contains our custom view

:::tip
The `activateView` restricts your plugin to at most one leaf at a time. Try commenting out the call to `detachLeavesOfType` to create multiple leaves. One for every call to `activateView`.
:::

How you want the user to activate the custom view is up to you. Here's an example of using a [ribbon action](./ribbon.md), but you can also use a [command](./commands.md).

```ts
async onload() {
  this.addRibbonIcon("dice", "Activate view", () => {
    this.activateView();
  });
}
```
