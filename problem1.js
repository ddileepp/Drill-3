function getAllEmails(peopleData) {
  return peopleData.map(function (person) {
    return person.email;
  });
}

module.exports = getAllEmails;
