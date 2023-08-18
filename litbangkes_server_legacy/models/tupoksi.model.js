module.exports = (sequelize, Sequelize, DataTypes) => {
  const Tupoksi = sequelize.define(
    "tupoksi",
    {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
      },
      textarea: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return Tupoksi;
};
