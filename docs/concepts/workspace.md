# Workspace

Obsidian lets you configure what content is visible to you at any given time. Hide the file explorer when you don't need it, display multiple documents side by side, or show an outline of your document while you're working on it. The configuration of visible content within your application window is known as the _workspace_.

The workspace consists of three areas, or _splits_: left, right, and the root split. Each split contains a collection of _leaves_.

A leaf is a window that can display content in different ways. The type of leaf determines how content is displayed, and correspond to a specific _view_. For example, a leaf of type `graph` displays the [graph view](https://help.obsidian.md/Plugins/Graph+view).

You can access the workspace through the [App](../api/classes/App.md) object inside your plugin. The following example prints the type of every leaf in the workspace:

```ts title="main.ts" {6-8}
import { Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    this.addRibbonIcon("dice", "Print leaf types", () => {
      this.app.workspace.iterateAllLeaves((leaf) => {
        console.log(leaf.getViewState().type);
      });
    });
  }
}
```

:::tip Leaves vs. panes
You might've noticed the striking resemblance between leaves and panes. I'm not sure what the exact difference is, but the [official documentation on panes](https://help.obsidian.md/User+interface/Workspace/Panes/Pane+layout) says:

> The window a file gets opened in is what we call a "pane".

And since grouping of leaves only seem to affect Markdown documents, my best guess is that any leaf of type [`MarkdownView`](../api/classes/MarkdownView.md) is considered a pane.
:::

## Creating and detaching leaves

There are several methods for creating leaves, which are fairly similar. To see all of them, refer to [`Workspace`](../api/classes/Workspace.md), but here are a few to get you started:

- If you want to create a new leaf in the root split, use [`workspace.getLeaf(true)`](../api/classes/Workspace.md#getleaf).
- If you want to create a new leaf in any of the side bars, use [`workspace.getLeftLeaf()`](../api/classes/Workspace.md#getleftleaf) and [`workspace.getRightLeaf()`](../api/classes/Workspace.md#getrightleaf). Both let you decide whether to create the leaf in a new split inside the side bar.

You can also explicitly create the leaf in the split of your choice, using [`createLeafInParent(leftSplit, index)`](../api/classes/Workspace.md#createleafinparent), where `index` is the position you want to insert the leaf on. For example, set `index` to 0 to prepend the leaf in the split.

To remove a leaf from the workspace, call [`detach()`](../api/classes/WorkspaceLeaf.md#detach) on the leaf you want to remove.

## Grouping leaves

You can create [linked panes](https://help.obsidian.md/User+interface/Workspace/Panes/Linked+pane) by assigning multiple leaves to the same group, using [`setGroup()`](../api/classes/WorkspaceLeaf.md#setgroup).

```ts
leaves.forEach((leaf) => leaf.setGroup("group1");
```
