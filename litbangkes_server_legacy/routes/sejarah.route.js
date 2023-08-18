module.exports = (app) => {
  const sejarah = require("../controllers/sejarah.controller.js");

  const router = require("express").Router();

  // Create a new Sejarah
  router.post("/", sejarah.addSejarah);

  // Retrieve all Sejarah
  router.get("/", sejarah.getSejarah);

  // Update a Sejarah with id
  router.patch("/:id", sejarah.updateSejarah);

  // Delete a Sejarah with id
  router.delete("/:id", sejarah.deleteSejarah);

  app.use("/api/sejarah", router);
};
