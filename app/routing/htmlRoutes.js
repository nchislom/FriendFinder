// Dependencies
// var express = require('express');
// var path = require('path');

// Express App Setup
// var app = express();
// var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Routes
// =============================================================

// function getRoot() {
//     app.get("/", function(req, res) {
//         res.sendFile(path.join(__dirname, "./app/public/home.html"));
//     });
// }

// function getSurvey() {
//     app.get("/survey", function(req, res) {
//         res.sendFile(path.join(__dirname, "./app/public/survey.html"));
//     });
// }

// function getDefault() {
//     app.get("*", function(req, res) {
//         res.sendFile(path.join(__dirname, "./app/public/home.html"));
//     });
// }

var htmlRoutes = {
    getRoot: function(req, res) {
        console.log("Sending home...");
        res.sendFile(path.join(__dirname, "./app/public/home.html"));
    },
    getSurvey: function(req, res) {
        console.log("Sending survey...");
        res.sendFile(path.join(__dirname, "./app/public/survey.html"));
    },
    getDefault: function(req, res) {
        console.log("Sending default route...");
        res.sendFile(path.join(__dirname, "./app/public/home.html"));
    }
}

module.exports = htmlRoutes;