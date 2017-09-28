const User = require("../../db/model/user.js");
const Connection = require("../../db/connection.js");

module.exports = class UserData {
  constructor() {
    this.conn = new Connection("mongodb://localhost:27017/semifasol");
  }

  getUser(query) {
    return new Promise((fulfill, reject) => {
      this.conn.connect().then(db => {
        User.findOne(query).then(user => {
          fulfill(user);

          db.close().then(() => {
            console.log("db closed");
          });
        });
      });
    });
  }

  getUsers() {
    return new Promise((fulfill, reject) => {
      this.conn.connect().then(db => {
        User.find().then(users => {
          fulfill(users);

          db.close().then(() => {
            console.log("db closed");
          });
        });
      });
    });
  }

  updateUser(u) {
    let query = { "_id": u._id };

    return new Promise((fulfill, reject) => {
      this.conn.connect().then(db => {
        User.findOneAndUpdate(query, u).then(user => {
          fulfill(user);

          db.close().then(() => {
            console.log("db closed");
          });
        });
      });
    });
  }

  query(query) {
    return new Promise((fulfill, reject) => {
      this.conn.connect().then(db => {
        User.find(query).then(users => {
          fulfill(users);

          db.close().then(() => {
            console.log("db closed");
          });
        });
      });
    });
  }

  insertUser(u) {
    return new Promise((fulfill, reject) => {
      this.conn.connect().then(db => {
        var user = new User(u);

        user.save().then(user => {
          fulfill(user);

          db.close().then(() => {
            console.log("db closed");
          });
        }).catch(err => {console.log(err);});
      });
    });
  }
}
