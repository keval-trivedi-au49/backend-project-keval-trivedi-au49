const express = require("express");

const router = express.Router();
const signupModel = require("../models/signupModel");
const bcrypt = require("bcrypt");
const passport = require("passport");
const initializePassport = require("../../passportconfig")
const flash = require("express-flash");
const session = require("express-session");
initializePassport(
   passport,
   email => signupModel.find(users => users.email === email),
   id => signupModel.find(users => users.id === id)
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
      const userData = new signupModel({
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
      res.render("register")
   }


   } catch (error) {
      res.redirect("/register")
   }
})

router.post("/login", async (req,res)=>{
   try {
      const email = req.body.email
      const password = req.body.password
      const RegisteredUserEmail = await signupModel.findOne({email:email})
      const userPassword = await bcrypt.compare(password,RegisteredUserEmail.password);

      if(userPassword){
         res.status(201).redirect("/")
      }else{
         res.status(400).render("error")
      }
   } catch (e) {
      res.status(400).render("error")
   }
})

module.exports = router;

  