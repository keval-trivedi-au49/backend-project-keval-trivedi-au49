const mongoose = require("mongoose");
const { Schema } =  require("mongoose");
const jwt = require("jsonwebtoken")
const signupSchema = new Schema({
   name:{
      type:String,
      required:true
   },
   email:{
      type:String,
      unique:true,
      required:true
   },
   password:{
      type:String,
      required:true
   },
   tokens:[{
      token:{
         type:String,
         required:true
      }
   }]
   
})

signupSchema.methods.generateAuthToken = async function(){
   try {
      console.log(this._id);
      const token = jwt.sign({_id:this._id.toString()} , process.env.SESSION_KEY);
      this.tokens = this.tokens.concat({token:token})
      await this.save()
      
      return token;
   } catch (error) {
      res.send("the error part" + error)
      console.log("the error part" + error)
      
   }
}

const signupModel = mongoose.model('users',signupSchema);
module.exports = signupModel;


