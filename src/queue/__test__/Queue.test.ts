import Queue from '../Queue';

describe('Queue<T>', () => {
  it('should initialize a new instance of the Queue<T> class', () => {
    const queue2: Queue<number> = new Queue<number>([1, 2, 3]);

    expect(queue2.peek()).toBe(1);
  });

  it('should determine whether a value is in the Queue<T>', () => {
    const queue: Queue<number> = new Queue<number>([1, 2, 3]);

    expect(queue.contains(3)).toBeTruthy();
    expect(queue.contains(5)).toBeFalsy();
  });

  it('should remove and return the value at the beginning of the Queue<T>', () => {
    const queue: Queue<number> = new Queue<number>([1, 2, 3]);

    const dequeued: number = queue.dequeue();

    expect(dequeued).toBe(1);
    expect(queue.contains(1)).toBeFalsy();
  });

  it('should add a value to the end of the Queue<T>', () => {
    const queue: Queue<number> = new Queue<number>();

    queue.enqueue(4);

    expect(queue.contains(4)).toBeTruthy();
  });

  it('should return the value at the beginning of the Queue<T> without removing it', () => {
    const queue: Queue<number> = new Queue<number>([1, 2, 3]);

    expect(queue.peek()).toBe(1);
    expect(queue.contains(1)).toBeTruthy();
  });

  it('should copy the Queue<T> to a new array', () => {
    const queue: Queue<number> = new Queue<number>([1, 2, 3]);

    const output: number[] = queue.toArray();

    expect(output[0]).toBe(1);
    expect(output[1]).toBe(2);
    expect(output[2]).toBe(3);
  });
});
