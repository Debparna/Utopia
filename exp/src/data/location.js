const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const locationSchema = new mongoose.Schema(
    {
        Latitude: {
            type: Number,
            required: true,
            maxlength: 7
        },
        Longitude: {
            type: Number,
            required: true,
            maxlength: 7
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Location", locationSchema);
