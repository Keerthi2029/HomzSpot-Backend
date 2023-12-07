const mongoose = require("mongoose")

const PropertySchema = new mongoose.Schema({
    currentOwner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: true,
        min: 6,
    },
    type: {
        type: String,
        enum: ["apartment", "mansion", "individual","industrial","rent","land"],
        required: true
    },
    desc: {
        type: String,
        required: true,
        min: 50,
    },
    add: {
        type: String,
        required: true,
        min: 50,
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    sqmeters: {
        type: Number,
        required: true,
        min: 15
    },
    continent: {
        type: String,
        required: true
    },
    beds: {
        type: Number,
        required: true,
       
    },
    rooms: {
        type: Number,
        required: true,
       
    },
    bath: {
        type: Number,
        required: true,
       
    },
    parking: {
        type: String,
        required: true,
       
    },
    furnished: {
        type: String,
        required: true,
       
    },
    bookmarkedUsers: {
        type: [String],
        default: []
    }
}, {timestamps: true})

module.exports = mongoose.model("Property", PropertySchema)
