import { LinkedList, LinkedListNode } from '../../src';

describe('LinkedList<T>', () => {
	it('should initialize a new instance of the LinkedList<T> class.', () => {
		const list: LinkedList<string> = new LinkedList<string>();

		expect(list.head).toBeNull();
		expect(list.tail).toBeNull();
	});

	it('should initialize a new instance of the LinkedList<T> class with a given set of values.', () => {
		const list: LinkedList<string> = new LinkedList<string>([
			'one',
			'two',
			'three',
		]);

		expect(list.head?.value).toEqual('one');
		expect(list.head?.next?.value).toEqual('two');
		expect(list.head?.next?.next?.value).toEqual('three');
		expect(list.head?.next?.next?.value).toEqual(list.tail?.value);
	});

	it('should add a new node at the start of the LinkedList<T>.', () => {
		const list: LinkedList<string> = new LinkedList<string>();

		list.addFirst('one');
		list.addFirst('two');

		expect(list.head?.value).toEqual('two');
		expect(list.tail?.value).toEqual('one');
	});

	it('should add a new node at the end of the LinkedList<T>.', () => {
		const list: LinkedList<string> = new LinkedList<string>();

		list.addLast('one');
		list.addLast('two');

		expect(list.head?.value).toEqual('one');
		expect(list.tail?.value).toEqual('two');
	});

	it('should determine whether a value is in the LinkedList<T>.', () => {
		const list: LinkedList<number> = new LinkedList<number>();

		expect(list.contains(1)).toBeFalsy();

		list.addLast(1).addLast(2).addLast(3);

		expect(list.contains(2)).toBeTruthy();
		expect(list.contains(4)).toBeFalsy();
	});

	it('should find the first node that contains the specified value.', () => {
		const list: LinkedList<number> = new LinkedList<number>();
		let node: LinkedListNode<number> | null = list.find(3);

		expect(node).toBeNull();

		list.addLast(1).addLast(2).addLast(1).addLast(3);

		node = list.find(1);

		expect(node?.value).toEqual(1);
		expect(node?.next?.value).toEqual(2);

		node = list.find(5);

		expect(node).toBeNull();
	});

	it('should find the last node that contains the specified value.', () => {
		const list: LinkedList<number> = new LinkedList<number>();
		let node: LinkedListNode<number> | null = list.findLast(1);

		expect(node).toBeNull();

		list.addLast(1).addLast(2).addLast(1).addLast(3);

		node = list.findLast(1);

		expect(node?.value).toEqual(1);
		expect(node?.next?.value).toEqual(3);
	});

	it('should find the node by its assoiated key.', () => {
		const ll: LinkedList<number> = new LinkedList<number>();
		expect(ll.findByKey('test')).toBeNull();
		ll.addLast(1, 'test');
		expect(ll.findByKey('test')?.value).toEqual(1);
		expect(ll.findByKey('void')).toBeNull();
	});

	it('should remove all occurrences of the specified value from the LinkedList<T>.', () => {
		const list: LinkedList<number> = new LinkedList<number>([1, 2, 1, 3]);
		list.remove(1);

		expect(list.head?.value).toEqual(2);
		expect(list.head?.next?.value).toEqual(3);

		list.remove(3);

		expect(list.head?.value).toEqual(2);
		expect(list.tail?.value).toEqual(list.head?.value);

		list.remove(2);
		list.remove(3);

		expect(list.head).toBeNull();
	});

	it('should remove  the node at the start of the LinkedList<T>.', () => {
		const list: LinkedList<number> = new LinkedList<number>();
		list.removeHead().addLast(1).addLast(2).addLast(3);

		expect(list.head?.value).toEqual(1);

		list.removeHead();

		expect(list.head?.value).toEqual(2);

		list.removeHead().removeHead();

		expect(list.head).toBeNull();
		expect(list.tail).toBeNull();
	});

	it('should remove the node at the end of the LinkedList<T>.', () => {
		const list: LinkedList<number> = new LinkedList<number>();
		list.removeTail().addLast(1).addLast(2).addLast(3);

		expect(list.tail?.value).toEqual(3);

		list.removeTail();

		expect(list.tail?.value).toEqual(2);
	});

	it('should reverse the order of the nodes in the LinkedList<T>.', () => {
		const list: LinkedList<number> = new LinkedList<number>();
		list.reverse();

		expect(list.head).toBeNull();
		expect(list.tail).toBeNull();

		list.addLast(1).addLast(2).addLast(3);

		expect(list.head?.value).toEqual(1);
		expect(list.tail?.value).toEqual(3);

		list.reverse();

		expect(list.head?.value).toEqual(3);
		expect(list.tail?.value).toEqual(1);
	});

	it('should return an array that represents the current LinkedList<T>.', () => {
		const list: LinkedList<number> = new LinkedList<number>();

		expect(list.toArray().length).toEqual(0);

		list.addLast(1).addLast(2).addLast(3);

		expect(list.toArray().length).toEqual(3);
	});
});
