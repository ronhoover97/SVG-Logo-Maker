const inquirer = require("inquirer");
const generateLogo = require("./utils/generateLogo");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "What text should go inside of the svg (at most 3 characters)?",
      validate: function (answer) {
        if (answer.length > 3) {
          return false;
        }
        return true;
      },
    },
    {
      type: "input",
      name: "textColor",
      message:
        "What color should the text be (must be a valid color or a hexadecimal)?",
    },
    {
      type: "list",
      name: "shape",
      message: "What shape should the logo be?",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "What color should the svg be?",
    },
  ])
  .then((answers) => {
    console.log(answers);
  });

class Svg {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
  }
  setTextElement(text, color) {
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }
  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }
}

function toWriteFile(fileName, data) {
  var content = generateLogo(data);
  fs.toWriteFile(fileName, content, function (error) {
    if (error) {
      console.log(error);
    }
    console.log("Generated logo.svg");
  });
}

function init() {
  inquirer.createPromptModule(questions).then(function (data) {
    var fileName = "logo.svg";
    writeToFile(fileName, data);
  });
}

init();
