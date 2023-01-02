const userChoiceDisplay = document.getElementById('userChoice');
const compChoiceDisplay = document.getElementById('compChoice');
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');

let userChoice;
let compChoice;
let result;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
   userChoice = e.target.id;
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoice();
   getResult()
}));

// possibleChoices.forEach(addEventListener('click', (e) => {
//    choice = e.target.id;
//    userChoiceDisplay.innerHTML = choice
//    generateComputerChoice();
// }));

function generateComputerChoice() {
   const random = Math.floor(Math.random() * 3) + 1;
   console.log(random);

   if (random == 1) {
      compChoice = "rock";
   }
   if (random == 2) {
      compChoice = "paper";
   }
   if (random == 3) {
      compChoice = "scissor";;
   }

   compChoiceDisplay.innerHTML = compChoice;
}

function getResult() {
   if(compChoice == userChoice) {
      result = "Draw";
   }
   if(compChoice == "rock" && userChoice == "scissor") {
      result = "You Lose"
   }
   if(compChoice == "rock" && userChoice == "paper") {
      result = "You Win"
   }
   if(compChoice == "paper" && userChoice == "scissor") {
      result = "You Win"
   }
   if(compChoice == "paper" && userChoice == "rock") {
      result = "You Lose"
   }
   if(compChoice == "scissor" && userChoice == "paper") {
      result = "You lose"
   }
   if(compChoice == "scissor" && userChoice == "rock") {
      result = "You Win"
   }

   resultDisplay.innerHTML = result
}