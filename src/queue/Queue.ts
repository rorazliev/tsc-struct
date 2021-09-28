import LinkedList from '../linked-list/LinkedList';
/**
 * Represents a first-in-first-out (FIFO)
 * collection of instances of the same specified type
 */
export default class Queue<T> {
  /**
	 * LinkedList<T> that stores values
	 */
  protected queue: LinkedList<T>;

  /**
	 * Initialize a new instance of the Queue<T> class
	 * @param {T[] | null} iterable
	 */
  constructor(iterable: T[] | null = null) {
    this.queue = new LinkedList<T>(iterable);
  }

  /**
	 * Determine whether a value is in the Queue<T>
	 * @param {T} value
	 * @returns {boolean}
	 */
  contains(value: T): boolean {
    return this.queue.contains(value);
  }

  /**
	 * Remove and get the value at the beginning of the Queue<T>
	 * @returns {T | null}
	 */
  dequeue(): T | null {
    /* istanbul ignore next */
    if (this.queue.first === null) return null;

    const { value } = this.queue.first;
    this.queue.removeFirst();

    return value;
  }

  /**
	 * Add a value to the end of the Queue<T>
	 * @param {T} value
	 * @returns {void}
	 */
  enqueue(value: T): void {
    this.queue.addLast(value);
  }

  /**
	 * Return the value at the beginning of the Queue<T> without removing it
	 * @returns {T | null}
	 */
  peek(): T | null {
    /* istanbul ignore next */
    if (this.queue.first === null) return null;
    return this.queue.first.value;
  }

  /**
	 * Copy the Queue<T> to a new array
	 * @returns {T[] | null}
	 */
  toArray(): T[] | null {
    return this.queue.toArray();
  }
}
