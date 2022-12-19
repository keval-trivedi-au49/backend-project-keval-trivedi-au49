const mongoose = require("mongoose");
const { Schema } = require('mongoose');

const aboutSchema = new Schema({
   title:String,
   subTitle:String

})

const aboutModel = mongoose.model('abouts',aboutSchema)

module.exports = aboutModel
