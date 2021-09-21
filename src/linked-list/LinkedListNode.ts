/**
 * Represents a node in a LinkedList<T>
 */
export default class LinkedListNode<T> {
  /**
	 * The value contained in the node
	 * @param {T}
	 */
  value: T;

  /**
	 * The next node in the LinkedList<T>
	 * @param {LinkedListNode<T> | null}
	 */
  next: LinkedListNode<T> | null;

  /**
	 * The key used as a reference to the node
	 * @param {string | null}
	 */
  protected key: string | null = null;

  /**
	 * Initialize a new instance of the LinkedListNode<T> class
	 * @param {T} value
	 * @param {LinkedListNode<T> | null} next
	 * @param {string | null} key
	 */
  constructor(
    value: T,
    next: LinkedListNode<T> | null = null,
    key: string | null = null,
  ) {
    this.value = value;
    this.next = next;
    this.key = key;
  }

  /**
	 * Get the key used as a reference to the node
	 * @returns {string | null}
	 */
  getKey(): string | null {
    return this.key;
  }
}
