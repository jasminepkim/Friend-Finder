// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");

// EXPRESS CONFIGURATION

// Creating an "express" server in node
var app = express();

// Sets an initial port that we will listen for
var PORT = process.env.PORT || 8080;

// BodyParser makes it possible for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ROUTER

// Points our server to a series of "route" files
// These routes give our server a "map" of how to respond when users
// visit/request data from various URLS
require("./app/routes/apiRoutes")(app); // separated API routes from this file
require("./app/routes/htmlRoutes")(app); // separated API routes from this file

// LISTENER

// Listens and starts our server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });