const data = require('../data/zoo_data');

const { species } = data;
function getAnimalsOlderThan(animal, age) {
  const findAnimal = species.find((selectedAnimal) => selectedAnimal.name === animal);
  const { residents } = findAnimal;
  return residents.every((animals) => animals.age >= age);
}

module.exports = getAnimalsOlderThan;
