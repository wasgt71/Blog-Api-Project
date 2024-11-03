const express = require("express");
const bodyParser = require('body-parser');
const indexRouter = require("./routes/indexRouter");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());


/*const path = require("node:path");



app.use(bodyParser.json());
app.use("/", indexRouter);


app.get("/", (req, res) =>
res.render("index", { user: req.user, messages: messages })
);
app.post('/', (req, res) => {
    res.json(req.body);
  });*/
  let posts = {
    1: {
      id: '1',
      username: 'Robin Wieruch',
      message: 'Hey im robin',
    },
    2: {
      id: '2',
      username: 'Dave Davids',
      message: 'hey im dave',
    },
  };
  
  let comments = {
    1: {
      id: '1',
      text: 'Hello World',
      username: 'Tristan',
    },
    2: {
      id: '2',
      text: 'By World',
      username: 'Aidan',
    },
  };


  app.get('/posts', (req, res) => {
    return res.json(Object.values(posts));
  });

  app.get('/posts/:postId', (req, res) => {
    return res.send(users[req.params.postId]);
  });

  app.get('/comments', (req, res) => {
    return res.send(Object.values(comments));
  });
  
  app.get('/comments/:username', (req, res) => {
    return res.send(messages[req.params.commentId]);
  });

  app.post('/comments', (req, res) => {
    const id = uuidv4();
    const message = {
      id,
      text: req.body.text,
    };
  
    comments[id] = comments;
  
    return res.send(comments);
  });


  /*app.get('/users', (req, res) => {
    return res.send('GET HTTP method on user resource');
  });
  
  app.post('/users', (req, res) => {
    return res.send('POST HTTP method on user resource');
  });
  
  app.put('/users/:userId', (req, res) => {
    return res.send(
      `PUT HTTP method on user/${req.params.userId} resource`,
    );
  });
  
  app.delete('/users/:userId', (req, res) => {
    return res.send(
      `DELETE HTTP method on user/${req.params.userId} resource`,
    );
  });

*/

  
 const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
