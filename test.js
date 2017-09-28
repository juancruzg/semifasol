const mongoose = require('mongoose');

// Use native promises
mongoose.Promise = global.Promise;

let connect = mongoose.connect('mongodb://localhost:27017/semifasol', {
  "useMongoClient": true
});

connect.then(db => {
  const User = require("./db/model/user.js");

  User.find().then(res => {
    User.find({_id: res[1].relationships[0]._id}).then(res => {
      console.log(res);

          db.close().then(x => {

          });
    });

  });
});
