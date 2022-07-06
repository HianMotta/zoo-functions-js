const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const findEmployee = employees.find((person) =>
    person.firstName === employeeName || person.lastName === employeeName);
  return findEmployee;
}

module.exports = getEmployeeByName;
