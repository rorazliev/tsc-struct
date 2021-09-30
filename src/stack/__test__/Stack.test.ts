import Stack from '../Stack';

describe('Stack<T>', () => {
  it('should initialize a new instance of the Stack<T> class', () => {
    const stack: Stack<number> = new Stack<number>([1, 2, 3]);

    expect(stack.contains(3)).toBeTruthy();
  });

  it('should return the value at the top of the Stack<T> without removing it', () => {
    const stack: Stack<number> = new Stack<number>([1, 2, 3]);

    expect(stack.peek()).toBe(1);
    expect(stack.contains(1)).toBeTruthy();
  });

  it('should remove and return the value at the top of the Stack<T>', () => {
    const stack: Stack<number> = new Stack<number>([1, 2, 3]);

    expect(stack.pop()).toBe(1);
    expect(stack.contains(1)).toBeFalsy();
  });

  it('should insert a value at the top of the Stack<T>', () => {
    const stack: Stack<number> = new Stack<number>();

    expect(stack.contains(1)).toBeFalsy();

    stack.push(1);

    expect(stack.contains(1)).toBeTruthy();
  });

  it('should copy Stack<T> to a new array', () => {
    const stack: Stack<number> = new Stack<number>([1, 2, 3]);
    const output: number[] = stack.toArray();

    expect(output[0]).toBe(1);
    expect(output[1]).toBe(2);
    expect(output[2]).toBe(3);
  });
});
