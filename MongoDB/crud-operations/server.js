const express = require("express")
const {
    ServerApiVersion,
    MongoClient,
} = require("mongodb")

// Connect to MongoDB
const mongodbUrl = "mongodb+srv://vaibhavsharma5301:Hm0q3nWX4CzunbHj@cluster0.byadrnc.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(mongodbUrl, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

const connectDb = async () => {
    try {
        await client.connect()
        console.log("MongoDB connected succesfully");

        // Create db school
        const database = client.db("school")

        // Collections
        const students = database.collection("students")
        
        // Create document(student)
        /*
            const student2 = await students.insertMany([
                {
                    name: "Emily Jane",
                    city: "Kumasi"
                },
                {
                    name: "Thomas Roy",
                    city: "Kumasi"
                }
            ])
        */
        
        // Read all documents
        // const allStudents = await students.find().toArray()

        // Query a document
        /*
            const foundSt = await students.findOne({
                name: "Thomas Roy"
            })
            console.log(foundSt);
        */

        // Updating a document
        const updatedStudent = await students.updateOne({ name: 'Jane Doe' }, {
            $set: {name: 'Thomas Roy'}
        })
        console.log(updatedStudent);

        // Deleting a document
        const deletedStudent = await students.deleteOne({ name: 'Emily Jane' })
        console.log(deletedStudent);

        // Query all documents
        const foundSts = await students.find({ city: "Kumasi" }).toArray()
        console.log(foundSts);

    } catch (error) {
        console.error(error);
    }
}

connectDb()