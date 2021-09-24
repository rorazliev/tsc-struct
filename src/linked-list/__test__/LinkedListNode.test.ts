import LinkedListNode from '../LinkedListNode';

describe('LinkedListNode<T>', () => {
  it('should initialize a new instance of the LinkedListNode<T> class', () => {
    const node: LinkedListNode<string> = new LinkedListNode<string>('value');

    expect(node.value).toBe('value');
  });

  it('should initialize a new instance of LinkedListNode<T> with a custom data type', () => {
		type Person = {
			name: string;
			age: number;
		};

		const person: Person = { name: 'Adam', age: 33 };

		const node: LinkedListNode<Person> = new LinkedListNode<Person>(person);

		expect(node.value.name).toBe('Adam');
		expect(node.value.age).toBe(33);
  });

  it('should initialize new instances of the LinkedListNode<T> where one refers another', () => {
    const next: LinkedListNode<string> = new LinkedListNode<string>('next');
    const node: LinkedListNode<string> = new LinkedListNode<string>(
      'current',
      next,
    );

    expect(node.value).toBe('current');
    expect(node.next!.value).toBe('next');
  });

  it('should initialize a new instance of the LinkedListNode<T> class with a refernce key', () => {
    const node: LinkedListNode<string> = new LinkedListNode<string>(
      'next',
      null,
      'test',
    );

    expect(node.getKey()).toBe('test');
  });
});
