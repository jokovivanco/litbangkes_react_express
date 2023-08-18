module.exports = (app) => {
  const strukturOrganisasi = require("../controllers/upload-image.controller");
  const middleware = require("../middleware/upload-image.middleware.js");

  const router = require("express").Router();

  router.post(
    "/upload",
    middleware.single("image"),
    strukturOrganisasi.uploadFiles
  );

  router.get("/", strukturOrganisasi.getImage);

  app.use("/api/struktur-organisasi", router);
};
