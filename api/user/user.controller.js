const UserData = require("./user.data.js");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports = class UserController {
  constructor() {
    this.data = new UserData();
  }

  insertUser(req, res) {
    let user = req.body.user;
    if (user) {
      this.data.insertUser(user).then(user => {
        let response = { "user": user };

        res.json(response);
      });
    }
  }

  updateUser(req, res) {
    let user = req.body.user;

    this.data.updateUser(req.body.user).then(record => {
      let response = { "oldRecord": record };

      res.json(response);
    });
  }

  addRelationship(req, res) {
    let idFrom = req.params.from;
    let idTo = req.params.to;

    let promiseFrom;
    let promiseTo;

    if (idFrom && idTo) {
      this.data.getUser({ "_id": idFrom }).then(userFrom => {
        this.data.getUser({ "_id": idTo }).then(userTo => {
          userFrom.relationships.push(new ObjectId(userTo._id));
          userTo.relationships.push(new ObjectId(userFrom._id));

          promiseFrom = this.data.updateUser(userFrom);
          promiseTo = this.data.updateUser(userTo);

          promiseFrom.then(userFrom => {
            console.log(userFrom);
            promiseTo.then(userTo => {
              res.json({ "userFrom": userFrom, "userTo": userTo });
            });
          });
        });
      });
    }
    else {
      let userFrom = req.body.userFrom;
      let userTo = req.body.userTo;

      userFrom.relationships.push(new ObjectId(userTo._id));
      userTo.relationships.push(new ObjectId(userFrom._id));

      promiseFrom = this.data.updateUser(userFrom);
      promiseTo = this.data.updateUser(userTo);

      promiseFrom.then(userFrom => {
        console.log(userFrom);
        promiseTo.then(userTo => {
          res.json({ "userFrom": userFrom, "userTo": userTo });
        });
      });
    }
  }

  getUser(req, res) {
    const query = { "username": req.params.username };

    // Validations
    this.data.getUser(query).then(user => {
      let response = { "user": user };

      res.json(response);
    }).catch(() => {
      res.json({ "error": "Not found" })
    });
  }

  getAll(req, res) {
    this.data.getUsers().then(users => {
      let response = { "users": users };

      res.json(response);
    });
  }

  getSome(req, res) {
    let query = req.query;

    this.data.query(query).then(users => {
      let response = { "users": users };

      res.json(response);
    });
  }

  session(req, res) {
    let user;

    if (req.session.user)
      user = req.session.user;
    else
      user = null;

    let response = { "user": user }

    res.json(response);
  }

  login(req, res) {
    let username = req.body.username;
    let password = req.body.password;

    const query = {
      "username": username,
      "password": password
    };

    this.data.getUser(query).then(user => {
      if (user)
        req.session.user = user;

      let response = { "user": user }

      res.json(response);
    });
  }
}
