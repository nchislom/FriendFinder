// Dependencies
var express = require('express');
var path = require('path');

// Express App Setup
var app = express();
// var router = express.Router();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./app/public"));

// Friends object
var friends = require('./app/data/friends');

app.post("/api/friends", function(req, res) {
    let newFriend = req.body;
    for(score in newFriend.scores){
        newFriend.scores[score] = parseInt(newFriend.scores[score]);
    }
    // getMatch(newFriend);
    friends.push(newFriend);
    console.log(friends);
    res.end;
});

app.get("/api/friends", function(req, res) {
    return res.json(friends);
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

// Starts the server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

function getMatch(user) {
    let currentMatch = 0;
    let currentScore = 0;
    let bestScore = 0;
    for(let i=0; i<friends.length; i++){
        let differenceMap = [];
        //Build array for score differences
        for(score in friends[i]){
            let currentDiff = user.scores[score] - friends[i].scores[score];
            differenceMap.push(currentDiff);
        }
        //Sum the array
        for(let j=0; j<differenceMap.length; j++){
            currentScore += differenceMap[j];
        }
        //Check for better match
        if(currentScore < bestScore){
            bestScore = currentScore;
            currentMatch = i;
        }
    }
    console.log("Best match is: " + friends[currentMatch]);
}