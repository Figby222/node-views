import express from "express";
import "dotenv/config";
const app = express();
import path from "node:path";
import { getRoot } from "./controllers/rootController.mjs";

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", getRoot);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})