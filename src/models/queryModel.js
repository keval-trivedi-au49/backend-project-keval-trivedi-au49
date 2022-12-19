const mongoose = require("mongoose");
const { Schema } = require('mongoose');

const querySchema = new Schema({
   name:String,
   email:String,
   phone:Number,
   query:String
}) 

const queryModel = mongoose.model('queries', querySchema);

module.exports = queryModel