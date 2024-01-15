const express = require("express")
const { MongoClient, ServerApiVersion } = require("mongodb")
const app = express()
const PORT = 8082

const url = "mongodb+srv://vaibhavsharma5301:Hm0q3nWX4CzunbHj@cluster0.byadrnc.mongodb.net/?retryWrites=true&w=majority"

// create new client
const client = new MongoClient(url, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    },
})

const connectDb = async () => {
    try {
        // connect to db
        await client.connect()
        console.log("MongoDb connected successfully");
    } catch (error) {
        console.log(error);
    }
}
connectDb()

// Start the server
app.listen(PORT, console.log(`The server is running at http://localhost:${PORT}`))