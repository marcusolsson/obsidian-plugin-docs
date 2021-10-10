# prepareFuzzySearch

```ts
export function prepareFuzzySearch(query: string): (text: string) => SearchResult | null;
```

Construct a fuzzy search callback that runs on a target string.
Performance may be an issue if you are running the search for more than a few thousand times.
If performance is a problem, consider using `prepareSimpleSearch` instead.

## Parameters

| Parameter | Description |
|-----------|-------------|
| `query` | the fuzzy query. |
