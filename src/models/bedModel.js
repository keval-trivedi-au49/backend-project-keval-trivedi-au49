const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const bedSchema = new Schema({
   url:{
      type:String
   },
   imageUrl:{
      type:String,
   },
   title:{
      type:String
   },
   price:{
      type:String
   }
})
   
const bedModel = mongoose.model("bedpage",bedSchema)

module.exports = bedModel