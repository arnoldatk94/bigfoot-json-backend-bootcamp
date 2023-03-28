class SightingsRouter {
  constructor(express, sightingsController) {
    this.express = express;
    this.controller = sightingsController;
  }

  routes = () => {
    const router = this.express.Router();

    router.get("/", this.controller.getAllSightings);
    router.get("/:sightingIndex", this.controller.getSighting);
    router.get("/filter/:year", this.controller.listByFilter);

    return router;
  };
}

module.exports = SightingsRouter;
