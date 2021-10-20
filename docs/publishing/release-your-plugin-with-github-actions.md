# Release your plugin with GitHub Actions

Manually creating your plugin release can be time-consuming and error-prone. In this guide, you'll configure your plugin to use GitHub Actions to automatically create a release when you create a new tag.

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
