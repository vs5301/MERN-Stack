const mongoose = require("mongoose")

// user schema
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    hasCreatedAccount: {
        type: Boolean,
        default: false,
    },
    account: [
        {
            accountId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Account",
            },
            name: String,
            accountType: String,
        }
    ],
}, {
    strictPopulate: false  
},
    {
    timestamps: true,
    toJSON: { virtuals: true },
})

// model
const User = mongoose.model("User", userSchema)

module.exports = User