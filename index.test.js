const { listAllEmployees, listOverEighteens, sortByName, capitaliseNames} = require ("./index.js")

test('return a list of employees', () => {
	const expected = 	[{ name: 'Max', age: 17 },
	{ name: 'Sepp', age: 18 },
	{ name: 'Nina', age: 15 },
	{ name: 'Mike', age: 51 },
  ];
	expect(listAllEmployees()).toEqual(expected)
})

test('returns a list of employees over 18', () => {
	const expected = 	[
	{ name: 'Sepp', age: 18 },
	{ name: 'Mike', age: 51 },
  ];
  expect(listOverEighteens()).toEqual(expected)
})

test('sort list ASC', () => {
	const list = 	[
		{ name: 'Mike', age: 19 },
		{ name: 'Sepp', age: 18 },
		{ name: 'Mike', age: 51 }
	  ];
	const expected  = 	[
		{ name: 'Mike', age: 51 },
		{ name: 'Mike', age: 19 },
		{ name: 'Sepp', age: 18 },
	  ];
	const expectList = sortByName(list, true)
	  expect(expectList).toEqual(expected)
})

test('sort list DESC', () => {
	const list = 	[
		{ name: 'Mike', age: 19 },
		{ name: 'Sepp', age: 18 },
		{ name: 'Mike', age: 51 }
	  ];
	const expected  = 	[
		{ name: 'Sepp', age: 18 },
		{ name: 'Mike', age: 51 },
		{ name: 'Mike', age: 19 }
	  ];
	const expectList = sortByName(list, false)
	  expect(expectList).toEqual(expected)
})

test('names are capitalised for ease of reading', () => {
	const list = 	[
		{ name: 'Mike', age: 19 },
		{ name: 'sepp', age: 18 },
		{ name: 'mike', age: 51 }
	  ];
	const expected  = 	[
		{ name: 'Mike', age: 19 },
		{ name: 'Sepp', age: 18 },
		{ name: 'Mike', age: 51 }
	  ];
	  expect(capitaliseNames(list)).toEqual(expected)
})