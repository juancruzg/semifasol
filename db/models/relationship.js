"use strict";

module.exports = (sequelize, Sequelize) => {
  let Relationship = sequelize.define("Relationship", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    relationshipType: Sequelize.STRING
  });

  Relationship.defineRelationships = (models) => {
  }

  return Relationship;
}
