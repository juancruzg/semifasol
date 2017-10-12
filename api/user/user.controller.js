const UserData = require("./user.data.js");
const BaseController = require("./../base/base.controller.js");
const User = require("./user.model.js");
const Relationship = require("./../relationship/relationship.model.js");

module.exports = class UserController extends BaseController {
  constructor() {
    super();
    this.data = new UserData();
  }

  insertUser(req, res) {
    let user = new UserModel(req.body.user);

    if (user) {
      user.validateInsert().then(() => {
        this.data.insertUser(user).then(user => {
          if (user)
            super.respondSuccess(res, { "user": user });
          else
            super.respondNotFound(res);
        }).catch(err => {
          super.respondInternalServerError(res, err);
        });
      }).catch(sr => {
        super.respondInternalServerError(res, sr);
      });
    }
  }

  listUsers(req, res) {
    this.data.findAllUsers().then(users => {
      if (users && users.length && users.length != 0)
        super.respondSuccess(res, { "users": users });
      else
        super.respondNotFound(res);
    }).catch(err => {
      super.respondInternalServerError(res, err)
    });
  }

  addNewFriend(req, res) {
    let rel = {};
    rel.userFrom = req.params.from;
    rel.userTo = req.params.to;
    rel.relationshipType = "friendship";

    let relationship = new RelationshipModel(rel);

    // relationship.validateInsert().then(sr => {}).catch(sr => {});
    this.data.addRelationship(relationship).then(user => {
      if (user)
        super.respondSuccess(res, { "user": user });
      else
        super.respondNotFound(res);
    }).catch(err => {
      super.respondInternalServerError(res, err);
    });
  }
}
