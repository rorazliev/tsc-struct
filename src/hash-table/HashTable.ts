import LinkedList from '../linked-list/LinkedList';
import LinkedListNode from '../linked-list/LinkedListNode';
/**
 * Interface for collection containing the keys in the HashTable<T>
 */
interface Keys {
	[key: string]: number;
}
/**
 * Represents a hash table
 */
export default class HashTable<T> {
  /**
	 * Buckets in the HashTable<T>
	 */
  protected buckets: LinkedList<T>[];

  /**
	 * Keys in the HashTable<T>
	 */
  protected keys: Keys = {};

  /**
	 * Initialize a new instance of the HashTable<T> class
	 */
  constructor(size = 32) {
    this.buckets = Array(size)
      .fill(null)
      .map(() => new LinkedList<T>());
  }

  /**
	 * Add an element with the specified key and value into the HashTable<T>
	 */
  add(key: string, value: T): void {
    const hash: number = this.hash(key);
    this.keys[key] = hash;
    const ll: LinkedList<T> = this.buckets[hash];
    const node: LinkedListNode<T> | null = ll.findByKey(key);

    if (node === null) {
      ll.addLast(value, key);
    } else {
      node.value = value;
    }
  }

  /**
	 * Determine whether the Hashtable contains a specific key
	 */
  contains(key: string): boolean {
    return this.keys[key] !== undefined;
  }

  /**
	 * Get the value associated with the specified key
	 */
  get(key: string): T | null {
    const hash: number = this.hash(key);
    const ll: LinkedList<T> = this.buckets[hash];
    const node: LinkedListNode<T> | null = ll.findByKey(key);

    if (node !== null) return node.value;
    return null;
  }

  /**
	 * Get the hash code for the specified key
	 */
  protected hash(key: string): number {
    const hash: number = Array.from(key).reduce(
      (accumulator, value) => accumulator + value.charCodeAt(0),
      0,
    );
    return hash % this.buckets.length;
  }

  /**
	 * Get the length of HashTable<T>
	 */
  length(): number {
    return this.buckets.length;
  }

  /**
	 * Removes the element with the specified key from the HashTable<T>
	 */
  remove(key: string): void {
    const hash: number = this.hash(key);
    delete this.keys[key];
    const ll: LinkedList<T> = this.buckets[hash];
    const node: LinkedListNode<T> | null = ll.findByKey(key);
    /* istanbul ignore next */
    if (node === null) return;

    ll.remove(node.value);
  }
}
