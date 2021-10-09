# Linked List

Represents a singly linked list.

- [Constructor](#constructor)
- [Properties](#properties)
  - [LinkedList&lt;T>.first](#first)
  - [LinkedList&lt;T>.last](#last)
- [Methods](#methods)
  - [LinkedList&lt;T>.addFirst()](#addFirst)
  - [LinkedList&lt;T>.addLast()](#addLast)
  - [LinkedList&lt;T>.contains()](#contains)
  - [LinkedList&lt;T>.find()](#find)
  - [LinkedList&lt;T>.findByKey()](#findByKey)
  - [LinkedList&lt;T>.findLast()](#findLast)
  - [LinkedList&lt;T>.remove()](#remove)
  - [LinkedList&lt;T>.removeFirst()](#removeFirst)
  - [LinkedList&lt;T>.removeLast()](#removeLast)
  - [LinkedList&lt;T>.reverse()](#reverse)
  - [LinkedList&lt;T>.toArray()](#toArray)


### Constructor <a name="constructor" />

Initializes a new instance of the `LinkedList<T>` class that is empty.

If an array of values is passed as a property, it initializes a new instance of the `LinkedList<T>` class that contains elements copied from the array.

```typescript
public constructor(iterable: T[] | null = null);
```

If the `LinkedList<T>` is empty, the `first` and `last` properties contain `null`.

## Properties <a name="properties" />

### LinkedList&lt;T>.first <a name="first" />

The first `LinkedListNode<T>` of the `LinkedList<T>`.

If the `LinkedList<T>` is empty, the property contains `null`.

### LinkedList&lt;T>.last <a name="last" />

The last `LinkedListNode<T>` of the `LinkedList<T>`.

If the `LinkedList<T>` is empty, the property contains `null`.

## Methods <a name="methods" />

### LinkedList&lt;T>.addFirst() <a name="addFirst" />

<details>

<summary>Parameters</summary>

`value` a specified value that will be contained in the node

`key` a reference key to used as a reference to the node

</details>

Adds a value at the start of the `LinkedList<T>`.

```typescript
public addFirst(value: T, key: string | null = null): void;
```

### LinkedList&lt;T>.addLast() <a name="addLast" />

<details>

<summary>Parameters</summary>

`value` a specified value that will be contained in the node

`key` a reference key to used as a reference to the node

</details>

Adds a value at the end of the `LinkedList<T>`.

```typescript
public addLast(value: T, key: string | null = null): void;
```

### LinkedList&lt;T>.contains() <a name="contains" />

<details>

<summary>Parameters</summary>

`value` a value to locate in the `LinkedList<T>`

</details>

Determines whether a value is in the `LinkedList<T>`.

Returns `true` if `value` is found in the `LinkedList<T>`. Otherwise, returns `false`.

```typescript
public contains(value: T): boolean;
```

### LinkedList&lt;T>.find() <a name="find" />

<details>

<summary>Parameters</summary>

`value` a value to locate in the `LinkedList<T>`

</details>

Finds the first node that contains the specified value.

Returns the instance of `LinkedListNode<T>` if found in the `LinkedList<T>`. Otherwise, returns `null`.

```typescript
public find(value: T): LinkedListNode<T> | null;
```

### LinkedList&lt;T>.findByKey() <a name="findByKey" />

<details>

<summary>Parameters</summary>

`key` a key used as a reference to the node

</details>

Finds the node that contains the specified reference key.

Returns the instance of `LinkedListNode<T>` if found in the `LinkedList<T>`. Otherwise, returns `null`.

```typescript
public findByKey(key: string): LinkedListNode<T> | null;
```

### LinkedList&lt;T>.findLast() <a name="findLast" />

<details>

<summary>Parameters</summary>

`value` a value to locate in the `LinkedList<T>`

</details>

Finds the last node that contains the specified value.

Returns the instance of `LinkedListNode<T>` if found in the `LinkedList<T>`. Otherwise, returns `null`.

```typescript
public findLast(value: T): LinkedListNode<T> | null;
```

### LinkedList&lt;T>.remove() <a name="remove" />

<details>

<summary>Parameters</summary>

`value` a value to locate in the `LinkedList<T>`

</details>

Removes the first occurrence of value from the `LinkedList<T>`.

```typescript
public remove(value: T): void;
```

### LinkedList&lt;T>.removeFirst() <a name="removeFirst" />

Removes the node at the start of the `LinkedList<T>`.

```typescript
public removeFirst(): void;
```

### LinkedList&lt;T>.removeLast() <a name="removeLast" />

Removes the node at the end of the `LinkedList<T>`.

```typescript
public removeLast(): void;
```

### LinkedList&lt;T>.reverse() <a name="reverse" />

Reverses the order of the elements in the `LinkedList<T>`.

```typescript
public reverse(): void;
```

### LinkedList&lt;T>.toArray() <a name="toArray" />

Copys the values of nodes of the `LinkedList<T>` to a new array.

If the `LinkedList<T>` is empty, returns `null`.

```typescript
public toArray(): T[] | null;
```
