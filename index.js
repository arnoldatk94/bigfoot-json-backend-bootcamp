const express = require("express");
// const { getSightings } = require("./utils.js");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json()); // middleware to unpack body data
app.use(express.urlencoded({ extended: false })); // middleware to unpact form data

const SightingsController = require("./controllers/SightingsController");
const SightingsRouter = require("./routers/SightingsRouter");

const sightingsController = new SightingsController();
const sightingsRouter = new SightingsRouter(express, sightingsController);

app.use("/", sightingsRouter.routes());

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/sightings", async (req, res) => {
//   const sightings = await getSightings();
//   res.json(sightings);
// });

// app.get("/sightings/:sightingIndex", async (req, res) => {
//   const sightings = await getSightings();
//   res.json(sightings[req.params.sightingIndex]);
// });

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
