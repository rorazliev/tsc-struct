import { LinkedList } from '../linked-list/LinkedList';
/**
 * Represents a first-in-first-out (FIFO) collection of instances
 * of the same specified type.
 */
export class Queue<T> {
	/**
	 * The LinkedList<T> instance that stores values.
	 */
	protected queue: LinkedList<T>;
	/**
	 * Initialize a new instance of the Queue<T> class.
	 * @param {Array<T>} values
	 */
	constructor(values: Array<T> | null = null) {
		this.queue = new LinkedList<T>(values);
	}
	/**
	 * Determines whether a value is in the Queue<T>.
	 * @param {T} value
	 * @return {boolean}
	 */
	contains(value: T): boolean {
		return this.queue.contains(value);
	}
	/**
	 * Removes and returns the value from the start of the Queue<T>.
	 * @return {T | null}
	 */
	dequeue(): T | null {
		if (!this.queue.head) {
			return null;
		}
		const { value } = this.queue.head;
		this.queue.removeHead();
		return value;
	}
	/**
	 * Adds the value at the end of the Queue<T>.
	 * @param {T} value
	 * @return {void}
	 */
	enqeue(value: T): void {
		this.queue.addLast(value);
	}
	/**
	 * Returns the value from the start of the Queue.
	 * @return {T | null}
	 */
	peek(): T | null {
		if (!this.queue.head) {
			return null;
		}
		return this.queue.head.value;
	}
	/**
	 * Returns an array that represents the current Queue<T>.
	 * @return {Array<T>}
	 */
	toArray(): Array<T> {
		return this.queue.toArray();
	}
}
