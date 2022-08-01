# AbstractTextComponent

Extends `ValueComponent<string>`

## Constructor

```ts
constructor(inputEl: T);
```

## Properties

### inputEl

```ts
inputEl: T
```

## Methods

### setDisabled

```ts
setDisabled(disabled: boolean): this;
```

### getValue

```ts
getValue(): string;
```

### setValue

```ts
setValue(value: string): this;
```

### setPlaceholder

```ts
setPlaceholder(placeholder: string): this;
```

### onChanged

```ts
onChanged(): void;
```

### onChange

```ts
onChange(callback: (value: string) => any): this;
```
