const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const sofaSchema = new Schema({
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
   
const sofaModel = mongoose.model("sofas",sofaSchema)

module.exports = sofaModel