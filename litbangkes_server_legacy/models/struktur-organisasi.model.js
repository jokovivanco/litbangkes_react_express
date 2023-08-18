module.exports = (sequelize, Sequelize, DataTypes) => {
  const StrukturOrganisasi = sequelize.define(
    "struktur_organisasi",
    {
      name: {
        type: DataTypes.STRING,
      },
      file: {
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

  return StrukturOrganisasi;
};
