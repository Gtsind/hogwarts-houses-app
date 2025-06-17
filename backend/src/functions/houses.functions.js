const housesInfo = require("../../data/housesInfo.js");
const DEFAULT_RESPONSE = "Could not find any houses.";

function findHouse(prompt) {
  const houseName = prompt.toLowerCase();

  let houseMatch = null;

  for (let house of housesInfo) {
    const { name } = house;

    if (name.toLowerCase().includes(houseName)) {
      houseMatch = house;
    }
  }

  if (houseMatch === null) {
    return DEFAULT_RESPONSE;
  }

  return houseMatch;
}

module.exports = { findHouse };
