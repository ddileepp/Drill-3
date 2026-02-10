function getFirstHobbies(peopleData) {
  return peopleData.map(function (person) {
    return person.hobbies[0];
  });
}

module.exports = getFirstHobbies;
