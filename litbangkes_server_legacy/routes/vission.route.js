module.exports = (app) => {
  const vission = require("../controllers/vission.controller.js");

  const router = require("express").Router();

  // Retrieve all Vission
  router.get("/", vission.getVission);

  // Update a Vission with id
  router.patch("/", vission.updateVission);

  app.use("/api/vission", router);
};
