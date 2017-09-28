const mongoose = require('mongoose');

module.exports = class Connection {
  constructor(uri) {
    this.uri = uri;
  }

  connect() {
    return mongoose.connect(this.uri, { "useMongoClient": true });
  }
}
