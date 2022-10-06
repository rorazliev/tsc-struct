# Data Structures in TypeScript

![GitHub package.json version](https://img.shields.io/github/package-json/v/rorazliev/tsc-struct?color=informational) ![GitHub](https://img.shields.io/github/license/rorazliev/tsc-struct?color=informational)

`tsc-struct` is a package that provides strongly typed data structures such as `LinkedList<T>`, `Queue<T>`, and `Stack<T>`.

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
