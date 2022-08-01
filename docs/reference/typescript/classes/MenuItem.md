# MenuItem

## Constructor

```ts
constructor();
```

## Methods

### setTitle

```ts
setTitle(title: string | DocumentFragment): this;
```

### setIcon

```ts
setIcon(icon: string | null, size?: number): this;
```

### setActive

```ts
setActive(active: boolean): this;
```

### setDisabled

```ts
setDisabled(disabled: boolean): this;
```

### setIsLabel

```ts
setIsLabel(isLabel: boolean): this;
```

### onClick

```ts
onClick(callback: (evt: MouseEvent | KeyboardEvent) => any): this;
```

### setSection

```ts
setSection(section: string): this;
```

Sets the section this menu item should belong in.
To find the section IDs of an existing menu, inspect the DOM elements
to see their `data-section` attribute.
