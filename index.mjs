import express from "express";
import "dotenv/config";
const app = express();
import path from "node:path";
import animalsRouter from "./routers/animalsRouter.mjs";
import { getRoot, getRootMessage } from "./controllers/rootController.mjs";

const __dirname = import.meta.dirname;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/animals", animalsRouter);

app.get("/", getRoot);

app.get("/message", getRootMessage);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})