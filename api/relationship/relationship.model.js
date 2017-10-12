module.exports = class RelationshipModel {
  constructor(relationship) {
    this.userFrom = relationship.userFrom;
    this.userTo = relationship.userTo;
    this.relationshipType = relationship.relationshipType;
  }
}
