const cloudinary = require("cloudinary")
const { CloudinaryStorage } = require("multer-storage-cloudinary")

cloudinary.config({
    cloud_name: "dvi7og4pb",
    api_key: "992398914235726",
    api_secret: "k3CitbqNoewA1VMhMEmlhYKs1Lc",
})

// instance of cloudinary storage
const storage = new CloudinaryStorage({
    cloudinary,
    allowedFormats: ["jpg", "png"],
    params: {
        folder: "nodejs",
        transformation: [{ width: 500, height: 500, crop: "limit" }],
    },
})

module.exports = storage