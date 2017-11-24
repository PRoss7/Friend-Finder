// GET route to /survey that will display the survey page
// default, catch-all route that leads to home.html which displays the home page

var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

    app.get("/survey", function (req, res) {

        res.sendFile(path.join(__dirname, "/../public/survey.html"));

    });


    // If no matching route is found, default to home
    app.get("*", function (req, res) {

        res.sendFile(path.join(__dirname, "/../public/home.html"));

    });

};