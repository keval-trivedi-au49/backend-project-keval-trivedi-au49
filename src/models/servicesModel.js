const mongoose = require("mongoose");
const { Schema } =  require("mongoose");

const servicesSchema = new Schema({
   icon:String,
   title:String,
   Description:String,
   linkText:String,
   link:String
})

const schemaModel = mongoose.model('services',servicesSchema);

module.exports = schemaModel