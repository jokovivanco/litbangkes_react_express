module.exports = (app) => {
  const tupoksi = require("../controllers/tupoksi.controller.js");

  const router = require("express").Router();

  // Retrieve all Tupoksi
  router.get("/", tupoksi.getTupoksi);

  // Update a Tupoksi with id
  router.patch("/:id", tupoksi.updateTupoksi);

  // Delete a Tupoksi with id
  router.delete("/:id", tupoksi.deleteTupoksi);

  app.use("/api/tupoksi", router);
};
