# Release your plugin with GitHub Actions

Manually creating your plugin release can be time-consuming and error-prone. In this guide, you'll configure your plugin to use [GitHub Actions](https://github.com/features/actions) to automatically create a release when you create a new tag.

:::note
The GitHub Action workflow was originally created and shared by [argentum](https://forum.obsidian.md/u/argentum). For more information and other variations, refer to the [forum announcement](https://forum.obsidian.md/t/using-github-actions-to-release-plugins/7877/3).
:::

1. In the root directory of your plugin, create a file called `release.yml` under `.github/workflows` with the following content:

   ```yml title=".github/workflows/release.yml"
   name: Release Obsidian plugin

   on:
     push:
       tags:
         - "*"

   env:
     PLUGIN_NAME: your-plugin-id # Change this to match the id of your plugin.

   jobs:
     build:
       runs-on: ubuntu-latest

       steps:
         - uses: actions/checkout@v2
         - name: Use Node.js
           uses: actions/setup-node@v1
           with:
             node-version: "14.x"

         - name: Build
           id: build
           run: |
             yarn install
             yarn run build
             mkdir ${{ env.PLUGIN_NAME }}
             cp main.js manifest.json styles.css ${{ env.PLUGIN_NAME }}
             zip -r ${{ env.PLUGIN_NAME }}.zip ${{ env.PLUGIN_NAME }}
             ls
             echo "::set-output name=tag_name::$(git tag --sort version:refname | tail -n 1)"

         - name: Create Release
           id: create_release
           uses: actions/create-release@v1
           env:
             GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
             VERSION: ${{ github.ref }}
           with:
             tag_name: ${{ github.ref }}
             release_name: ${{ github.ref }}
             draft: false
             prerelease: false

         - name: Upload zip file
           id: upload-zip
           uses: actions/upload-release-asset@v1
           env:
             GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
           with:
             upload_url: ${{ steps.create_release.outputs.upload_url }}
             asset_path: ./${{ env.PLUGIN_NAME }}.zip
             asset_name: ${{ env.PLUGIN_NAME }}-${{ steps.build.outputs.tag_name }}.zip
             asset_content_type: application/zip

         - name: Upload main.js
           id: upload-main
           uses: actions/upload-release-asset@v1
           env:
             GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
           with:
             upload_url: ${{ steps.create_release.outputs.upload_url }}
             asset_path: ./main.js
             asset_name: main.js
             asset_content_type: text/javascript

         - name: Upload manifest.json
           id: upload-manifest
           uses: actions/upload-release-asset@v1
           env:
             GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
           with:
             upload_url: ${{ steps.create_release.outputs.upload_url }}
             asset_path: ./manifest.json
             asset_name: manifest.json
             asset_content_type: application/json

         - name: Upload styles.css
           id: upload-css
           uses: actions/upload-release-asset@v1
           env:
             GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
           with:
             upload_url: ${{ steps.create_release.outputs.upload_url }}
             asset_path: ./styles.css
             asset_name: styles.css
             asset_content_type: text/css
   ```

1. In your terminal, commit the workflow.

   ```bash
   git add .github/workflows/release.yml
   git commit -m "Add release workflow"
   git push origin main
   ```

1. Create a tag that matches the version in the `manifest.json` file.

   ```bash
   git tag -a 1.0.1 -m "1.0.1"
   git push origin 1.0.1
   ```

   - `-a` creates an [annotated tag](https://git-scm.com/book/en/v2/Git-Basics-Tagging#_creating_tags).
   - `-m` specifies the name of your release. For Obsidian plugins, this must be the same as the version.

1. Browse to your repository on GitHub and click the **Actions** tab. Your workflow might still be running, or it might have finished already.

1. When the workflow finishes, go back to the main page for your repository and click **Releases** in the side bar on the right-hand side. The workflow has created a GitHub release and uploaded the required assets as binary attachments.

You've set up your plugin to automatically create a GitHub release whenever you create a new tag.

- If this is the first release for this plugin, you're now ready to [submit your plugin](submit-your-plugin.md).
- If this is an update to an already published plugin, your users can now update to the latest version.

</br>

## Use standard-version to automatically tag your release

You can also use [standard-version](https://github.com/conventional-changelog/standard-version) to apply the tags automatically for you, depending on the commits you made.

- If your commit message starts with `fix:`, it bumps the patch version. 
- If your commit message starts with `feat:`, it bumps the minor version. 
- If the third line of your commit message starts with `BREAKING CHANGE:`, it bumps the major version.

:::tip
If you're using Visual Studio Code, the [Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) extension helps to to create conventional commits.
:::

standard-version uses [Conventional Commits](https://www.conventionalcommits.org/) to add consistency to your commits, and to generate a `CHANGELOG.md` file automatically from your commits.

### Configuration

To set up `standard-version`, you only have to add a couple of lines to your `package.json`.

```json
{
...
	"scripts": {
		"dev": "cross-env BUILD=dev node esbuild.js",
		"build": "cross-env BUILD=production node esbuild.js",


// these are the lines you need to add
		"release": "standard-version" 
	},
	"standard-version": {
		"t": ""                       // don't set a prefix for the tag because Obsidian needs 1.0.1 and not v1.0.1
	},

  ...
}
```

You also need to run `npm i --save-dev standard-version`. This will install `standard-version` and add it to the `devDependencies` in your `package.json`.

:::note
If your major version is below **1** (e.g. 0.3.4), bumping the minor and major versions with `feat:` and `BREAKING CHANGE:`, respectively, won't work and default to patch versions. You will have to use the following commands in that case:

```bash
# Release as minor
npm run release -- --release-as minor
# Release as major
npm run release -- --release-as major

```

The two extra hyphens are *not* a typo.
:::

When you want to make a release, commit your work with the Conventional Commits plugin (alternatively write the commit messages in the terminal/the VSCode GUI) and apply `feat:`, `fix:` or the other options as you see fit. Then, run `npm run release`. It will bump the version, commit it and apply the `git tag`. After that, you only need to run `git push --follow-tags origin main`, where `main` is your main branch. That will push the latest commit and the `git tag` to GitHub. In conjunction with the GitHub Actions script above, GitHub will build and publish the release for you.