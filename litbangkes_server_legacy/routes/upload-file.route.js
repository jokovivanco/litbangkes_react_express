module.exports = (app) => {
  const uploadFile = require("../controllers/upload-file.controller.js");
  const middleware = require("../middleware/upload-file.middleware.js");
  const imageMiddleware = require("../middleware/upload-image.middleware.js");

  const router = require("express").Router();
  router.post(
    "/upload/:category",
    imageMiddleware.single("fileAttach"),
    uploadFile.uploadImageAndReplace
  );

  router.post(
    "/upload",
    middleware.single("fileAttach"),
    uploadFile.createNewFile
  );
  router.patch(
    "/upload",
    middleware.single("fileAttach"),
    uploadFile.updateFile
  );
  router.patch("/uploadWithoutFile", uploadFile.updateFileWithoutFile);
  router.get("/:category", uploadFile.getFiles);
  router.delete("/:id", uploadFile.deleteFile);

  app.use("/api/files", router);
};
