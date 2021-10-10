# WorkspaceLeaf

Extends `WorkspaceItem`

## Constructor

```ts
constructor();
```

## Properties

### view

```ts
view: View
```

## Methods

### openFile

```ts
openFile(file: TFile, openState?: OpenViewState): Promise<void>;
```

### open

```ts
open(view: View): Promise<View>;
```

### getViewState

```ts
getViewState(): ViewState;
```

### setViewState

```ts
setViewState(viewState: ViewState, eState?: any): Promise<void>;
```

### getEphemeralState

```ts
getEphemeralState(): any;
```

### setEphemeralState

```ts
setEphemeralState(state: any): void;
```

### togglePinned

```ts
togglePinned(): void;
```

### setPinned

```ts
setPinned(pinned: boolean): void;
```

### setGroupMember

```ts
setGroupMember(other: WorkspaceLeaf): void;
```

### setGroup

```ts
setGroup(group: string): void;
```

### detach

```ts
detach(): void;
```

### getIcon

```ts
getIcon(): string;
```

### getDisplayText

```ts
getDisplayText(): string;
```

### onResize

```ts
onResize(): void;
```

### on

```ts
on(name: 'pinned-change', callback: (pinned: boolean) => any, ctx?: any): EventRef;
```

### on

```ts
on(name: 'group-change', callback: (group: string) => any, ctx?: any): EventRef;
```
