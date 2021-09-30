import LinkedList from '../linked-list/LinkedList';
/**
 * Represents a variable size last-in-first-out (LIFO)
 * collection of instances of the same specified type
 */
export default class Stack<T> {
  /**
	 * LinkedList<T> that stores values
	 */
  protected stack: LinkedList<T>;

  /**
	 * Initialize a new instance of the Stack<T> class
	 * @param {T[] | null} iterable
	 */
  constructor(iterable: T[] | null = null) {
    this.stack = new LinkedList<T>(iterable);
  }

  /**
	 * Determine whether a value is in the Stack<T>
	 * @param {T} value
	 * @returns {boolean}
	 */
  contains(value: T): boolean {
    return this.stack.contains(value);
  }

  /**
	 * Get the value at the top of the Stack<T> without removing it
	 * @returns {T | null}
	 */
  peek(): T | null {
    /* istanbul ignore next */
    if (this.stack.first === null) return null;
    return this.stack.first.value;
  }

  /**
	 * Remove and get the value at the top of the Stack<T>
	 * @returns {T | null}
	 */
  pop(): T | null {
    /* istanbul ignore next */
    if (this.stack.first == null) return null;

    const { value } = this.stack.first;
    this.stack.removeFirst();
    return value;
  }

  /**
	 * Insert a value at the top of the Stack<T>
	 * @param {T} value
	 * @returns {void}
	 */
  push(value: T): void {
    this.stack.addFirst(value);
  }

  /**
	 * Copy the Stack<T> to a new array
	 * @returns {T[] | null}
	 */
  toArray(): T[] | null {
    return this.stack.toArray();
  }
}
