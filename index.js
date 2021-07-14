// As shop owner I want to view a list of all employees, which are older than 18 years, so that I know who is allowed to work on Sundays.
// As shop owner I want the list of employees to be sorted by their name, so I can find employees easier.
// As shop owner I want the list of employees to be capitalized, so I can read it better.
// As shop owner I want the employees to be sorted by their names descending instead of ascending.



const employees = [
	{ name: 'Max', age: 17 },
	{ name: 'Sepp', age: 18 },
	{ name: 'Nina', age: 15 },
	{ name: 'Mike', age: 51 },
  ];

  const listAllEmployees = () => {
	return employees
  }

  const listOverEighteens = () => {
	return employees.filter(e => e.age >= 18)
  }

  const sortByName = (list, isAsc) => {
	let x = isAsc ? 1 : -1;
	let y = isAsc ? -1 : 1;

	return list.sort((a, b) => a.name > b.name ? x : y)
  }

  const capitaliseNames = (list) => {
	  	return list.map(employee => {
			  const name = employee.name.slice(0,1).toUpperCase() + employee.name.slice(1)
			  return {...employee, name}
			})
}

  module.exports = {
	  listAllEmployees, listOverEighteens, sortByName, capitaliseNames
  }