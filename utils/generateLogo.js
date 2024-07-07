const Square = require("../lib/Square");
const Circle = require("../lib/Circle");
const Triangle = require("../lib/Triangle");

function generateLogo(data) {
  let shape = undefined;
  if (data.shape === "Square") {
    shape = new Square(data.shape_color, data.text, dtat.text_color);
  } else if (data.shape === "Circle") {
    shape = new Circle(data.shape_color, data.text, dtat.text_color);
  } else {
    shape = new Triangle(data.shape_color, data.text, dtat.text_color);
  }
  return shape.render();
}

module.exports = generateLogo;
