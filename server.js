const http = require("http");
const app = require('./myapp');

const port = process.env.PORT || 3000;
app.set("port", port);

const server = http.createServer(app);

server.listen(port, () => {
    console.log("listening on port: ", port);
})