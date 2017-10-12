const ServerResponse = require("./../validation/serverResponse.js");

module.exports = class UserModel {
  constructor(user) {
    this.username = user.username,
    this.firstName = user.firstName,
    this.lastName = user.lastName,
    this.address1 = user.address1,
    this.address2 = user.address2
  }

  validateInsert() {
    return new Promise((resolve, reject) => {
      let sr = new ServerResponse();

      if (!this.username)
        sr.addError("Please provide a username");

      if (!sr.hasErrors())
        resolve();
      else
        reject(sr);
    });
  }
}
