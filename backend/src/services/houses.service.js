const { findHouse } = require("../functions/houses.functions.js");

function sendResponse(req, res) {
  const userPrompt = req.query.name;
  console.log(userPrompt);
  const reply = findHouse(userPrompt);
  console.log("Reply >>>", reply);

  res.status(200).json({ reply });
}

module.exports = sendResponse;
