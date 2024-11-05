import { Router } from "express";
import { addPlayer, getPlayers } from "../controllers/playerController.js";

export const playerRouter = Router();

playerRouter.post("/register", addPlayer);
playerRouter.get("/get", getPlayers);

//export default router;
