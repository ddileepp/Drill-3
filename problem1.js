function getAllEmails(peopleData) {
  let emails = [];

  for (let i = 0; i < peopleData.length; i++) {
    emails.push(peopleData[i].email);
  }

  return emails;
}

module.exports = getAllEmails;