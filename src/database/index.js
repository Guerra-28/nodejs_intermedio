import dotenv from "dotenv";

dotenv.config();

import { Sequelize, DataTypes } from "sequelize";
import { modelPlayer } from "../models/player.js";
import { modelLevel } from "../models/level.js";
import { modelPlayerLevel } from "../models/playerLevel.js";

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

const Player = modelPlayer(sequelize, DataTypes);
const Level = modelLevel(sequelize, DataTypes);
const PlayerLevel = modelPlayerLevel(sequelize, DataTypes);

sequelize
  .authenticate()
  .then(() => console.log("Conectado a la base de datos."))
  .catch((err) =>
    console.error("No se pudo conectar a la base de datos:", err)
  );

sequelize
  .sync({ alter: true, force: false })
  .then(() => console.log("Sincronización completada."))
  .catch((err) => console.error("Error en la sincronización:", err));

export { Player, Level, PlayerLevel, sequelize };
