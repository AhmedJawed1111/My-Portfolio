import inquirer from "inquirer";
import { type } from "os";

let answer: {
  FirstNumber: number;
  SecondNumber: number;
  Operator: string;
} = await inquirer.prompt([
  {
    message: "First number",
    type: "number",
    name: "FirstNumber",
  },
  {
    message: "Second number",
    type: "number",
    name: "SecondNumber",
  },
  {
    message: "Choose Operator",
    type: "list",
    choices: ["+", "-", "*", "/"],
    name: "Operator",
  },
]);

let { FirstNumber, SecondNumber, Operator } = answer;
if (FirstNumber && SecondNumber && Operator) {
  let result: number = 0;
  {
    if (Operator === "+") {
      result = FirstNumber + SecondNumber;
    } else if (Operator === "-") {
      result = FirstNumber - SecondNumber;
    } else if (Operator === "*") {
      result = FirstNumber * SecondNumber;
    } else if (Operator === "/") {
      result = FirstNumber / SecondNumber;
    } else {
      console.log("kindly Enter Valid Input!");
    }
    console.log("Your answer is:", result);
  }
}
