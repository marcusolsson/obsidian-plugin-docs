# Submission guidelines

This page lists some of the common review comments plugin authors get when submitting their plugin.


# normalizePath function 
The normalizePath() function takes a file path as a string and scrubs it to be safe for the file system and for cross-platform use. It performs such actions as:
- clean up the use of forward and backward slashes, such as replace 1 or more of \ or / with a single /
- remove leading and trailing \ and /
- replace any \u00A0 non breaking spaces with a regular space
- runs the path through the [String.prototype.normalize method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize )

```ts
import { normalizePath } from "obsidian";
const pathToPlugin = normalizePath(app.vault.configDir + "//plugins/my-plugin");
// pathToPlugin contains ".obsidian/plugins/my-plugin" not .obsidian//plugins/my-plugin

```