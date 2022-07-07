const data = require('../data/zoo_data');

const { employees } = data;
function isManager(id) {
  const findId = employees.map((person) => person.managers);
  return findId.some((ids) => ids.includes(id));
}

function getRelatedEmployees(managerId) {
  const managers = employees.filter((ids) => ids.managers.includes(managerId));
  if (managers.length === 0) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return managers.map((person) => `${person.firstName} ${person.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
