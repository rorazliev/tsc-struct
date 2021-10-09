# Linked List Node

Represents a node in a `LinkedList<T>`.

- [Constructor](#constructor)
- [Properties](#properties)
  - [LinkedListNode&lt;T>.value](#value)
  - [LinkedListNode&lt;T>.next](#next)
  - [LinkedListNode&lt;T>.key](#key)
- [Methods](#methods)
  - [LinkedListNode&lt;T>.getKey()](#getKey)

## Constructor <a name="constructor" />

Initializes a new instance of the `LinkedListNode<T>` class, containing the specified value.

```typescript
public constructor(value: T, next: LinkedListNode<T> | null = null, key: string | null = null);
```

## Properties <a name="properties" />

### LinkedListNode&lt;T>.value <a name="values" />

The value contained in the node.

### LinkedListNode&lt;T>.next <a name="next" />

A reference to the next node in the `LinkedList<T>`, or `null` if the current node is the last element of the `LinkedList<T>`.

### LinkedListNode&lt;T>.key <a name="key" />

The key used as a reference to the node in the `HashTable<T>`, or `null` if the `LinkedList<T>` is used in a different scenatio.

The property is protected and cannot be changed after initialization.

## Methods <a name="methods" />

### LinkedListNode&lt;T>.getKey() <a name="getKey" />

Returns the key used as a reference to the node.

Returns `null` if the key has not been set up.

```typescript
public getKey(): string | null;
```