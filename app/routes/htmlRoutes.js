// Include the path package to get the correct file path for the HTML
var path = require("path");

// ROUTING

module.exports = function (app) {
    // The below code handles when users "visit" a page, which are the below HTML pages

    // Send the "Survey" route when requesting
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    // If no matching route is found then default to "Home"
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};