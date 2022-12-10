const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.render("index");
});
routes.get("/sofas", (req, res) => {
  res.render("sofas");
});

module.exports = routes;

// to configure different web pages we need to create different routes like  and export the module and use it through app.use('/',routes)
