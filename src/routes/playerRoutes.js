import { Router } from "express";
import { addPlayer, getPlayers } from "../controllers/playerController.js";

export const playerRouter = Router();

playerRouter.post("/", addPlayer);
playerRouter.get("/", getPlayers);

//export default router;
