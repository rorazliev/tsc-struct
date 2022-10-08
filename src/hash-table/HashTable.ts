import { LinkedList } from '../linked-list/LinkedList';
import { LinkedListNode } from '../linked-list/LinkedListNode';
/**
 * Represents a hash table, where T specifies the value data type.
 */
export class HashTable<T> {
	/**
	 * The buckets in the HashTable<T>.
	 */
	protected buckets: LinkedList<T>[];
	/**
	 * The key - bucket index pairs.
	 */
	protected keys: Record<string, number> = {};
	/**
	 * Initialize a new instance of the HashTable<T> class.
	 * @param {number} size
	 */
	constructor(size: number = 32) {
		this.buckets = Array(size)
			.fill(null)
			.map(() => new LinkedList<T>());
	}
	/**
	 * Determines whether a value is in the HashTable<T>.
	 * @param {string} key
	 * @return {boolean}
	 */
	contains(key: string): boolean {
		return !!this.keys[key];
	}
	/**
	 * Adds a new value to the HashTable<T>.
	 * @param {string} key
	 * @param {value} value
	 * @return {HashTable<T>}
	 */
	add(key: string, value: T): HashTable<T> {
		const hash: number = this.hash(key);
		this.keys[key] = hash;
		const ll: LinkedList<T> = this.buckets[hash];
		const node: LinkedListNode<T> | null = ll.findByKey(key);
		if (!node) {
			ll.addLast(value, key);
		} else {
			node.value = value;
		}
		return this;
	}
	/**
	 * Gets the value from the HashTable<T>.
	 * @param {string} key
	 * @return {T | null}
	 */
	get(key: string): T | null {
		const ll: LinkedList<T> = this.buckets[this.hash(key)];
		const node: LinkedListNode<T> | null = ll.findByKey(key);
		if (node) {
			return node.value;
		}
		return null;
	}
	/**
	 * Removes the value from the HashTable<T>.
	 * @param {string} key
	 * @return {void}
	 */
	remove(key: string): HashTable<T> {
		const ll: LinkedList<T> = this.buckets[this.hash(key)];
		delete this.keys[key];
		const node: LinkedListNode<T> | null = ll.findByKey(key);
		if (node) {
			ll.remove(node.value);
		}
		return this;
	}
	/**
	 * Get the length of the HashTable<T>.
	 * @return {number}
	 */
	getLength(): number {
		return this.buckets.length;
	}
	/**
	 * Generates the bucket index based on the specified key.
	 * @param {string} key
	 * @return {number}
	 */
	protected hash(key: string): number {
		const hash: number = Array.from(key).reduce(
			(acc, char) => acc + char.charCodeAt(0),
			0
		);
		return hash % this.getLength();
	}
}
