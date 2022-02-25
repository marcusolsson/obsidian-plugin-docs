# Scope

## Constructor

```ts
constructor(parent: Scope);
```

## Methods

### register

```ts
register(modifiers: Modifier[], key: string | null, func: KeymapEventListener): KeymapEventHandler;
```

### unregister

```ts
unregister(handler: KeymapEventHandler): void;
```
