function getAnimals (req, res) {
    return res.sendFile("../views/animalsRoot.ejs");
}

export { getAnimals };