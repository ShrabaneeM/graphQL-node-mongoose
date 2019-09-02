const mongoose = require("mongoose");

const Tests =  new mongoose.Schema({
    name: String,
    createdAt: { type: Date, default: Date.now },
    positive : { type : Boolean }
});

module.exports = mongoose.model("Tests", Tests);