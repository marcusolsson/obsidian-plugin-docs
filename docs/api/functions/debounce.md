# debounce

```ts
export function debounce<T extends unknown[]>(cb: (...args: [
    ...T
]) => any, timeout?: number, resetTimer?: boolean): Debouncer<T>;
```

A standard debounce function.

## Parameters

| Parameter | Description |
|-----------|-------------|
| <code>cb</code> | The function to call. |
| <code>timeout</code> | The timeout to wait. |
| <code>resetTimer</code> | Whether to reset the timeout when the debouncer is called again. |
