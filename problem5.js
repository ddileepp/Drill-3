function getAllAges(peopleData) {
  return peopleData.map(function (person) {
    return person.age;
  });
}

module.exports = getAllAges;
