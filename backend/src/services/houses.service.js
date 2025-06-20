const {
  findHouse,
  sendAllHouses,
} = require("../functions/houses.functions.js");

function sendResponse(req, res) {
  const userPrompt = req.query.name;

  if (userPrompt) {
    const reply = findHouse(userPrompt);

    res.status(200).json({ reply });
  } else {
    const reply = sendAllHouses();
    res.status(200).json({ reply });
  }
}

module.exports = sendResponse;
