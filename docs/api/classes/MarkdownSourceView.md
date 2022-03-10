# MarkdownSourceView

Implements `MarkdownSubView`, `HoverParent`

## Constructor

```ts
constructor(view: MarkdownView);
```

## Properties

### cmEditor

```ts
cmEditor: any
```

### hoverPopover

```ts
hoverPopover: HoverPopover
```

## Methods

### clear

```ts
clear(): void;
```

### get

```ts
get(): string;
```

### set

```ts
set(data: string, clear: boolean): void;
```

### getSelection

```ts
getSelection(): string;
```

### getScroll

```ts
getScroll(): number;
```

### applyScroll

```ts
applyScroll(scroll: number): void;
```
