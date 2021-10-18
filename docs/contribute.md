---
sidebar_position: 9999
---

# Contribute to this site

Thanks for considering contributing to the project!

There's a link at the bottom of every page that says **Edit this page**. If you click it, you're taken to that docs page on GitHub where you can edit and submit a change right away.

## Style guide

This site uses the [Google developer documentation style guide](https://developers.google.com/style) and the [Microsoft Style Guide](https://docs.microsoft.com/style-guide/welcome/).

If you see anything that violates any of these style guides, please let me know by [creating an issue on GitHub](https://github.com/marcusolsson/obsidian-plugin-docs/issues/new).

## The four types of documentation

This site hosts four types of documentation:

- **Tutorials** are _learning-oriented_: they take the reader through a series of steps to complete a project. For example, [Create your first plugin](getting-started/create-your-first-plugin.md).
- **Guides** are _goal-oriented_: they provide step-by-step instructions for how to solve a specific problem. For example, [Settings](guides/settings.md).
- **Reference** is _information-oriented_: its only job is to describe. For example, [Plugin](api/classes/Plugin_2.md).
- **Concepts** is _understanding-oriented_: they deepen the reader's understanding in a topic. For example, [Workspace](concepts/workspace.md).

For more information, refer to [The documentation system](https://documentation.divio.com/) by [Divio](https://www.divio.com/).

### Tutorials

Each tutorial should have the following structure:

1. Description of what the reader will have accomplished after the tutorial.
1. **Prerequisites** section that describes what the reader needs to complete the tutorial.
1. Headings for each step that start with "Step X — " (that's an [em-dash](https://en.wikipedia.org/wiki/Dash#Em_dash)), followed by a sentence in imperative form. For example, "Step 3 — Submit plugin for review".
1. Closing section that summarizes what the reader has accomplished, and where they can go next.

### Guides

Each guide should have the following structure:

1. Description of the guide.
1. Summary of what the reader will build or learn in the guide.
1. Full code example
1. Detailed explanation of the code example

The code block for the full code example must have a title with the filename, for example `title="main.ts"`.

The example must be complete: the reader can copy-paste it into their own editor and run it without modifications.

For simpler code examples, use [line highlighting](https://docusaurus.io/docs/markdown-features/code-blocks#line-highlighting) to draw the reader's attention to the important parts.

For more complex code examples you may add one or more code blocks that duplicate sections of the full example, to allow for a more detailed explanation.
