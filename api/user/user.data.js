const User = require("../../db").User;

module.exports = class UserData {
  constructor() {

  }

  insertUser(u) {
    let user = User.build(u);
    return user.save();
  }

  findAllUsers() {
    return User.findAll();
  }

  addRelationship(relationship) {
    return new Promise((resolve, reject) => {
      User.findById(relationship.userFrom).then(from => {
        User.findById(relationship.userTo).then(to => {
          from.addRelation(to, { through: { relationshipType: relationship.relationshipType } });

          from.save().then(user => {
            resolve(user);
          }).catch(err => {
            reject(err);
          });
        });
      });
    });
  }
}
