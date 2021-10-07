# Linked List Node

Represents a node in a `LinkedList<T>`.

## Constructor

Initializes a new instance of the `LinkedListNode<T>` class, containing the specified value.

```typescript
public constructor(value: T, next: LinkedListNode<T> | null = null, key: string | null = null);
```

## Properties

### LinkedListNode&lt;T>.value

The value contained in the node.

### LinkedListNode&lt;T>.next

A reference to the next node in the `LinkedList<T>`, or `null` if the current node is the last element of the `LinkedList<T>`.

### LinkedListNode&lt;T>.key

The key used as a reference to the node in the `HashTable<T>`, or `null` if the `LinkedList<T>` is used in a different scenatio.

The property is protected and cannot be changed after initialization.

## Methods

### LinkedListNode&lt;T>.getKey()

Returns the key used as a reference to the node.

Returns `null` if the key has not been set up.

```typescript
public getKey(): string | null;
```