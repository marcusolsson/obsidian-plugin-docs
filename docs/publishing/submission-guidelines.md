# Submission guidelines

This page lists some of the common review comments plugin authors get when submitting their plugin.


# normalizePath function 
The [`normalizePath()`](../api/functions/normalizePath) function takes a file path and scrubs it to be safe for the file system and for cross-platform use.
- Cleans up the use of forward and backward slashes, such as replacing 1 or more of `\` or `/` with a single `/`.
- remove leading and trailing \ and /
- Replaces any non-breaking spaces, `\u00A0`, with a regular space.
- Runs the path through the [String.prototype.normalize method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize).

```ts
import { normalizePath } from "obsidian";
const pathToPlugin = normalizePath(app.vault.configDir + "//plugins/my-plugin");
// pathToPlugin contains ".obsidian/plugins/my-plugin" not .obsidian//plugins/my-plugin

```