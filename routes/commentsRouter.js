const express = require("express");
const commentsRouter = express.Router();

let comments = {
  1: {
    id: "1",
    text: "Hello World",
    username: "Tristan",
    date: new Date(),
  },
  2: {
    id: "2",
    text: "By World",
    username: "Aidan",
    date: new Date(),
  },
};

commentsRouter.get("/", (req, res) => {
  return res.json(Object.values(comments));
});

commentsRouter.get("/:commentId", (req, res) => {
  const comment = comments[req.params.commentId];
  if (comment) {
    return res.send(comment);
  } else {
    return res.status(404).send("Comment not found");
  }
});

module.exports = commentsRouter;
