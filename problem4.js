function getPersonAtIndex(peopleData, index) {
  return {
    name: peopleData[index].name,
    city: peopleData[index].city
  };
}

module.exports = getPersonAtIndex;