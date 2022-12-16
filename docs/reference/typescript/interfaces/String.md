# String

Allows manipulation and formatting of text strings and determination and location of substrings within strings.

## Methods

### contains

```ts
contains: (target: string) => boolean
```

### startsWith

```ts
startsWith: { (searchString: string, position?: number): boolean; (searchString: string, position?: number): boolean; }
```

Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
position. Otherwise returns false.

### endsWith

```ts
endsWith: { (searchString: string, endPosition?: number): boolean; (target: string, length?: number): boolean; }
```

Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
endPosition – length(this). Otherwise returns false.

### format

```ts
format: (...args: string[]) => string
```
