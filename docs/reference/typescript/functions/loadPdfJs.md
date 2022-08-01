# loadPdfJs

```ts
export function loadPdfJs(): Promise<any>;
```

Load PDF.js and return a promise to the global pdfjsLib object.
Can also use `window.pdfjsLib` after this promise resolves to get the same reference.
