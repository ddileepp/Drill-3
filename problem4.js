function getPersonAtIndex(peopleData, index) {
  return peopleData
    .filter(function (_, i) {
      return i === index;
    })
    .map(function (person) {
      return person.name.first + " " + person.name.last;
    })[0];
}

module.exports = getPersonAtIndex;

