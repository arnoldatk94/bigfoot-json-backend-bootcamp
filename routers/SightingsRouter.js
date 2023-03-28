class SightingsRouter {
  constructor(express, sightingsController) {
    this.express = express;
    this.controller = sightingsController;
  }

  routes = () => {
    const router = this.express.Router();

    router.get("/", this.controller.homepage);
    router.get("/sightings", this.controller.getAllSightings);
    router.get("/sightings/:sightingIndex", this.controller.getSighting);

    return router;
  };
}

module.exports = SightingsRouter;
