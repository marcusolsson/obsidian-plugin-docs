# DropdownComponent

Extends `ValueComponent<string>`

## Constructor

```ts
constructor(containerEl: HTMLElement);
```

## Properties

### selectEl

```ts
selectEl: HTMLSelectElement
```

## Methods

### setDisabled

```ts
setDisabled(disabled: boolean): this;
```

### addOption

```ts
addOption(value: string, display: string): this;
```

### addOptions

```ts
addOptions(options: Record<string, string>): this;
```

### getValue

```ts
getValue(): string;
```

### setValue

```ts
setValue(value: string): this;
```

### onChange

```ts
onChange(callback: (value: string) => any): this;
```
