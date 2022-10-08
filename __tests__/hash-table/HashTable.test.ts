import { HashTable } from '../../src';

describe('HashTable<T>', () => {
	it('should initialize a new instance of the HashTable<T> class.', () => {
		const table: HashTable<number> = new HashTable<number>();
		expect(table).toBeDefined();
		expect(table.getLength()).toEqual(32);
	});

	it('should determine whether a value is in the HashTable<T>..', () => {
		const table: HashTable<number> = new HashTable<number>();
		expect(table.contains('test')).toBeFalsy();
	});

	it('should add a new value to the HashTable<T>.', () => {
		const table: HashTable<number> = new HashTable<number>();
		table.add('1', 1);
		expect(table.contains('1')).toBeTruthy();
		expect(table.contains('2')).toBeFalsy();
		expect(table.get('1')).toEqual(1);
		table.add('1', 3);
		expect(table.get('1')).toEqual(3);
	});

	it('should get the value from the HashTable<T>.', () => {
		const table: HashTable<number> = new HashTable<number>();
		table.add('1', 1);
		expect(table.get('1')).toEqual(1);
		expect(table.get('2')).toBeNull();
	});

	it('should remove the value from the HashTable<T>.', () => {
		const table: HashTable<number> = new HashTable<number>();
		table.add('1', 1).add('2', 2).add('3', 3);
		expect(table.contains('3')).toBeTruthy();
		table.remove('3');
		expect(table.contains('3')).toBeFalsy();
		expect(table.remove('4')).toEqual(table);
	});
});
