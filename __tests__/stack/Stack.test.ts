import { Stack } from '../../src';

describe('Stack<T>', () => {
	it('should initialize a new instance of the Stack<T>.', () => {
		let stack: Stack<number> = new Stack<number>();
		expect(stack).toBeTruthy();
		expect(stack.peek()).toBeNull();

		stack = new Stack<number>([1, 2, 3]);
		expect(stack.peek()).toBe(1);
	});

	it('should determine whether a value is in the Stack<T>.', () => {
		const stack: Stack<number> = new Stack<number>([1, 2, 3]);

		expect(stack.contains(1)).toBeTruthy();
		expect(stack.contains(4)).toBeFalsy();
	});

	it('should return the value from the start of the Stack<T>.', () => {
		const stack: Stack<number> = new Stack<number>([1, 2, 3]);
		expect(stack.peek()).toEqual(1);
		expect(stack.contains(1)).toBeTruthy();
	});

	it('should remove and return the value from the start of the Stack<T>.', () => {
		let stack: Stack<number> = new Stack<number>();

		expect(stack.pop()).toBeNull();

		stack = new Stack<number>([1, 2, 3]);

		expect(stack.pop()).toEqual(1);
		expect(stack.peek()).toEqual(2);
	});

	it('should add the value at the start of the Stack<T>.', () => {
		const stack: Stack<number> = new Stack<number>();
		stack.push(1).push(2);

		expect(stack.contains(1)).toBeTruthy();
		expect(stack.contains(2)).toBeTruthy();
		expect(stack.contains(3)).toBeFalsy();
	});

	it('should return an array that represents the current Stack<T>.', () => {
		const stack: Stack<number> = new Stack<number>([1, 2, 3]);
		const arr: Array<number> = stack.toArray();

		expect(arr[0]).toEqual(1);
		expect(arr[1]).toEqual(2);
		expect(arr[2]).toEqual(3);
	});
});
