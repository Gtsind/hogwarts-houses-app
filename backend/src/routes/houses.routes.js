const express = require("express");
const router = express.Router();
const houseService = require("../services/houses.service.js");

router.get("/", houseService);

module.exports = router;
