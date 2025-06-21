const express = require("express");
const cors = require("cors");
const housesRoutes = require("./routes/houses.routes.js");

const app = express();
app.use(
  cors({
    origin: "https://hogwarts-houses-app-bdyn.vercel.app",
    methods: "GET",
    credentials: false,
  })
);

app.use("/houses", housesRoutes);

module.exports = app;
