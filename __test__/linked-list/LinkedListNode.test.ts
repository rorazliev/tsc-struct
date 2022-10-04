import { LinkedListNode } from '../../src';

describe('LinkedListNode<T>', () => {
	it('should initialize a new instance of the LinkedListNode<T> class.', () => {
		const node: LinkedListNode<string> = new LinkedListNode<string>('test');
		expect(typeof node.value).toEqual('string');
		expect(node.value).toEqual('test');
		expect(node.next).toBeNull();
	});

	it('should link two instances of the LinkedListNode<T> with each other', () => {
		const next: LinkedListNode<string> = new LinkedListNode<string>('next');
		const node: LinkedListNode<string> = new LinkedListNode<string>(
			'node',
			next
		);
		expect(node.value).toEqual('node');
		expect(node.next?.value).toEqual('next');
		expect(node.next?.next).toBeNull();
	});
});
