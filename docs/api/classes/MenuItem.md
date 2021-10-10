# MenuItem

## Constructor

```ts
constructor(menu: Menu);
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
