const Sequelize = require("sequelize");
const fs = require("fs");
const path = require("path");
const config = require(".././config.json").database;

let sequelize = new Sequelize(config.database, config.username, config.password, config.options);
let db = {};

const pathToModel = path.join(__dirname, "models");

fs.readdirSync(pathToModel).forEach(m => {
  let model = sequelize.import(path.join(pathToModel, m));
  db[model.name] = model;
});

Object.keys(db).forEach(model => {
  if (db[model].defineRelationships)
    db[model].defineRelationships(db);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
