# Queue

Represents a first-in-first-out (FIFO) collection of instances of the same specified type.

- [Constructor](#constructor)
- [Properties](#properties)
  - [Queue&lt;T>.queue](#queue)
- [Methods](#methods)
  - [Queue&lt;T>.contains()](#contains)
  - [Queue&lt;T>.dequeue()](#dequeue)
  - [Queue&lt;T>.enqueue()](#enqueue)
  - [Queue&lt;T>.peek()](#peek)
  - [Queue&lt;T>.toArray()](#toArray)

## Constructor <a name="constructor" />

Initializes a new instance of the `Queue<T>` class.

If an array of values is passed as a property, it initializes a new instance of the `Queue<T>` class that contains elements copied from the array.

```typescript
public constructor(iterable: T[] | null = null);
```

## Properties <a name="properties" />

### Queue&lt;T>.queue <a name=""queue" />

`LinkedList<T>` that stores values.

The property is protected.

## Methods <a name="methods" />

### Queue&lt;T>.contains() <a name="contains" />

<details>

  <summary>Parameters</summary>

  `value` a value to locate in the `Queue<T>`

</details>

Determines whether a value is in the `Queue<T>`.

Returns `true` if value is found in the `Queue<T>`. Otherwise, returns `false`.

```typescript
public contains(value: T): boolean;
```

### Queue&lt;T>.dequeue() <a name="dequeue" />

Removes and returns the value at the beginning of the `Queue<T>`.

Returns `null` if the value is not found.

```typescript
public dequeue(): T | null;
```

### Queue&lt;T>.enqueue() <a name="enqueue" />

<details>

  <summary>Parameters</summary>

  `value` a value to locate in the `Queue<T>`

</details>

Adds a value to the end of the `Queue<T>`.

```typescript
public enqueue(value: T): void;
```

### Queue&lt;T>.peek() <a name="peek" />

Returns the value at the top of the `Queue<T>` without removing it.

Returns `null`, if the `Queue<T>` is empty.

```typescript
public peek(): T | null;
```

### Queue&lt;T>.toArray() <a name="toArray" />

Copies the `Queue<T>` to a new array.

Returns `null`, if the `Queue<T>` is empty.

```typescript
public toArray(): T[] | null;
```