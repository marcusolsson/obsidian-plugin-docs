# Component

## Constructor

```ts
constructor();
```

## Methods

### load

```ts
load(): void;
```

Load this component and its children

### onload

```ts
onload(): void;
```

Override this to load your component

### unload

```ts
unload(): void;
```

Unload this component and its children

### onunload

```ts
onunload(): void;
```

Override this to unload your component

### addChild

```ts
addChild<T extends Component>(component: T): T;
```

Adds a child component, loading it if this component is loaded

### removeChild

```ts
removeChild<T extends Component>(component: T): T;
```

Removes a child component, unloading it

### register

```ts
register(cb: () => any): void;
```

Registers a callback to be called when unloading

### registerEvent

```ts
registerEvent(eventRef: EventRef): void;
```

Registers an event to be detached when unloading

### registerDomEvent

```ts
registerDomEvent<K extends keyof WindowEventMap>(el: Window, type: K, callback: (this: HTMLElement, ev: WindowEventMap[K]) => any): void;
```

Registers an DOM event to be detached when unloading

### registerDomEvent

```ts
registerDomEvent<K extends keyof DocumentEventMap>(el: Document, type: K, callback: (this: HTMLElement, ev: DocumentEventMap[K]) => any): void;
```

Registers an DOM event to be detached when unloading

### registerDomEvent

```ts
registerDomEvent<K extends keyof HTMLElementEventMap>(el: HTMLElement, type: K, callback: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any): void;
```

Registers an DOM event to be detached when unloading

### registerScopeEvent

```ts
registerScopeEvent(keyHandler: KeymapEventHandler): void;
```

Registers an key event to be detached when unloading

### registerInterval

```ts
registerInterval(id: number): number;
```

Registers an interval (from setInterval) to be cancelled when unloading
Use {@link window.setInterval} instead of {@link setInterval} to avoid TypeScript confusing between NodeJS vs Browser API
