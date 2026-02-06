function getCityAndCountry(peopleData) {
  let locations = [];

  for (let i = 0; i < peopleData.length; i++) {
    locations.push({
      city: peopleData[i].city,
      country: peopleData[i].country
    });
  }

  return locations;
}

module.exports = getCityAndCountry;
