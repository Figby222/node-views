function getRoot(req, res) {
    return res.send("Hi");
}

function getRootMessage(req, res) {
    return res.render("index", { message: "EJS IS AWESOME" });
}

export { getRoot, getRootMessage };