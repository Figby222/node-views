function getRoot(req, res) {
    return res.send("Hi");
}

const links = [
    { href: "/", text: "Home" },
    { href: "about", text: "About" },
];

const users = [ "Rose", "Cake", "Cookies" ];

function getRootMessage(req, res) {
    return res.render("index", { 
        message: "EJS IS AWESOME", 
        links: links, 
        users: users,
        secretFooterMessage: "Hi, I'm the secret footer message"
    });
}

function getAboutPage(req, res) {
    return res.render("about", { 
        secretMessage: "Hi, I'm a secret message", 
        links: links,
        secretFooterMessage: "Hi, I'm the secret footer message"
     });
}

export { getRoot, getRootMessage, getAboutPage };