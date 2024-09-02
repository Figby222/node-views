import express from "express";
import "dotenv/config";
const app = express();
import { getRoot } from "./controllers/rootController.mjs";

app.get("/", getRoot);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})