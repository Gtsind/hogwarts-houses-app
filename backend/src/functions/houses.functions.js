const housesInfo = require("../../data/housesInfo.js");
const DEFAULT_RESPONSE = "Could not find any houses.";

function findHouse(prompt) {
  const houseName = prompt.toLowerCase();
  const matches = housesInfo.filter((house) =>
    house.name.toLowerCase().includes(houseName)
  );

  return matches.length ? matches : DEFAULT_RESPONSE;
}

function sendAllHouses() {
  return housesInfo;
}

module.exports = { findHouse, sendAllHouses };
