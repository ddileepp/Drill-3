function getCityAndCountry(peopleData) {
  return peopleData.map(function (person) {
    return {
      city: person.city,
      country: person.country
    };
  });
}

module.exports = getCityAndCountry;
