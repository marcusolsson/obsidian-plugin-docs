# Events

## Constructor

```ts
constructor();
```

## Methods

### on

```ts
on(name: string, callback: (...data: any) => any, ctx?: any): EventRef;
```

### off

```ts
off(name: string, callback: (...data: any) => any): void;
```

### offref

```ts
offref(ref: EventRef): void;
```

### trigger

```ts
trigger(name: string, ...data: any[]): void;
```

### tryTrigger

```ts
tryTrigger(evt: EventRef, args: any[]): void;
```
