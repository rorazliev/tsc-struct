# Hash Table

Represents a hash table.

- [Constructor](#constructor)
- [Properties](#properties)
  - [HashTable&lt;T>.buckets](#buckets)
  - [HashTable&lt;T>.keys](#keys)
- [Methods](#methods)
  - [HashTable&lt;T>.add()](#add)
  - [HashTable&lt;T>.contains()](#contains)
  - [HashTable&lt;T>.get()](#get)
  - [HashTable&lt;T>.hash()](#hash)
  - [HashTable&lt;T>.length()](#length)
  - [HashTable&lt;T>.remove()](#remove)

## Constructor <a name="constructor" />

Initializes a new instance of the `HashTable<T>` class.

By default, the initial size is 32.

```typescript
public constructor(size: number = 32);
```

## Properties <a name="properties" />

### HashTable&lt;T>.buckets <a name="buckets" />

Buckets in the `HashTable<T>`. Each is represented by `LinkedList<T>`.

The property is protected.

### HashTable&lt;T>.keys <a name="keys" />

A collection containing the keys in the `HashTable<T>`.

The property is protected.

## Methods <a name="methods" />

### HashTable&lt;T>.add() <a name="add" />

<details>

<summary>Parameters</summary>

`key` a specified key associated with the value

`value` the value of the element to add

</details>

Adds an element with the specified key and value into the `HashTable<T>`.

```typescript
public add(key: string, value: T): void;
```

### HashTable&lt;T>.contains() <a name="contains" />

<details>

<summary>Parameters</summary>

`key` a specified key associated with the value

</details>

Determines whether the `Hashtable<T>` contains a specific key.

Returns `true` if the value associated with the specific key exists, otherwise, returns `false`.

```typescript
public contains(key: string): boolean;
```

### HashTable&lt;T>.get() <a name="get" />

<details>

<summary>Parameters</summary>

`key` a specified key associated with the value

</details>

Returns the value associated with the specified key, otherwise, returns `false`.

```typescript
public get(key: string): T | null;
```

### HashTable&lt;T>.hash() <a name="hash" />

<details>

<summary>Parameters</summary>

`key` a specified key associated with a value

</details>

Returns the hash code for the specified key.

```typescript
protected hash(key: string): number;
```

### HashTable&lt;T>.length() <a name="length" />

Returns the length of `HashTable<T>`.

```typescript
public length(): number;
```

### HashTable&lt;T>.remove() <a name="remove" />

<details>

<summary>Parameters</summary>

`key` a specified key associated with the value

</details>

Removes the element with the specified key from the `HashTable<T>`.

```typescript
public remove(key: string): void;
```