# prepareSimpleSearch

```ts
export function prepareSimpleSearch(query: string): (text: string) => SearchResult | null;
```

Construct a simple search callback that runs on a target string.

## Parameters

| Parameter | Description |
|-----------|-------------|
| <code>query</code> | the space-separated words |
