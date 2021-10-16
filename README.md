# Data Structures in TypeScript

<p align="left">
  <img alt="npm" src="https://img.shields.io/npm/v/tsc-struct">
  <img alt="npm" src="https://img.shields.io/npm/dt/tsc-struct">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/rorazliev/tsc-struct">
  <img alt="Code style" src="https://img.shields.io/badge/code%20style-airbnb-ff69b4">
  <img alt="Coverage" src="https://img.shields.io/badge/coverage-100%25-success">
  <img alt="License" src="https://img.shields.io/github/license/rorazliev/tsc-struct">
</p>

**tsc-struct** is a collection of strongly typed data structures in TypeScript, that provides better type safety and performance.

## Usage

To install the package, run the following command:

```sh
npm install tsc-struct
```

To import any class into your code, use the following syntax (CommonJS):

```typescript
const { LinkedList } = require('tsc-struct');
```

ES6+:

```typescript
import { LinkedList } from 'tsc-struct';
```

The package can also be used within a project in JavaScript. The type safety and performace though will be lost.

## Example

The following code example demonstrates some features of the `LinkedList<T>` class:

```typescript
const { LinkedList } = require('tsc-struct');

// An array of words to work with
const words: string[] = [
  'the fox', 'jumps over', 'the dog',
];

// Create a linked list
const ll: LinkedList<string> = new LinkedList<string>(words);

// Add the word 'today' to the end of the linked list
ll.addLast('today');

console.log(ll.toArray()); // -> ['the fox', 'jumps over', 'the dog', 'today']

// Ensure the word 'fox' is in the linked list
console.log(ll.contains('fox')); // -> true

// Remove the word 'today'
ll.remove('today');

// Reverse the linked list
ll.reverse();

// Print the linked list as an array
console.log(ll.toArray()); // -> ['the dog', 'jumps over', 'the fox']
```

## Documentation

Currently, the collection contains the following classes:

| Class | Description |
| ----- | ----------- |
| **[Hash Table](https://github.com/rorazliev/tsc-struct/blob/main/docs/HASH_TABLE.md)** | Represents a hash table |
| **[Linked List](https://github.com/rorazliev/tsc-struct/blob/main/docs/LINKED_LIST.md)** | Represents a singly linked list |
| **[Linked List Node](https://github.com/rorazliev/tsc-struct/blob/main/docs/LINKED_LIST_NODE.md)** | Represents a node in a linked list |
| **[Queue](https://github.com/rorazliev/tsc-struct/blob/main/docs/QUEUE.md)** | Represents a first-in-first-out (FIFO) collection of instances of the same specified type |
| **[Stack](https://github.com/rorazliev/tsc-struct/blob/main/docs/STACK.md)** | Represents a variable size last-in-first-out (LIFO) collection of instances of the same specified type |

## Contributing

Thank you for considering contributing to the project! Please, check out [the contributing guidelines](https://github.com/rorazliev/tsc-struct/blob/main/CONTRIBUTING.md) to learn how you can get involved.

Please, also review [the Code of Conduct](https://github.com/rorazliev/tsc-struct/blob/main/CODE_OF_CONDUCT.md) to ensure that the our community is welcoming to all.

## License

**tsc-struct** is an open-source project licensed under the [MIT License](https://github.com/rorazliev/tsc-struct/blob/main/LICENSE). Use it to make something cool, have fun, and share what you've learned with others.