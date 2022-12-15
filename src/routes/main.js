const express = require("express");

const routes = express.Router();

const detailModel = require('../models/Detailmodel');
const sliderModel = require('../models/sliderModel');
const servicesModel= require('../models/servicesModel')




routes.get("/",async (req, res) => {
  //fetching the navigation bar section data from the database
  const navDetail =await detailModel.findById({"_id":"639598a34ddba701e11e3a4d"})
  // console.log(navDetail);

  //******fetching the slider section data from the database */
  const sliderDetail = await sliderModel.find()
  // console.log(sliderDetail);
  
  //fetching the services section data from the database
  const servicesDetail = await servicesModel.find()
  // console.log(servicesDetail);

  // sending the navigation bar,slider and services section data to index.hbs file in key value pair
  res.render("index",{
    details:navDetail,
    slider:sliderDetail,
    services:servicesDetail
  });
});


routes.get("/sofa",async (req, res) => {

  const navDetail =await detailModel.findById({"_id":"639598a34ddba701e11e3a4d"})

  //sending the navigation bar data section to the sofas.hbs file in key value pair
  res.render("sofas",{
    details:navDetail
  });
});

module.exports = routes;

// to configure different web pages we need to create different routes like  and export the module and use it through app.use('/',routes)
