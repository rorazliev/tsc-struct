import isEqual from 'lodash.isequal';
import LinkedListNode from './LinkedListNode';
/**
 * Represents a singly linked list
 */
export default class LinkedList<T> {
  /**
	 * The first node of the LinkedList<T>
	 * @param {LinkedListNode<T> | null}
	 */
  first: LinkedListNode<T> | null = null;

  /**
	 * The last node of the LinkedList<T>
	 * @param {LinkedListNode<T> | null}
	 */
  last: LinkedListNode<T> | null = null;

  /**
	 * Initialize a new instance of the LinkedList<T> class
	 * @param {T[] | null} iterable
	 */
  constructor(iterable: T[] | null = null) {
    if (iterable !== null) {
      iterable.forEach((value) => this.addLast(value));
    }
  }

  /**
	 * Add a value at the start of the LinkedList<T>
	 * @param {T} value
	 * @param {string | null} key
	 * @returns {void}
	 */
  addFirst(value: T, key: string | null = null): void {
    const node: LinkedListNode<T> = new LinkedListNode<T>(
      value,
      this.first,
      key,
    );

    this.first = node;
    if (this.last === null) this.last = node;
  }

  /**
	 * Add a value at the end of the LinkedList<T>
	 * @param {T} value
	 * @param {string | null} key
	 * @returns {void}
	 */
  addLast(value: T, key: string | null = null): void {
    const node: LinkedListNode<T> = new LinkedListNode<T>(value, null, key);

    if (this.first === null) {
      this.first = node;
      this.last = node;
    } else {
			this.last!.next = node;
			this.last = node;
    }
  }

  /**
	 * Determine whether a value is in the LinkedList<T>
	 * @param {T} value
	 * @returns {boolean}
	 */
  contains(value: T): boolean {
    /* istanbul ignore next */
    if (this.first === null) return false;

    let current: LinkedListNode<T> | null = this.first;

    while (current) {
      if (isEqual(current.value, value)) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  /**
	 * Find the first node that contains the specified value
	 * @param {T} value
	 * @returns {LinkedListNode<T> | null}
	 */
  find(value: T): LinkedListNode<T> | null {
    /* istanbul ignore next */
    if (this.first === null) return null;

    let current: LinkedListNode<T> | null = this.first;

    while (current) {
      if (isEqual(current.value, value)) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  /**
	 * Find the node that contains the specified reference key
	 * @param {string} key
	 * @returns {LinkedListNode<T> | null}
	 */
  /* istanbul ignore next */
  findByKey(key: string): LinkedListNode<T> | null {
    if (this.first === null || this.first.getKey() === null) return null;

    let current: LinkedListNode<T> | null = this.first;

    while (current) {
      if (current.getKey() === key) return current;
      current = current.next;
    }
    return null;
  }

  /**
	 * Find the last node that contains the specified value
	 * @param {T} value
	 * @returns {LinkedListNode<T> | null}
	 */
  findLast(value: T): LinkedListNode<T> | null {
    /* istanbul ignore next */
    if (this.first === null) return null;

    let current: LinkedListNode<T> | null = this.first;
    let output: LinkedListNode<T> | null = null;

    while (current) {
      if (isEqual(current.value, value)) {
        output = current;
      }
      current = current.next;
    }
    return output;
  }

  /**
	 * Remove the first occurrence of a node or value from the LinkedList<T>
	 * @param {T} value
	 * @returns {void}
	 */
  remove(value: T): void {
    /* istanbul ignore next */
    if (this.first === null) return;

    while (this.first !== null && isEqual(this.first.value, value)) {
      this.first = this.first.next;
    }

    let current: LinkedListNode<T> | null = this.first;

    if (current) {
      while (current.next) {
        if (isEqual(current.next.value, value)) {
          current.next = current.next.next;
        } else {
          current = current.next;
        }
      }
    }

    if (isEqual(this.last!.value, value)) {
      this.last = current;
    }
  }

  /**
	 * Remove the node at the start of the LinkedList<T>
	 * @returns {void}
	 */
  removeFirst(): void {
    /* istanbul ignore next */
    if (this.first === null) return;

    if (this.first.next !== null) {
      this.first = this.first.next;
    } else {
      this.first = null;
      this.last = null;
    }
  }

  /**
	 * Remove the node at the end of the LinkedList<T>
	 * @returns {void}
	 */
  removeLast(): void {
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
      return;
    }

    let current: LinkedListNode<T> | null = this.first;

    while (current!.next) {
      if (current!.next.next) {
        current = current!.next;
      } else {
				current!.next = null;
      }
    }
    this.last = current;
  }

  /**
	 * Reverse the order of the elements in the LinkedList<T>
	 * @returns {void}
	 */
  reverse(): void {
    /* istanbul ignore next */
    if (this.first === null) return;

    let current: LinkedListNode<T> | null = this.first;
    let previous: LinkedListNode<T> | null = null;
    let next: LinkedListNode<T> | null = null;

    while (current) {
      next = current.next;
      current.next = previous;

      previous = current;
      current = next;
    }

    this.last = this.first;
    this.first = previous;
  }

  /**
	 * Copy the values of nodes of the LinkedList<T> to a new array
	 * @returns {T[] | null}
	 */
  toArray(): Array<T> | null {
    /* istanbul ignore next */
    if (this.first === null) return null;

    let current: LinkedListNode<T> | null = this.first;
    const output: T[] = [];

    while (current) {
      output.push(current.value);
      current = current.next;
    }
    return output;
  }
}
