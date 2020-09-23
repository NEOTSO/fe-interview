const http = require("http");
const urllib = require("url");

const port = 8080;
const data = { data: "hi, there." };

http.createServer((req, res) => {
    const params = urllib.parse(req.url, true);
    if (params.query.callback) {
        const str = `${params.query.callback}(${JSON.stringify(data)})`;
        res.end(str);
    } else {
        res.end();
    }
}).listen(port, () => console.log(`server is running at port ${port}`));