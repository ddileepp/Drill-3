function getNameAndEmailByAge(peopleData, age) {
  let output = [];

  for (let i = 0; i < peopleData.length; i++) {
    if (peopleData[i].age === age) {
      output.push({
        name: peopleData[i].name,
        email: peopleData[i].email
      });
    }
  }

  return output;
}

module.exports = getNameAndEmailByAge;
