function getAustralianStudents(peopleData) {
  let result = [];

  for (let i = 0; i < peopleData.length; i++) {
    if (peopleData[i].isStudent === true && peopleData[i].country === 'Australia') {
      result.push(peopleData[i].name);
    }
  }

  return result;
}

module.exports = getAustralianStudents;
