const multer = require("multer");

const fileFilter = (req, file, cb) => {
  if (file.mimetype.includes("pdf")) {
    cb(null, true);
  } else {
    cb("Please upload only pdf.", false);
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "resources/static/assets/files");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-litbangkes-${file.originalname}`);
  },
});

const uploadFile = multer({ storage: storage, fileFilter });
module.exports = uploadFile;
