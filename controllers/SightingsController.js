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

  // listByFilter = async (req, res) => {
  //   const sightings = await getSightings();
  //   let filteredSightings = [...sightings];
  //   const filterParam = req.query;
  //   console.log(req.query);
  //   console.log(filterParam);
  //   // console.log(filteredSightings);
  //   for (let key in filterParam) {
  //     // looks thru all the queries
  //     filteredSightings = filteredSightings.filter(
  //       // filters the sighting via a loop
  //       (element) => element[key] == filterParam[key]
  //     );
  //   }

  //   res.json(filteredSightings);
  // };

  listByFilter = async (req, res) => {
    const sightings = await getSightings();
    const filterParam = req.params.year;
    console.log(req.params);
    const key = "YEAR";
    const filteredSightingsList = sightings.filter(
      (item) => item[key] == filterParam
    );
    res.json(filteredSightingsList);
  };
}

module.exports = SightingsController;
