const fs = require("fs");
const inquirer = require("inquirer");
const generateLogo = require("./utils/generateLogo");

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

const questions = [
  {
    type: "input",
    message:
      "Please enter the text you would like displayed inside your logo! Text can be up to 3 letters.",
    name: "text",
  },
  {
    type: "input",
    message:
      "Please enter the color keyword(red, white, blue) or hexadecimal number(#8152bf) you would like the color of the text to be.",
    name: "textColor",
  },
  {
    type: "list",
    message: "Please select the desired shape for your logo from the choices.",
    name: "shape",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    message:
      "Please enter the color keyword(red, white, blue) or hexadecimal number(#8152bf) you would like the color of the shape to be.",
    name: "shapeColor",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, JSON.stringify(data, null, 2), (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}

function init() {
  const prompt = inquirer.createPromptModule();
  prompt(questions)
    .then(function (data) {
      var fileName = "logo.svg";
      writeToFile(fileName, data);
    })
    .catch(function (error) {
      console.error("Error:", error);
    });
}

init();
