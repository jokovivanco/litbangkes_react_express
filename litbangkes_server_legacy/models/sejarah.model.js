module.exports = (sequelize, Sequelize, DataTypes) => {
  const Sejarah = sequelize.define(
    "sejarah",
    {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      year: {
        type: Sequelize.INTEGER,
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

  return Sejarah;
};
