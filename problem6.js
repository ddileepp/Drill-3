function getFirstHobbies(peopleData) {
  let firstHobbies = [];

  for (let i = 0; i < peopleData.length; i++) {
    firstHobbies.push(peopleData[i].hobbies[0]);
  }

  return firstHobbies;
}

module.exports = getFirstHobbies;
