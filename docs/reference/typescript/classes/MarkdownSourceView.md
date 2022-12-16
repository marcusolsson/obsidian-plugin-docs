# MarkdownSourceView

Implements `MarkdownSubView`, `HoverParent`, `MarkdownFileInfo`

## Constructor

```ts
constructor(view: MarkdownView);
```

## Properties

### app

```ts
app: App
```

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
