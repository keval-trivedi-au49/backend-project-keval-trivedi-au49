const express = require("express");
const hbs = require("hbs")
const routes = require("./src/routes/main")
const app = express();
const detailModel = require('./src/models/Detailmodel')
const dotenv = require('dotenv')
dotenv.config()
const { connectDB } = require("./dbconfig")
connectDB()



// async function sendDetail(){
  
// await detailModel.create({
//   brandName:"WoodPecker",
//   brandIconUrl:"https://yt3.ggpht.com/ytc/AMLnZu8ZoOI1hsfE9DET1nqFHyLscyNjERFC6VrwrkUwWOk=s48-c-k-c0x00ffffff-no-rj",
//   links:[
//     {
//       label:"Home",
//       url:"/"
//     },
//     {
//       label:"sofas",
//       url:"/sofas"
//     },
//     {
//       label:"Beds",
//       url:"/beds"
//     },
//     {
//       label:"Dining",
//       url:"dining"
//     },
//     {
//       label:"Contact us",
//       url:"/contact-us"
//     }
   
//   ]
// })
// }
// sendDetail()


//static/css/style.css
app.use('/static',express.static('public'))
app.use("/", routes);

//(template engine)

app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials")


 

app.listen(process.env.PORT | 8000, () => {
  console.log("server started successfully");
});
