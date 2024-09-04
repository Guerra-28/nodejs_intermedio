import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import { sequelize } from "./src/database/index.js";

dotenv.config();

import { playerRouter } from "./src/routes/playerRoutes.js";
import { levelRouter } from "./src/routes/levelsRoutes.js";
import { playerLevelRouter } from "./src/routes/playerLevelRoutes.js";

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/player", playerRouter);
app.use("/api/level", levelRouter);
app.use("/api/player-level", playerLevelRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Servidor corriendo en el puerto " + port);
});
