function getHobbiesByAge(peopleData, age) {
  let hobbies = [];

  for (let i = 0; i < peopleData.length; i++) {
    if (peopleData[i].age === age) {
      hobbies.push(peopleData[i].hobbies);
    }
  }

  return hobbies;
}

module.exports = getHobbiesByAge;
