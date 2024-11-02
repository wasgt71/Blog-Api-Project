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
  let users = {
    1: {
      id: '1',
      username: 'Robin Wieruch',
    },
    2: {
      id: '2',
      username: 'Dave Davids',
    },
  };
  
  let messages = {
    1: {
      id: '1',
      text: 'Hello World',
      userId: '1',
    },
    2: {
      id: '2',
      text: 'By World',
      userId: '2',
    },
  };


  app.get('/users', (req, res) => {
    return res.json(Object.values(users));
  });

  app.get('/users/:userId', (req, res) => {
    return res.send(users[req.params.userId]);
  });


  app.get('/messages', (req, res) => {
    return res.send(Object.values(messages));
  });
  
  app.get('/messages/:messageId', (req, res) => {
    return res.send(messages[req.params.messageId]);
  });

  app.post('/messages', (req, res) => {
    const id = uuidv4();
    const message = {
      id,
      text: req.body.text,
    };
  
    messages[id] = message;
  
    return res.send(message);
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
