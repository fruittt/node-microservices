const express = require('express');
const bodyParser = require('body-parser');
const  { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());
const posts = { };

app.post('/posts/create', async (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;

  posts[id] = {
    id, title
  }
  try {
    await axios.post('http://event-bus-srv:4005/events', {
      type: 'PostCreated',
      data: { id, title }
    });
  } catch (err) {
    console.error('Error sending event to event-bus:', err.message);
  }
  res.status(201).send(posts[id]);
})

app.post('/events', (req, res) => {
  const { type, data } = req.body;
  // if (type === 'CommentModerated') {
  //   const { id, postId, status, content } = data;
  //   const post = posts[postId];
  //   const comments = post.comments || [];
  //   const comment = comments.find(comment => {
  //     return comment.id === id;
  //   })
  //   comment.status = status;
  // }
  // console.log('Event received', req.body);
  // res.send({}); 
  console.log('Event received', req.body.type)
  res.send({ status: 'OK' }); 
})
app.listen(4000, () => {
    console.log('Listening on 4000');
})