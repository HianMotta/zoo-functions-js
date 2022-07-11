const data = require('../data/zoo_data');

const { species, employees } = data;

function getEmployee(person) {
  return employees.find((employee) =>
    (person.name === employee.firstName
    || person.name === employee.lastName
    || person.id === employee.id));
}

function getSpecies(employee) {
  return employee.responsibleFor.map((id) =>
    species.find((specie) =>
      (specie.id === id)));
}

function getAllEmployeesCoverage() {
  return employees.map((employee) => {
    const animals = getSpecies(employee);
    return {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: animals.map((specie) => specie.name),
      locations: animals.map((specie) => specie.location),
    };
  });
}

function getEmployeesCoverage(person) {
  if (!person) return getAllEmployeesCoverage();
  const employee = getEmployee(person);
  if (employee === undefined) throw new Error('Informações inválidas');
  const animals = getSpecies(employee);
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: animals.map((specie) => specie.name),
    locations: animals.map((specie) => specie.location),
  };
}

module.exports = getEmployeesCoverage;
