module.exports = (sequelize, Sequelize, DataTypes) => {
  const Files = sequelize.define(
    "files",
    {
      title: {
        type: DataTypes.STRING,
      },
      filePath: {
        type: DataTypes.STRING,
      },
      fileName: {
        type: DataTypes.STRING,
      },
      category: {
        type: DataTypes.STRING,
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

  return Files;
};
