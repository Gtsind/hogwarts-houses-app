const {
  findHouse,
  sendAllHouses,
} = require("../functions/houses.functions.js");

function sendResponse(req, res) {
  const userPrompt = req.query.name;

  if (userPrompt) {
    console.log("Promt >>>", userPrompt);
    const reply = findHouse(userPrompt);
    console.log("Reply >>>", reply);

    res.status(200).json({ reply });
  } else {
    const reply = sendAllHouses();
    res.status(200).json({ reply });
    console.log("Reply >> sendInitial data", reply);
  }
}

module.exports = sendResponse;
