import path from "node:path";

function getAnimals (req, res) {
    return res.render(path.resolve("views/animals.ejs"));
}

export { getAnimals };