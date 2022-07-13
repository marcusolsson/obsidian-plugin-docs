# WorkspaceItem

Extends `Events`

## Constructor

```ts
constructor();
```

## Methods

### getRoot

```ts
getRoot(): WorkspaceItem;
```

### getContainer

```ts
getContainer(): WorkspaceContainer;
```

Get the root container parent item, which can be one of:
- {@link WorkspaceRoot}
- {@link WorkspaceWindow}
