/**
 * Represents a node in a LinkedList<T>,
 * where T specifies the element type of the linked list.
 */
export class LinkedListNode<T> {
	/**
	 * The key associated with this node.
	 */
	key?: string;
	/**
	 * The value contained in the node.
	 */
	value: T;
	/**
	 * The next node in the LinkedList<T>.
	 */
	next: LinkedListNode<T> | null;
	/**
	 * Initializes a new instance of the LinkedListNode<T> class.
	 * @param {T} value
	 * @param {LinkedListNode<T> | null} next
	 * @param {string} key
	 */
	constructor(value: T, next: LinkedListNode<T> | null = null, key?: string) {
		this.value = value;
		this.next = next;
		this.key = key;
	}
}
