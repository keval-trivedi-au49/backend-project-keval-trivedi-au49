const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const diningSchema = new Schema({
   imageUrl:{
      type:String,
   },
   url:{
      type:String
   },
   title:{
      type:String
   },
   price:{
      type:String
   }
})
   
const diningModel = mongoose.model("diningpage",diningSchema)

module.exports = diningModel