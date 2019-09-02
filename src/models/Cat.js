const mongoose = require("mongoose");

const Cat =  new mongoose.Schema({
    name: String,
    tests : [{id :{ type: mongoose.Schema.Types.ObjectId, ref: "Tests" }, positive : {type : Boolean}}]
});

module.exports = mongoose.model("Cat", Cat);