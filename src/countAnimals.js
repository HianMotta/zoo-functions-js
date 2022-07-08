const data = require('../data/zoo_data');

const { species } = data;
function countAnimals(animal) {
  // seu código aqui
  const allAnimals = species.reduce((acc, { name, residents }) => (
    { ...acc, [name]: residents.length }), {});
  if (!animal) return allAnimals;
  const { specie, sex } = animal;
  const selectedAnimal = species.find((animals) => animals.name === specie);
  const selectedSex = selectedAnimal.residents.filter((animalSpecie) => animalSpecie.sex === sex);
  return !sex ? selectedAnimal.residents.length : selectedSex.length;
}

module.exports = countAnimals;
