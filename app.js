const express = require("express");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bodyParser = require("body-parser");
const postsRouter = require("./routes/postsRouter");
const commentsRouter = require("./routes/commentsRouter");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/posts", postsRouter);
app.use("/comments", commentsRouter);

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the API",
  });
});

app.post("/api/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "Post created...",
        authData
      });
    }
  });
});

app.post("/api/login", (req, res) => {
  const user = {
    id: 1,
    username: "brad",
    email: "brad@gmail.com",
  };

  jwt.sign({ user }, "secretkey", { expiresIn: '30s' }, (err, token) => {
    res.json({
      token
    });
  });
});

// Format of token
// Authorization: Bearer <access_token>
//Verify Token

function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers["authorization"];
  // Check is bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space
    const bearer = bearerHeader.split(" ");
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    //Forbidden
    res.sendStatus(403);
  }
}

/*async function main() {
 
  await prisma.posts.update({
    where: { id: 1 }, 
    data: {
      title: 'first blog post',
      content: 'hello world',
      comment: 'How are you',
      author: 'Tristan',
      authorId: 1,
    },
  });

  const allposts = await prisma.posts.findMany();

  console.dir(allposts, { depth: null });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
*/

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
