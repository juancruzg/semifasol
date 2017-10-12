module.exports = class ServerResponse {
  constructor(error) {
    this.errors = [];

    if (error)
      this.errors.push(error);
  }

  addError(error) {
    if (!this.errors || this.errors.length === 0)
      this.errors = [];

    this.errors.push(error);
  }

  hasErrors() {
    return (this.errors.length !== 0);
  }
}
