# Data Structures in TypeScript

![GitHub package.json version](https://img.shields.io/github/package-json/v/rorazliev/tsc-struct?color=informational) ![GitHub](https://img.shields.io/github/license/rorazliev/tsc-struct?color=informational)

`tsc-struct` is a package that provides strongly typed data structures such as `HashTable<T>`, `LinkedList<T>`, `Queue<T>`, and `Stack<T>`.

## Installation

```
npm install tsc-struct
```

## Usage

```typescript
import { LinkedList } from 'tsc-struct';

const list: LinkedList<number> = new LinkedList<number>([1, 2, 3]);

console.log(list.contains(1)); // -> true
console.log(list.contains(4)); // -> false

list.addLast(4);

console.log(list.toArray()); // -> [1, 2, 3, 4]

list.reverse();

console.log(list.toArray()); // -> [4, 3, 2, 1]
```

### HashTable

Represents a hash table, where `T` specifies the element type of the hash table.

| Method                       | Description                                           |
| ---------------------------- | ----------------------------------------------------- |
| `constructor()`              | Initialize a new instance of the `HashTable<T>` class |
| `constructor(sizes: number)` | Initialize a new instance of the `HashTable<T>` class |
| `contains(key: string)`      | Determines whether a value is in the `HashTable<T>`   |
| `add(key: string, value: T)` | Adds a new value to the `HashTable<T>`                |
| `get(key: T)`                | Gets the value from the `HashTable<T>`                |
| `remove(key: string)`        | Removes the value from the `HashTable<T>`             |
| `getLength()`                | Get the length of the `HashTable<T>`                  |

### LinkedList

Represents a singly linked list, where `T` specifies the element type of the linked list.

| Method                          | Description                                                             |
| ------------------------------- | ----------------------------------------------------------------------- |
| `constructor()`                 | Initializes a new instance of the `LinkedList<T>` class                 |
| `constructor(values: Array<T>)` | Initializes a new instance of the `LinkedList<T>` class                 |
| `addFirst(value: T)`            | Adds a new node at the start of the `LinkedList<T>`                     |
| `addLast(value: T)`             | Adds a new node at the end of the `LinkedList<T>`                       |
| `contains(value: T)`            | Determines whether a value is in the `LinkedList<T>`                    |
| `find(value: T)`                | Finds the first node that contains the specified value                  |
| `findLast(value: T)`            | Finds the last node that contains the specified value                   |
| `remove(value: T)`              | Removes all occurrences of the specified value from the `LinkedList<T>` |
| `removeHead()`                  | Removes the node at the start of the `LinkedList<T>`                    |
| `removeTail()`                  | Removes the node at the end of the `LinkedList<T>`                      |
| `reverse()`                     | Reverses the order of the nodes in the `LinkedList<T>`                  |
| `toArray()`                     | Returns an array of all values                                          |

### Queue

Represents a first-in-first-out (FIFO) collection of instances of the same specified type.

| Method                          | Description                                                    |
| ------------------------------- | -------------------------------------------------------------- |
| `constructor()`                 | Initialize a new instance of the `Queue<T>` class              |
| `constructor(values: Array<T>)` | Initialize a new instance of the `Queue<T>` class              |
| `contains(value: T)`            | Determines whether a value is in the `Queue<T>`                |
| `dequeue()`                     | Removes and returns the value from the start of the `Queue<T>` |
| `enqeue()`                      | Adds the value at the end of the `Queue<T>`                    |
| `peek()`                        | Returns the value from the start of the `Queue<T>`             |
| `toArray()`                     | Returns an array of all values                                 |

### Stack

Represents a variable size last-in-first-out (LIFO) collection of instances of the same specified type.

| Method                          | Description                                                    |
| ------------------------------- | -------------------------------------------------------------- |
| `constructor()`                 | Initialize a new instance of the `Stack<T>` class              |
| `constructor(values: Array<T>)` | Initialize a new instance of the `Stack<T>` class              |
| `contains(value: T)`            | Determines whether a value is in the `Stack<T>`                |
| `peek()`                        | Returns the value from the start of the `Stack<T>`             |
| `pop()`                         | Removes and returns the value from the start of the `Stack<T>` |
| `push(value: T)`                | Adds the value at the start of the `Stack<T>`                  |
| `toArray()`                     | Returns an array of all values                                 |

## License

This is an open-source project licensed under the [MIT Lisense](https://github.com/rorazliev/tsc-struct/blob/main/LICENSE).
