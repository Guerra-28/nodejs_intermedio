export const modelLevel = (sequelize, DataTypes) => {
  return sequelize.define(
    "Level",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "level",
      timestamps: true,
    }
  );
};
