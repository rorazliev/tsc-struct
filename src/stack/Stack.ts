import { LinkedList } from '../linked-list/LinkedList';
/**
 * Represents a variable size last-in-first-out (LIFO) collection of
 * instances of the same specified type.
 */
export class Stack<T> {
	/**
	 * The LinkedList<T> instance that stores values.
	 */
	protected stack: LinkedList<T>;
	/**
	 * Initialize a new instance of the Stack<T> class.
	 * @param {Array<T> | null} values
	 */
	constructor(values: Array<T> | null = null) {
		this.stack = new LinkedList<T>(values);
	}
	/**
	 * Determines whether a value is in the Stack<T>.
	 * @param {T} value
	 * @return {boolean}
	 */
	contains(value: T): boolean {
		return this.stack.contains(value);
	}
	/**
	 * Returns the value from the start of the Stack<T>.
	 * @return {T | null}
	 */
	peek(): T | null {
		if (!this.stack.head) {
			return null;
		}
		return this.stack.head.value;
	}
	/**
	 * Removes and returns the value from the start of the Stack<T>.
	 * @return {T | null}
	 */
	pop(): T | null {
		if (!this.stack.head) {
			return null;
		}
		const { value } = this.stack.head;
		this.stack.removeHead();
		return value;
	}
	/**
	 * Adds the value at the start of the Stack<T>.
	 * @param {T} value
	 * @return {Stack<T>}
	 */
	push(value: T): Stack<T> {
		this.stack.addFirst(value);
		return this;
	}
	/**
	 * Returns an array that represents the current Stack<T>.
	 * @return {Array<T>}
	 */
	toArray(): Array<T> {
		return this.stack.toArray();
	}
}
