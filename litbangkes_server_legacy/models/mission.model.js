module.exports = (sequelize, Sequelize, DataTypes) => {
  const Mission = sequelize.define(
    "mission",
    {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      text: {
        type: Sequelize.STRING,
      },
      vissionId: {
        type: Sequelize.INTEGER,
        references: {
          model: "vission",
          key: "id",
        },
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

  return Mission;
};
