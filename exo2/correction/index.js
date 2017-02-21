var request = require('request');

var username = process.argv[2];

console.log("---- Searching for posts by " + username + " ----");

// First request
request("https://jsonplaceholder.typicode.com/users", function(err, response, body){
  if (err) {
    console.error(err);
  } else {
    var users = JSON.parse(body);
    var user = users.find(function(user){
      return user.username === username;
    });
    if (!user) {
      console.error("User not found !");
    } else {
      // Second request
      var options = {
        url : "https://jsonplaceholder.typicode.com/posts",
        qs : {
          userId : user.id
        }
      };
      request(options, function(err, response, body) {
        if (err) {
          console.error(err);
        } else {
          var posts = JSON.parse(body);
          posts.forEach(function(post) {
            console.log(post.id + " " + post.title);
          });
          console.log("----- Done -------")
        }
      });
    }
  }
});