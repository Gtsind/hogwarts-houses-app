const express = require("express");
const cors = require("cors");
const housesRoutes = require("./routes/houses.routes.js");

const app = express();
app.use(cors());

app.use("/houses", housesRoutes);

module.exports = app;
