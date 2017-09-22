const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ "extended": true }));
app.use(bodyParser.json());
//app.use("/api/something", require("./api/something"));

let port = process.env.PORT || 8000;

// Serve static content
app.use("/", express.static("./public"));
app.listen(port);
