# normalizePath

```ts
export function normalizePath(path: string): string;
```

Make sure that the file path is normalized, so that it works on all operating systems, so that other functions (like [`getResourcePath()`](https://marcus.se.net/obsidian-plugin-docs/api/interfaces/DataAdapter#getresourcepath) can work). Mac/Linux and Windows have different styles for that. 


## Parameters

| Parameter | Description |
|-----------|-------------|
| `path` | |
