const express = require("express");
const Controller = require("../App/controller/HomeController");

const Router = express.Router();

//get
Router.get("/", Controller.default);
Router.get("/about", Controller.about);

Router.get("/users", Controller.getAllusers);
Router.get("/posts", Controller.getAllPosts);

// post
Router.post("/user", Controller.postUser);
Router.post("/post", Controller.postPost);

module.exports = Router;
