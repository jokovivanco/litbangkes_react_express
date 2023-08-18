const express = require("express");
const cors = require("cors");

const app = express();

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  "/resources/static/assets/uploads/",
  express.static("./resources/static/assets/uploads/")
);

const db = require("./models");
db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./routes/mission.route")(app);
require("./routes/sejarah.route")(app);
require("./routes/tupoksi.route")(app);
require("./routes/vission.route")(app);
require("./routes/struktur-organisasi.route")(app);

// set port, listen for requests
const PORT = process.env.PORT || 30000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
