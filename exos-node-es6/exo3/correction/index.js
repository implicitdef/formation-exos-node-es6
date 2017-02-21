const request = require('request');

const username = process.argv[2];

console.log("---- Searching for posts by " + username + " ----");

// First request
request("https://jsonplaceholder.typicode.com/users", (err, response, body) => {
  if (err) {
    console.error(err);
  } else {
    const users = JSON.parse(body);
    const user = users.find(user => user.username === username);
    if (!user) {
      console.error("User not found !");
    } else {
      // Second request
      const options = {
        url : "https://jsonplaceholder.typicode.com/posts",
        qs : {
          userId : user.id
        }
      };
      request(options, (err, response, body) => {
        if (err) {
          console.error(err);
        } else {
          const posts = JSON.parse(body);
          posts.forEach(({id, title}) => {
            console.log(`${id} ${title}`);
          });
          console.log("----- Done -------")
        }
      });
    }
  }
});