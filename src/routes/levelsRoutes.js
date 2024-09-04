import { Router } from "express";
import { addLevel, getLevels } from "../controllers/levelController.js";

export const levelRouter = Router();

levelRouter.post("/", addLevel);
levelRouter.get("/", getLevels);

//export default router;
