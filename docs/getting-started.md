---
sidebar_position: 2
---

# Getting started

This guide walks you through the steps needed with plugin development for Obsidian.

> If you prefer a video walkthrough, check out [Create Your Own Obsidian Plugin](https://www.youtube.com/watch?v=9lA-jaMNS0k) by [Antone Heyward](https://www.youtube.com/channel/UC9w43btR2UUsfR6ZUf3AlqQ).

## Prerequisites

- [Git](https://git-scm.com/)
- [NodeJS](https://nodejs.org/)

## Step 1: Download the Obsidian sample plugin

1. Browse to the [Obsidian Sample Plugin](https://github.com/obsidianmd/obsidian-sample-plugin).
1. Click **Use this template**.
1. In **Repository name**, enter the name of your plugin. Obsidian plugins are typically prefixed by `obsidian-`. For example, `obsidian-instant-coffee`.
1. Click **Create repository from template**.

You've now created your own repository based on the Obsidian sample plugin. Next, you'll download the source code on your local machine.

1. Browse to the repository you just created.
1. Click **Code**, and copy the path to your repository.
1. Open a terminal and navigate to the vault.
   ```bash
   cd path/to/vault/.obsidian/plugins
   ```
1. Download the source code into the plugins folder.
   ```bash
   git clone https://github.com/marcusolsson/obsidian-instant-coffee.git
   ```

## Step 2: Build the plugin

1. Install dependencies.
   ```bash
   npm install
   ```
1. Compile the source code. The following command generates a `main.js` that contains the compiled version of your plugin.
   ```bash
   npm run dev
   ```

## Step 3: Load the plugin in Obsidian

1. Open **Preferences** in Obsidian.
1. In the side menu, click **Community plugins**.
1. Under **Installed plugins**, enable the **Sample Plugin** by clicking the toggle button next to it.

You're now running a custom plugin that you've built yourself. Nice! 💪

Though "Sample Plugin" is probably not the name you had in mind for your plugin. Let's change that.

## Step 4: Update the plugin manifest

The plugin manifest, `manifest.json` is a file that contains information about your plugin, such as its name and version.

1. Open the `obsidian-instant-coffee` directory that has been created, in a code editor, such as [Visual Studio Code](https://code.visualstudio.com/).
1. Open `manifest.json` in your editor.
1. Change `id` to your plugin ID, e.g. `obsidian-instant-coffee`.
1. Change `name` to the human-friendly name of the plugin, e.g. `Instant coffee`.
1. If you'd like, then update `description`, `author`, and `authorUrl` as well.

A plugin is an NodeJS package, which is configured in the `package.json`. You shouldn't need to worry much about it for now. For now, we'll only update it to match the properties in the plugin manifest.

1. Open `package.json` in your editor.
1. Change `name` to match the `id` in `manifest.json`.
1. Change `version` to match the `version` in `manifest.json`.
1. Change `description` to match the `description` in `manifest.json`.
1. Restart Obsidian to reload your plugin.

## Step 5: Update the source code

1. Open `main.ts` in your editor.
1. Find the lines of code that adds a _ribbon icon_.
   ```ts
   this.addRibbonIcon('dice', 'Sample Plugin', () => {
     new Notice('This is a notice!');
   });
1. Change the text for the notice. Feel free to come up with a text of your own.
   ```ts
   new Notice('Hello, you!');
   ```
1. Restart Obsidian to reload your plugin.
1. Click the die icon in the sidebar. Make sure it says "Sample Plugin" when you hover it.

Congratulations! 🎉 You've successfully loaded and changed a custom plugin for Obsidian. 🚀

Feel free to modify the code from the sample plugin to see what it does. Once you're ready, learn more about the [anatomy of a plugin](/plugin-anatomy).
