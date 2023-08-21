const dbConfig = require("../config/db.config.local.js");
// const dbConfig = require("../config/db.config.local.js");

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.DataTypes = DataTypes;

db.mission = require("./mission.model.js")(sequelize, Sequelize, DataTypes);
db.sejarah = require("./sejarah.model.js")(sequelize, Sequelize, DataTypes);
db.tupoksi = require("./tupoksi.model.js")(sequelize, Sequelize, DataTypes);
db.vission = require("./vission.model.js")(sequelize, Sequelize, DataTypes);
db.files = require("./files.model.js")(sequelize, Sequelize, DataTypes);

module.exports = db;
