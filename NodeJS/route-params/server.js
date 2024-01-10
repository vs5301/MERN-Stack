const http = require("http")
const url = require("url")

// Define the handler
const requestHandler = (req, res) => {
    // pass the url
    const passedUrl = url.parse(req.url, true)
    const pathname = passedUrl.pathname
    // split the pathname
    const pathComponent = pathname.split("/").filter(Boolean)
    if (pathComponent[0] === "products" && pathComponent) {
        // Take product and send to user
        // perform db query
        const productId = pathComponent[1]
        // send to the user
        res.writeHead(200, { "Content-Type": "text/plain" })
        res.end(`Product ID ${productId}`)
    } else {
        res.writeHead(200, { "Content-Type": "text/plain" })
        res.end(`Not Found`)
    }
}

// Create the server
const server = http.createServer(requestHandler)

// Start server
const PORT = 3000
server.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`);
})