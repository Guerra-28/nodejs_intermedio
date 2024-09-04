import { Router } from "express";
import {
  gameScore,
  getScoreByPlayer,
} from "../controllers/playerLevelController.js";

export const playerLevelRouter = Router();

playerLevelRouter.post("/", gameScore);
playerLevelRouter.get("/:cedula", getScoreByPlayer);

//export default router;
