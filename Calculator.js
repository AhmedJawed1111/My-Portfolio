import inquirer from "inquirer";
let answer = await inquirer.prompt([
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
    let reslut = 0;
    {
        if (Operator === "+") {
            reslut = FirstNumber + SecondNumber;
        }
        else if (Operator === "-") {
            reslut = FirstNumber - SecondNumber;
        }
        else if (Operator === "*") {
            reslut = FirstNumber * SecondNumber;
        }
        else if (Operator === "/") {
            reslut = FirstNumber / SecondNumber;
        }
        else {
            console.log("kindly Enter Valid Input!");
        }
        console.log("Your answer is:", reslut);
    }
}
