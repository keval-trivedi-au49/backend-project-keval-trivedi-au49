const express = require("express");

const router = express.Router();
const signupSchema = require("../models/signupModel");
const bcrypt = require("bcrypt");
const passport = require("passport");
const initializePassport = require("../../passportconfig")
const flash = require("express-flash");
const session = require("express-session");
initializePassport(
   passport,
   email => users.find(user => user.email === email),
   id => users.find(user => user.id === id)
   )

   router.use(express.urlencoded({extended: false}))
   router.use(flash())
   router.use(session({
         secret: 'keyboard cat',
       resave: false, // We wont resave the session variable if nothing is changed
       saveUninitialized: false,
       cookie: { secure: true }
   }))
   router.use(passport.initialize()) 
   router.use(passport.session())

// Configuring the register post functionality
router.post("/login", passport.authenticate("local", {
   successRedirect: "/",
   failureRedirect: "/login",
   failureFlash: true
}))   

router.get("/",(req,res)=>{
   res.render("index")
})
router.get("/login",(req,res)=>{
   res.render("login")
})
router.get("/register",(req,res)=>{
   res.render("register")
})
router.post("/register",async (req,res)=>{
   try {
      const { 
         name,
         email,
         password,
         cpassword 
      } = req.body; 
   if(password === cpassword){
      const password = await bcrypt.hash(req.body.password,10)
      const userData = new signupSchema({
         name,
         email,
         password,
      })
      userData.save(err=>{
         if (err) {
            console.log("Error");
         } else {
            res.redirect("/login")
         }
      })
   } else{
      res.render("register",{title:"",password:"password not matching",email:""})
   }


   } catch (error) {
      res.redirect("/register")
   }
})

module.exports = router;

  