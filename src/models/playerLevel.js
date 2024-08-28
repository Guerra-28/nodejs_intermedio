export const playerLevel = (sequelize, DataTypes) => {
  return sequelize.define(
    "PlayerLevel",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      jugadorCedula: {
        type: DataTypes.STRING,
        references: {
          model: "player",
          key: "cedula",
        },
      },
      nivelId: {
        type: DataTypes.INTEGER,
        references: {
          model: "level",
          key: "id",
        },
      },
      puntajeMaximo: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "playerlevel",
      timestamps: true,
    }
  );
};
