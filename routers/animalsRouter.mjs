import { Router } from "express";

import animalsController from "../controllers/animalsController.mjs";

const animalsRouter = Router();

animalsRouter.get("/", animalsController.getAnimals);

export default animalsRouter;