#! /usr/bin/env node
// import inquirer from "inquirer";

// // 1) Compter will generate a random number
// // 2) User input for guessing number
// // 3) compare user input with computer generated number and show result

// const randomNumber = 13;

// const answer = await inquirer.prompt([{
//     name : "userGuessNumber", type: "number", message: "Please Guess a Number:",},
// ]);

// if (answer.userGuessNumber === randomNumber){console.log("Congrulations! you Guess Right Number.");}
// else {console.log("You Guess Wrong Number");}


import inquirer from "inquirer";

// 1) Compter will generate a random number
// 2) User input for guessing number
// 3) compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random()*6+1);

const answer = await inquirer.prompt([{
    name : "userGuessNumber", type: "number", message: "Please Guess a Number:",},
]);

if (answer.userGuessNumber === randomNumber){console.log("Congrulations! you Guess Right Number.");}
else {console.log("You Guess Wrong Number");}


 
