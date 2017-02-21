const express = require('express');



const app = express();


app.get('/hello', (req, res) => {
  res.send('Hello!');
});

app.listen(4000, () => {
  console.log('Server listening on port 4000...')
});


/*
const username = process.argv[2];

console.log("---- Searching for posts by " + username + " ----");

// First request
axios.get("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    const users = response.data;
    const user = users.find(user => user.username === username);
    if (! user) {
      throw new Error('User not found!');
    }
    let config = {
      params : {
        userId : user.id
      }
    };
    return axios.get("https://jsonplaceholder.typicode.com/posts", config)
      .then(response => {
        const posts = response.data;
        posts.forEach(({id, title}) => {
          console.log(`${id} ${title}`);
        });
        console.log("----- Done -------")
      });
  })
  .catch(err => {
    console.error("Something went wrong : " + err)
  });
*/