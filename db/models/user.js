"use strict";

module.exports = (sequelize, Sequelize) => {
  let User = sequelize.define("User", {
    username: Sequelize.STRING,
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    address1: Sequelize.STRING,
    address2: Sequelize.STRING
  });

  User.defineRelationships = (models) => {
    User.belongsToMany(models.User, {
      as: "relation",
      through: models.Relationship,
      foreignKey: "fromId"
    });

    User.belongsToMany(models.User, {
      as: "relationTo",
      through: models.Relationship,
      foreignKey: "toId"
    });
  }

  return User;
}
