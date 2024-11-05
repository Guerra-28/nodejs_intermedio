import { Router } from "express";
import {
  gameScore,
  getScoreByPlayer,
} from "../controllers/playerLevelController.js";

export const playerLevelRouter = Router();

playerLevelRouter.post("/save-score", gameScore);
playerLevelRouter.get("/get/:cedula", getScoreByPlayer);

//export default router;
