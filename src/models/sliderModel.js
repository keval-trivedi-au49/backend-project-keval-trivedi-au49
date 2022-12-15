const mongoose = require("mongoose");
const { Schema } = require('mongoose')

//slider schema we can imple more properties here
const sliderSchema = new Schema({
   title:String,
   subTitle:String,
   imageUrl:String,
   class:String
})

const sliderModel = mongoose.model('sliders',sliderSchema);

module.exports = sliderModel