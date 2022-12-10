const mongoose = require("mongoose");
const { Schema } = require('mongoose')


const DetailSchema = new Schema({
   brandName:{
      type:String,
      
   },
   brandIconUrl:{
      type:String,
      
   },
   links:[{
      label:String,
      url:String,
   }]   

})

const detailModel = mongoose.model('details', DetailSchema)

module.exports = detailModel