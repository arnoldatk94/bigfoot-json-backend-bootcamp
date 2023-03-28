const { getSightings } = require("../utils");

class SightingsController {
  constructor() {}

  getAllSightings = async (req, res) => {
    const sightings = await getSightings();
    res.json(sightings);
  };

  getSighting = async (req, res) => {
    const sightings = await getSightings();
    res.json(sightings[req.params.sightingIndex]);
  };

  listByFilter = async (req, res) => {
    const sightings = await getSightings();
    const filterParam = req.params.year;
    const key = "YEAR";
    const filteredSightingsList = sightings.filter(
      (item) => item[key] == filterParam
    );
    res.json(filteredSightingsList);
  };
}

module.exports = SightingsController;
