module.exports = (app) => {
  const mission = require("../controllers/mission.controller.js");

  const router = require("express").Router();

  // Create a new Mission
  router.post("/", mission.addMission);

  // Retrieve all Mission
  router.get("/", mission.getMissions);

  // Update a Mission with id
  router.patch("/:id", mission.updateMission);

  // Delete a Mission with id
  router.delete("/:id", mission.deleteMission);

  app.use("/api/mission", router);
};
