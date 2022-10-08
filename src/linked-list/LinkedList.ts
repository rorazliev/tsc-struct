import isEqual from 'lodash.isequal';
import { LinkedListNode } from './LinkedListNode';
/**
 * Represents a linked list,
 * where T specifies the element type of the linked list.
 */
export class LinkedList<T> {
	/**
	 * The first node in the LinkedList<T>.
	 */
	head: LinkedListNode<T> | null;
	/**
	 * The last node in the LinkedList<T>.
	 */
	tail: LinkedListNode<T> | null;
	/**
	 * Initializes a new instance of the LinkedList<T> class.
	 * @param {Array<T>|null} values
	 */
	constructor(values: Array<T> | null = null) {
		this.head = null;
		this.tail = null;
		if (values) {
			values.forEach((value: T) => this.addLast(value));
		}
	}
	/**
	 * Adds a new node at the start of the LinkedList<T>.
	 * @param {T} value
	 * @param {string} key
	 * @return {LinkedList<T>}
	 */
	addFirst(value: T, key?: string): LinkedList<T> {
		const node: LinkedListNode<T> = new LinkedListNode<T>(
			value,
			this.head,
			key
		);
		this.head = node;
		if (!this.tail) {
			this.tail = node;
		}
		return this;
	}
	/**
	 * Adds a new node at the end of the LinkedList<T>.
	 * @param {T} value
	 * @param {string} key
	 * @return {LinkedList<T>}
	 */
	addLast(value: T, key?: string): LinkedList<T> {
		const node: LinkedListNode<T> = new LinkedListNode<T>(value, null, key);
		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail!.next = node;
			this.tail = node;
		}
		return this;
	}
	/**
	 * Determines whether a value is in the LinkedList<T>.
	 * @param {T} value
	 * @return {boolean}
	 */
	contains(value: T): boolean {
		if (!this.head) {
			return false;
		}
		let current: LinkedListNode<T> | null = this.head;
		while (current) {
			if (isEqual(current.value, value)) {
				return true;
			}
			current = current.next;
		}
		return false;
	}
	/**
	 * Finds the first node that contains the specified value.
	 * @param {T} value
	 * @return {LinkedListNode<T> | null}
	 */
	find(value: T): LinkedListNode<T> | null {
		if (!this.head) {
			return null;
		}
		let current: LinkedListNode<T> | null = this.head;
		while (current) {
			if (isEqual(current.value, value)) {
				return current;
			}
			current = current.next;
		}
		return null;
	}
	/**
	 * Finds the last node that contains the specified value.
	 * @param {T} value
	 * @return {LinkedListNode<T> | null}
	 */
	findLast(value: T): LinkedListNode<T> | null {
		if (!this.head) {
			return null;
		}
		let current: LinkedListNode<T> | null = this.head;
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
	 * Finds the node by a key associated with the node.
	 * @param {string} key
	 * @return {LinkedListNode<T> | null}
	 */
	findByKey(key: string): LinkedListNode<T> | null {
		if (!this.head) {
			return null;
		}
		let current: LinkedListNode<T> | null = this.head;
		while (current) {
			if (current.key === key) {
				return current;
			}
			current = current.next;
		}
		return null;
	}
	/**
	 * Removes all occurrences of the specified value from the LinkedList<T>.
	 * @param {T} value
	 * @return {void}
	 */
	remove(value: T): void {
		if (!this.head) {
			return;
		}
		while (this.head && isEqual(this.head.value, value)) {
			this.head = this.head.next;
		}
		let current: LinkedListNode<T> | null = this.head;
		if (current) {
			while (current.next) {
				if (isEqual(current.next.value, value)) {
					current.next = current.next.next;
				} else {
					current = current.next;
				}
			}
		}
		if (isEqual(this.tail!.value, value)) {
			this.tail = current;
		}
	}
	/**
	 * Removes the node at the start of the LinkedList<T>.
	 * @return {LinkedList<T>}
	 */
	removeHead(): LinkedList<T> {
		if (!this.head) {
			return this;
		}
		if (this.head.next) {
			this.head = this.head.next;
		} else {
			this.head = null;
			this.tail = null;
		}
		return this;
	}
	/**
	 * Removes the node at the end of the LinkedList<T>.
	 * @return {LinkedList<T>}
	 */
	removeTail(): LinkedList<T> {
		if (this.head === this.tail) {
			this.head = null;
			this.tail = null;
			return this;
		}
		let current: LinkedListNode<T> | null = this.head;
		while (current!.next) {
			if (current!.next.next) {
				current = current!.next;
			} else {
				current!.next = null;
			}
		}
		this.tail = current;
		return this;
	}
	/**
	 * Reverses the order of the nodes in the LinkedList<T>.
	 * @return {LinkedList<T>}
	 */
	reverse(): LinkedList<T> {
		if (this.head === null) {
			return this;
		}
		let current: LinkedListNode<T> | null = this.head;
		let previous: LinkedListNode<T> | null = null;
		let next: LinkedListNode<T> | null = null;
		while (current) {
			next = current.next;
			current.next = previous;
			previous = current;
			current = next;
		}
		this.tail = this.head;
		this.head = previous;
		return this;
	}
	/**
	 * Returns an array that represents the current LinkedList<T>.
	 * @return {Array<T>}
	 */
	toArray(): Array<T> {
		const output: Array<T> = [];
		if (!this.head) {
			return output;
		}
		let current: LinkedListNode<T> | null = this.head;
		while (current) {
			output.push(current.value);
			current = current.next;
		}
		return output;
	}
}
