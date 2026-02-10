function getNameAndEmailByAge(peopleData, age) {
  return peopleData
    .filter(function (person) {
      return person.age === age;
    })
    .map(function (person) {
      return {
        name: person.name,
        email: person.email
      };
    });
}

module.exports = getNameAndEmailByAge;
