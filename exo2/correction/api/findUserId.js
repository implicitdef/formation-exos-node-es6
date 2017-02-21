var request = require('request');

module.exports = function(username, callback){
  request("https://jsonplaceholder.typicode.com/users", function(err, response, body){



  });
};




request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})
