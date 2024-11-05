import { Router } from "express";
import { addLevel, getLevels } from "../controllers/levelController.js";

export const levelRouter = Router();

levelRouter.post("/create", addLevel);
levelRouter.get("/get", getLevels);

//export default router;
