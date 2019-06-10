var getFriends = app.get("/api/friends", function(req, res) {
  return res.json(friends);
});

var postFriends = app.post("/api/friends", function(req, res) {
  var newcharacter = req.body;
});

module.exports = {
  getFriends: getFriends,
  postFriends: postFriends
};