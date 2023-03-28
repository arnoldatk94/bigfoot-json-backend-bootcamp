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

app.use("/sightings", sightingsRouter.routes());

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
