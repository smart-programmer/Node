const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url == "/"){
        res.write("thank allah");
        res.end();
    }
    else {
        res.write("page isn't up yet");
        res.end();
    }
});

server.listen(process.env.PORT);

let file = fs.readdirSync('./');
console.log(file);














