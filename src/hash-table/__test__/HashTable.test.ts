import HashTable from '../HashTable';

describe('HashTable<T>', () => {
  it('should initialize a new instance of the HashTable<T> class', () => {
    const table1: HashTable<number> = new HashTable<number>();
    const table2: HashTable<number> = new HashTable<number>(64);

    expect(table1.length()).toBe(32);
    expect(table2.length()).toBe(64);
  });

  it('should add an element with the specified key and value into the HashTable<T>', () => {
    const table: HashTable<number> = new HashTable<number>();

    table.add('one', 1);

    expect(table.contains('one')).toBeTruthy();
    expect(table.get('one')).toBe(1);

    table.add('one', 2);

    expect(table.contains('one')).toBeTruthy();
    expect(table.get('one')).toBe(2);
  });

  it('should the element with the specified key from the HashTable<T>', () => {
    const table: HashTable<number> = new HashTable<number>();

    table.add('one', 1);
    table.add('two', 2);
    table.add('three', 3);

    expect(table.contains('two')).toBeTruthy();
    expect(table.get('two')).toBe(2);

    table.remove('two');

    expect(table.contains('two')).toBeFalsy();
    expect(table.get('two')).toBeNull();
  });
});
