const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const countPeople = entrants.map((person) => person.age);
  const countChild = countPeople.filter((age) => age < 18);
  const countAdult = countPeople.filter((age) => age >= 18 && age < 50);
  const countSenior = countPeople.filter((age) => age >= 50);
  return { child: countChild.length, adult: countAdult.length, senior: countSenior.length };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || !Object.values(entrants).length) return 0;
  const people = countEntrants(entrants);
  return people.child * 20.99 + people.adult * 49.99 + people.senior * 24.99;
}

module.exports = { calculateEntry, countEntrants };
