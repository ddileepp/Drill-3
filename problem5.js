function getAllAges(peopleData) {
  let ages = [];

  for (let i = 0; i < peopleData.length; i++) {
    ages.push(peopleData[i].age);
  }

  return ages;
}

module.exports = getAllAges;
