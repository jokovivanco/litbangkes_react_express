module.exports = (sequelize, Sequelize, DataTypes) => {
  const Vission = sequelize.define(
    "vission",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      text: {
        type: Sequelize.STRING,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return Vission;
};
