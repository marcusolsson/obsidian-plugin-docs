# ValueComponent

Extends `BaseComponent`

## Constructor

```ts
constructor();
```

## Methods

### registerOptionListener

```ts
registerOptionListener(listeners: Record<string, (value?: T) => T>, key: string): this;
```

### getValue

```ts
abstract getValue(): T;
```

### setValue

```ts
abstract setValue(value: T): this;
```
