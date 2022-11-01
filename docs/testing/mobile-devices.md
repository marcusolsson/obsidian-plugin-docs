# Develop for mobile devices

Learn how you can develop your plugin for mobile devices.

## Emulate mobile device on desktop

You can emulate Obsidian running a mobile device directly from the Developer Tools.

1. Open the **Developer Tools**.
1. Select the **Console** tab.
1. Enter the following and then press `Enter`.

   ```ts
   this.app.emulateMobile(true);
   ```

To disable mobile emulation, enter the following and press `Enter`:

```ts
this.app.emulateMobile(false);
```

:::tip

To instead toggle mobile emulation back and forth, you can use the `this.app.isMobile` flag:

```ts
this.app.emulateMobile(!this.app.isMobile);
```

:::
