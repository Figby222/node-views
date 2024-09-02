import { Router } from "express";

import * as animalsController from "../controllers/animalsController.mjs";

const animalsRouter = Router();

animalsRouter.get("/", animalsController.getAnimals);

export default animalsRouter;