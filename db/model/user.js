const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  "title": String,
  "date": {
    "type": Date,
    "default": Date.now
  },
  "description": String
});

const userSchema = new Schema({
  "username": String,
  "password": String,
  "firstName": String,
  "lastName": String,
  "email": String,
  "phoneNumber": String,
  "address1": String,
  "address2": String,
  "relationships": [ this ],
  "posts": [ postSchema ]
},
{
  "collection": "user"
});

const User = mongoose.model("user", userSchema);

module.exports = User;
