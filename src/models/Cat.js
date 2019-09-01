const mongoose = require("mongoose");

const Cat =  new mongoose.Schema({
    name: String
});

module.exports = mongoose.model("Cat", Cat);