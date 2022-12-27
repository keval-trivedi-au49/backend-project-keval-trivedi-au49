const jwt = require("jsonwebtoken");
const Register = require("../models/signupModel");

const auth = async (req,res,next)=>{
   try {
      const token = req.cookies.jwt;
      const verifyUser = jwt.verify(token,process.env.SESSION_KEY)
      console.log(verifyUser);
      const user = await Register.findOne({_id:verifyUser._id});
      console.log(user);
      next();
   } catch (error) {
      res.status(401).render("error")
   }
}

module.exports = auth;