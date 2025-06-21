const express = require("express");
const cors = require("cors");
const housesRoutes = require("./routes/houses.routes.js");

const allowedOrigins = [
  "https://hogwarts-houses-app-bdyn.vercel.app",
  "http://localhost:5173",
  "http://localhost:5174",
];

const app = express();
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET",
    credentials: false,
  })
);

app.use("/houses", housesRoutes);

module.exports = app;
