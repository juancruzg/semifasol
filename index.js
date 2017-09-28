const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();

// Use native promises for mongoose
mongoose.Promise = global.Promise;

// Middlewares
app.use(bodyParser.urlencoded({ "extended": true }));
app.use(bodyParser.json());
app.use(session ({
  secret: 'ssshhhhh',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false
  }
}));

let port = process.env.PORT || 8000;

app.use("/api/user", require("./api/user"));

// Serve static content
app.use("/", express.static("./public"));
app.listen(port);
