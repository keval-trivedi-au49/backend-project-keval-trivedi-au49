const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const routes = require("./src/routes/dynamicHome");
const router = require("./src/routes/authentication")
const app = express();
const port = process.env.PORT || 8000
const detailModel = require('./src/models/Detailmodel');
const sliderModel = require('./src/models/sliderModel');
const servicesModel = require('./src/models/servicesModel');
const aboutModel = require('./src/models/aboutModel')
const dotenv = require('dotenv')
dotenv.config()
const { connectDB } = require("./dbconfig")
connectDB()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())






// sending the services section data to the database to make it dynamic

// async function sendServicesDetail(){
  
//     await servicesModel.create([
//       {
//         icon:'fa-sharp fa-solid fa-truck',
//         title:'Pan-India Delivery',
//         Description:'We provide Door to Door Delivery.',
//         linkText:'support',
//         link:'https://www.amazom.com'
//       },
//       {
//         icon:'fa-solid fa-gear',
//         title:'Free Installation',
//         Description:'Client will call you 24 hours after the delivery.',
//         linkText:'support',
//         link:'https://www.amazom.com'
//       },
    
//     ])
//     }
//     sendServicesDetail()

//********************************************************************* */




//**********sending the slider section data to the database to make it dynamic */
// async function sendSliderDetail(){
  
//   await sliderModel.create([
//     {
//       title:'Omega Fabric 3 Seater Sofa',
//       subTitle:'Bestsellers of the year at the lowest price ever',
//       imageUrl:"/static/images/sofa1.jpg"
//     },
//     {
//       title:'White-oak 6 seater Dining Set',
//       subTitle:'Beautify your home with modern style furniture designed just for you at upto 55% off',
//       imageUrl:"/static/images/dining.jpg"
//     },
//     {
//       title:'Boston solid wood queen size bed',
//       subTitle:'Teak wood finish with Box storage available at zero cost EMI',
//       imageUrl:"/static/images/bed.jpg"
//     }
//   ])
//   }
//   sendSliderDetail()

//******************************************** */




//********sending nav bar section data to to the database to make it dynamic ******

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

//***************************************************************************/

//Sending About section to the Database

// async function sendAbout(){
//     await aboutModel.create({
//       title:'About Us',
//       subTitle:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deserunt dolores architecto nostrum temporibus iste cum vero qui quae accusamus sint amet nulla, sequi quam nesciunt eaque dignissimos, expedita maiores.'
//     })
// }
// sendAbout()



//static/css/style.css
app.use('/static',express.static('public'))
app.use("/", routes);
app.use("/", router);


//(template engine)

app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials")


 

app.listen(port, () => {
  console.log("server started successfully");
});
