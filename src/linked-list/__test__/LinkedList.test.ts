import LinkedList from '../LinkedList';
import LinkedListNode from '../LinkedListNode';

describe('LinkedList<T>', () => {
  it('should initialize new instances of the LinkedList<T>', () => {
    const ll1: LinkedList<number> = new LinkedList<number>();

    expect(ll1.first).toBeNull();
    expect(ll1.last).toBeNull();

    const ll2: LinkedList<number> = new LinkedList<number>([1, 2, 3]);

    expect(ll2.first.value).toBe(1);
    expect(ll2.last.value).toBe(3);
  });

  it('should add a new value at the start of the linked list', () => {
    const ll: LinkedList<number> = new LinkedList<number>();

    ll.addFirst(1);

    expect(ll.first.value).toBe(1);
    expect(ll.last.value).toBe(1);

    ll.addFirst(0);

    expect(ll.first.value).toBe(0);
    expect(ll.last.value).toBe(1);
  });

  it('shoud add a new value at the end of the linked list', () => {
    const ll: LinkedList<number> = new LinkedList<number>();

    ll.addLast(1);

    expect(ll.first.value).toBe(1);
    expect(ll.last.value).toBe(1);

    ll.addLast(2);

    expect(ll.first.value).toBe(1);
    expect(ll.last.value).toBe(2);
  });

  it('should determine whether a value is in the linked list', () => {
    const ll: LinkedList<number> = new LinkedList<number>([1, 2, 3]);

    expect(ll.contains(1)).toBeTruthy();
    expect(ll.contains(5)).toBeFalsy();
  });

  it('should find the first node that contains the specified value', () => {
    const ll: LinkedList<number> | null = new LinkedList<number>([1, 2, 3]);

    let node: LinkedListNode<number> | null = ll.find(5);

    expect(node).toBeNull();

    node = ll.find(1);

    expect(node.value).toBe(1);
  });

  it('should  find the last node that contains the specified value', () => {
    const ll: LinkedList<number> | null = new LinkedList<number>([1, 2, 3]);

    let node: LinkedListNode<number> | null = ll.findLast(5);

    expect(node).toBeNull();

    node = ll.findLast(1);

    expect(node.value).toBe(1);
    expect(node.next.value).toBe(2);
  });

  it('should remove the first occurrence of a node or value from the LinkedList<T>', () => {
    const ll: LinkedList<number> = new LinkedList<number>([1, 2, 3]);

    ll.remove(1);

    expect(ll.first.value).toBe(2);

    ll.remove(3);

    expect(ll.last.value).toBe(2);

    ll.remove(2);

    expect(ll.contains(2)).toBeFalsy();
  });

  it('should remove the node at the start of the LinkedList<T>', () => {
    const ll: LinkedList<number> = new LinkedList<number>([1, 2]);

    ll.removeFirst();

    expect(ll.first.value).toBe(2);
    expect(ll.last.value).toBe(2);

    ll.removeFirst();

    expect(ll.first).toBeNull();
  });

  it('should remove the node at the end of the LinkedList<T>', () => {
    const ll: LinkedList<number> = new LinkedList<number>([1]);

    ll.removeLast();

    expect(ll.first).toBeNull();
    expect(ll.last).toBeNull();

    ll.addLast(1);
    ll.addLast(2);
    ll.addLast(3);

    ll.removeLast();

    expect(ll.first.value).toBe(1);
    expect(ll.last.value).toBe(2);
  });

  it('should reverse the order of the elements in the LinkedList<T>', () => {
    const ll: LinkedList<number> = new LinkedList<number>([1, 2, 3]);

    expect(ll.first.value).toBe(1);
    expect(ll.last.value).toBe(3);

    ll.reverse();

    expect(ll.first.value).toBe(3);
    expect(ll.last.value).toBe(1);
  });

  it('should copy the values of nodes of the LinkedList<T> to a new array', () => {
    const ll: LinkedList<number> = new LinkedList<number>([1, 2, 3]);

    const output: number[] = ll.toArray();

    expect(output[0]).toBe(1);
    expect(output[1]).toBe(2);
    expect(output[2]).toBe(3);
  });
});
