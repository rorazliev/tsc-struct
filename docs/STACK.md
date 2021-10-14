# Stack

Represents a variable size last-in-first-out (LIFO) collection of instances of the same specified type.

- [Constructor](#constructor)
- [Properties](#properties)
  - [Stack&lt;T>.stack](#stack)
- [Methods](#methods)
  - [Stack&lt;T>.contains()](#contains)
  - [Stack&lt;T>.peek()](#peek)
  - [Stack&lt;T>.pop()](#pop)
  - [Stack&lt;T>.push()](#push)
  - [Stack&lt;T>.toArray()](#toArray)

## Constructor <a name="constructor" />

Initializes a new instance of the `Stack<T>` class.

If an array of values is passed as a property, it initializes a new instance of the `Stack<T>` class that contains elements copied from the array.

```typescript
public constructor(iterable: T[] | null = null);
```

## Properties <a name="properties" />

### Stack&lt;T>.stack <a name="stack" />

`LinkedList<T>` that stores values.

The property is protected.

## Methods <a name="methods" />

### Stack&lt;T>.contains() <a name="contains" />

<details>

<summary>Parameters</summary>

`value` a value to locate in the `Stack<T>`

</details>

Determines whether a value is in the `Stack<T>`.

Returns `true` if value is found in the `Stack<T>`. Otherwise, returns `false`.

```typescript
public contains(value: T): boolean;
```

### Stack&lt;T>.peek() <a name="peek" />

Returns the value at the top of the `Stack<T>` without removing it.

Returns `null`, if the `Stack<T>` is empty.

```typescript
public peek(): T | null;
```

### Stack&lt;T>.pop() <a name="pop" />

Removes and returns the value at the top of the `Stack<T>`.

Returns `null`, if the `Stack<T>` is empty.

```typescript
public pop(): T | null;
```

### Stack&lt;T>.push() <a name="push" />

<details>

<summary>Parameters</summary>

`value` a value to locate in the `Stack<T>`

</details>

Inserts a value at the top of the `Stack<T>`.

```typescript
public push(value: T): void;
```

### Stack&lt;T>.toArray() <a name="toArray" />

Copies the `Stack<T>` to a new array.

Returns `null`, if the `Stack<T>` is empty.

```typescript
public toArray(): T[] | null;
```