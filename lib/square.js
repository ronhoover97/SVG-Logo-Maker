const Shape = require("./Shape.js");

class Square extends Shape {
  render() {
    return `<rect cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`;
  }
}

module.exports = { Square };
