export const player = (sequelize, DataTypes) => {
  return sequelize.define(
    "Player",
    {
      cedula: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: "email",
      },
    },
    {
      tableName: "player",
      timestamps: true,
    }
  );
};
