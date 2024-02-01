const http = require("http");
const fs = require("fs");
const port = 4000;
const handleReadFile = (fileName, staatusCode, req, res) => {
    fs.readFile(fileName, "utf-8", (eer, data) => {
        if (eer) {
            console.log(eer);
        } else {
            res.writeHead(200, { "content-type": "text/html" });
            res.write(data);
            res.end();
        }
    });
}
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        handleReadFile("index.html", 200, req, res);
    } else if (req.url === "/about") {
        handleReadFile("about.html", 200, req, res);
    } else if (req.url === "/contact") {
        handleReadFile("contact.html", 200, req, res);
    } else {
        handleReadFile("error.html", 404, req, res);
    }
});
server.listen(port, () => {
    console.log(`Server is running`);
});