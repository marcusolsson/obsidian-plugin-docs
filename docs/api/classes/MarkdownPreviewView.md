# MarkdownPreviewView

Extends `MarkdownRenderer`

Implements `MarkdownSubView`, `MarkdownPreviewEvents`

## Constructor

```ts
constructor(containerEl: HTMLElement);
```

## Properties

### containerEl

```ts
containerEl: HTMLElement
```

## Methods

### get

```ts
get(): string;
```

### set

```ts
set(data: string, clear: boolean): void;
```

### clear

```ts
clear(): void;
```

### rerender

```ts
rerender(full?: boolean): void;
```

### getScroll

```ts
getScroll(): number;
```

### applyScroll

```ts
applyScroll(scroll: number): void;
```
