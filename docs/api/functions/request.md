# request

```ts
export function request(request: RequestUrlParam): Promise<string>;
```

Similar to `fetch()`, request a URL using HTTP/HTTPS, without any CORS restrictions.
Returns the text value of the response.

## Parameters

| Parameter | Description |
|-----------|-------------|
| `request` | |

```ts
type RequestUrlParam = {
  url: string,
  method: 'POST'|'GET',
  body: string,
  contentType: string //'application/json'
}
```
