function getHobbiesByAge(peopleData, age) {
  return peopleData
    .filter(function (person) {
      return person.age === age;
    })
    .flatMap(function (person) {
      return person.hobbies;
    });
}

module.exports = getHobbiesByAge;
