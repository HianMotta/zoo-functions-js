const data = require('../data/zoo_data');

const { species, employees } = data;
function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employeeSpecies = employees.find((person) => person.id === id).responsibleFor;
  const firstSpecie = species.find((animal) => animal.id === employeeSpecies[0]).residents;
  const oldestAnimal = firstSpecie.reduce((max, specie) => {
    if (max.age > specie.age) return max;
    return specie;
  });
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');

module.exports = getOldestFromFirstSpecies;
