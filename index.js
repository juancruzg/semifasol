const express = require("express");
const bodyParser = require("body-parser");
const db = require('./db');
const session = require('express-session');

const app = express();

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

// Serve API endpoints
app.use("/api/user", require("./api/user"));

// Serve static content
app.use("/", express.static("./public"));

db.sequelize.sync({ force: true }).then(() => {
  app.listen(port);
});
