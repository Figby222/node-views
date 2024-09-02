function getRoot(req, res) {
    return res.send("Hi");
}

const links = [
    { href: "/", text: "Home" },
    { href: "about", text: "About" },
];

const users = [ "Rose", "Cake", "Cookies" ];

function getRootMessage(req, res) {
    return res.render("index", { message: "EJS IS AWESOME", links: links, users: users });
}

export { getRoot, getRootMessage };