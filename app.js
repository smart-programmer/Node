const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url == "/"){
        file = new fs.createReadStream(__dirname + "/myHtml.html", 'utf8');
        file.pipe(res);
    }
    else {
        res.write("page isn't up yet");
        res.end();
    }
});

if (process.env.PORT) server.listen(process.env.PORT);
else server.listen(3000);

let file = fs.readdir('./', (err, files) => {
    if (err) console.log(err);
    else console.log(files);
});
console.log(file);














