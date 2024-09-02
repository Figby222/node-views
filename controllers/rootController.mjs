function getRoot(req, res) {
    return res.send("Hi");
}

const links = [
    { href: "/", text: "Home" },
    { href: "about", text: "About" },
];

function getRootMessage(req, res) {
    return res.render("index", { message: "EJS IS AWESOME", links: links });
}

export { getRoot, getRootMessage };