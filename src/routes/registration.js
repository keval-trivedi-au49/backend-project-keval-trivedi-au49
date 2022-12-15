const express = require("express");

const router = express.Router();

router.get("/",(req,res)=>{
   res.render("register",{title:"Please fillup the form",email:"",password:""})
})

router.post("/register", async(req,res)=>{
   console.log(req.body)
   try{
      const name = req.body.name;
      console.log();
      
   }catch(error){
      res.render("register",{title:"Error found",email:"",password:""})
   }
})

module.exports = router;