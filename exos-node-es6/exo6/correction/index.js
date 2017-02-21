const express = require('express');
const axios = require('axios');

const app = express();

const fetchPostsForUsername = username => {
  return axios.get("https://jsonplaceholder.typicode.com/users")
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
          return posts.map(({id, title}) => ({id, title}));
        });
    });
};

app.get('/hello', (req, res) => {
  res.send('Hello!');
});

app.get('/posts/:username', (req, res) => {
  const {username} = req.params;
  fetchPostsForUsername(username)
    .then(posts => {
      res.json(posts);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Something went wrong');
    });
});


app.listen(4000, () => {
  console.log('Server listening on port 4000...')
});
