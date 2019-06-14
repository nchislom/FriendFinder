// // Dependencies
// var express = require('express');
// var path = require('path');

// // Express App Setup
// var app = express();
// var PORT = process.env.PORT || 3000;

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// function getFriends() {
//   app.get("/api/friends", function(req, res) {
//     return res.json(friends);
//   });
// }

// function postFriends() {
//   app.post("/api/friends", function(req, res) {
//     var newFriend = req.body;
//   });
// }

var apiRoutes = {
  getFriends: function(req, res) {
    return res.json(friends);
  },
  postFriends: function(req, res) {
    var newFriend = req.body;
  }
}
module.exports = apiRoutes;