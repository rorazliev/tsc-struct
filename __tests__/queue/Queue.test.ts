import { Queue } from '../../src';

describe('Queue<T>', () => {
	it('should initialize a new instance of the Queue<T>.', () => {
		let queue: Queue<number> = new Queue<number>();
		expect(queue).toBeTruthy();
		expect(queue.peek()).toBeNull();

		queue = new Queue<number>([1, 2, 3]);
		expect(queue.peek()).toBe(1);
	});

	it('should determine whether a value is in the Queue<T>.', () => {
		const queue: Queue<number> = new Queue<number>([1, 2, 3]);

		expect(queue.contains(1)).toBeTruthy();
		expect(queue.contains(4)).toBeFalsy();
	});

	it('should remove and return  the value from the start of the Queue<T>.', () => {
		let queue: Queue<number> = new Queue<number>();

		expect(queue.dequeue()).toBeNull();

		queue = new Queue<number>([1, 2, 3]);

		expect(queue.dequeue()).toEqual(1);
		expect(queue.peek()).toEqual(2);
	});

	it('should add the value at the end of the Queue<T>.', () => {
		const queue: Queue<number> = new Queue<number>();
		queue.enqeue(1);
		expect(queue.peek()).toEqual(1);
	});

	it('should return the value from the start of the Queue<T>.', () => {
		const queue: Queue<number> = new Queue<number>([1, 2, 3]);
		expect(queue.peek()).toEqual(1);
		expect(queue.contains(1)).toBeTruthy();
	});

	it('should return an array that represents the current Queue<T>.', () => {
		const queue: Queue<number> = new Queue<number>([1, 2, 3]);
		const arr: Array<number> = queue.toArray();

		expect(arr[0]).toEqual(1);
		expect(arr[1]).toEqual(2);
		expect(arr[2]).toEqual(3);
	});
});
