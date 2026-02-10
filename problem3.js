function getAustralianStudents(peopleData) {
  return peopleData
    .filter(function (person) {
      return person.isStudent === true && person.country === "Australia";
    })
    .map(function (person) {
      return person.name.first + " " + person.name.last;
    });
}

module.exports = getAustralianStudents;

