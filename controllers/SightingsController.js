const { getSightings } = require("../utils");

class SightingsController {
  constructor() {}

  homepage = (req, res) => {
    res.send("Hello World");
  };

  //   app.get("/", (req, res) => {
  //   res.send("Hello World");
  // });

  getAllSightings = async (req, res) => {
    const sightings = await getSightings();
    res.json(sightings);
  };

  // app.get("/sightings", async (req, res) => {
  //   const sightings = await getSightings();
  //   res.json(sightings);
  // });

  getSighting = async (req, res) => {
    const sightings = await getSightings();
    res.json(sightings[req.params.sightingIndex]);
  };

  // app.get("/sightings/:sightingIndex", async (req, res) => {
  //   const sightings = await getSightings();
  //   res.json(sightings[req.params.sightingIndex]);
  // });
}

module.exports = SightingsController;
