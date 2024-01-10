const http = require("http")
const url = require("url")

// Define the handler
const requestHandler = (req, res) => {

    // pass the url
    const passedUrl = url.parse(req.url, true)
    console.log(req.method);

    // Home route
    if (passedUrl.pathname === "/" && req.method === "GET") {
        // send response
        res.writeHead(200, { "content-type": "text/plain" })
        res.end("Welcome to the homepage")
    }
    // about route
    else if (passedUrl.pathname === "/about" && req.method === "GET") {
        // send response
        res.writeHead(200, { "content-type": "text/plain" })
        res.end("This the about page")
    } else {
        res.writeHead(200, { "content-type": "text/plain" })
        res.end("Not found")
    }
}

// Create the server
const server = http.createServer(requestHandler)

// Start our server
const PORT = 3000
server.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`);
})