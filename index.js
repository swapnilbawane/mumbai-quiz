// Do you know Mumbai quiz as part of Neogcamp Mark 1 exercise. 

var readlineSync = require("readline-sync");
const chalk = require('chalk');
const boldRed = chalk.bold.red;
const yellowBold = chalk.yellowBright.bold;
const boldGreen = chalk.bold.green;
const green = chalk.green;
const bgWhite = chalk.bgWhite;
const greenBright = chalk.greenBright;
const yellowBright = chalk.yellowBright;

var score = 0;
var checkFlag = 0;
let userName;

var questionOne = {
  question: "1. Which festival is celebrated with a lot of pomp and fervor in Mumbai?",
  options: ["Ganesh Chaturthi", "La Tomatina", "Chinese New Year Day", "San Fermin"],
  answer: "1"
};


var questionTwo = {
  question: "2) Where is the full form of BEST - which plies buses in Mumbai?",
  options: ["Bombay Electricity and Supply Transport", "Bombay East Supply Transport", "Bombay Electricity and Safe Transport", "Bombay Eastern State Transport"],
  answer: "1"
};



var questionThree = {
  question: "3) What is the full form of BMC?",
  options: ["Brihanmumbai Municipal Corporation", "Bombay Municipal Corporation", "Brihat Mahanagar Corporation", "Bombay Municipal Corporation"],
  answer: "1"
};


var questionFour = {
  question: "4) What transport is not used in Mumbai for local or in city travel?",
  options: ["Plane", "Bus", "Train", "Rickshaw"],
  answer: "1"
};


var questionFive = {
  question: "5) Which airline has its headquarters in Mumbai?",
  options: ["Indigo", "Go Air", "Air Vistara", "Air India"],
  answer: "2"
};


var questionSix = {
  question: "6) Which of the following is a famous snack in Mumbai?",
  options: ["Vada Pav", "Dum Biryani", "Chole Bhature", "Dal Baati"],
  answer: "1"
};



// array of objects
// creating array of all question objects
var questionsDatabase = [questionOne, questionTwo, questionThree, questionFour, questionFive,questionSix];

function breakLine() {
  console.log("-------------");
}

function emptyLine() {
  console.log("");
}

function rules() {
 console.log("-----GUIDELINES FOR QUIZ--------");
  
  console.log("There are 6 questions in here. Each question will have four options.");
  
  console.log("Enter 1,2,3 or 4 as the correct answer and press enter. Enjoy the game.");
  
  console.log("Type your answer and Enter key or enter Q to quit at any question.");
  
  emptyLine();
  
  console.log("-----LET'S BEGIN..--------"); 
}

function welcome() {
  console.log("Let’s play - Do you know Mumbai?");
  
  userName = readlineSync.question(chalk.red("What's your name? "));
  
  breakLine();

  console.log("Welcome " + chalk.bgWhite(userName) + " to the DO YOU KNOW MUMBAI Quiz!");

  emptyLine();
  rules();
  emptyLine();
  
}


// play function
// quiz function
function quiz(questionAsked, options, answerStored) {

  emptyLine();

  console.log(boldGreen(questionAsked));

  for (var i = 0; i < 4; i++) {
    console.log(chalk.cyan.bold(i + 1 + ") " + options[i]));
  }

  var userAnswer = readlineSync.question(green("Enter your answer: "));

  if (userAnswer == "Q" | userAnswer == "q") {
    return 1;
  }

  else

    if (userAnswer == answerStored) {
      emptyLine();
      console.log(yellowBold("Your answer is correct."));
      emptyLine();
      // console.log("----Next question----");
      score = score + 1;
      return 0;

    }

    else {
      emptyLine();
      console.log(yellowBold("Your answer is wrong."));
      emptyLine();
      // console.log("----Next question----");
      return 0;

    }


}

// game function
function game() {
  for (var i = 0; i < questionsDatabase.length; i++) {
    var currentQuestion = questionsDatabase[i];
    checkFlag = quiz(currentQuestion.question, currentQuestion.options, currentQuestion.answer);
    console.log("");
    if (checkFlag == 1) {
      emptyLine();

      if (score > 0) {
        console.log(boldRed("You have exited the game midway."));
        console.log("Hello " + userName + " You SCORED: ", score);
      }
      else {
        emptyLine();
        console.log(chalk.red.bold("You have exited the game without answering any questions."));
        break;
      }
    }

  }
}


// checkScores function 
function checkScores(checkFlag) {
  if (checkFlag == 1) { }
  else
    if (score < questionsDatabase.length) {
      emptyLine();
      console.log(boldRed("Out of " + questionsDatabase.length + " questions, you answered " + score + " questions correctly."));
    }

    else {
      console.log(boldRed("Congratulations. You completed the game. Your total score is " + score));
    }

}

//  function showresults
function showResults() {
  emptyLine();
  console.log(bgWhite("And now let's look at all answers."));

  console.log(greenBright("1. Which festival is celebrated with a lot of pomp and fervor in Mumbai? Answer: Ganesh Chaturthi."));

  console.log(yellowBright("2. Where is the full form of BEST - which plies buses in Mumbai? Answer: Bombay Electricity and Supply Transport"));

  console.log(greenBright("3. What is the full form of BMC? Answer: Brihanmumbai Municipal Corporation."));

  console.log(yellowBright("4. What transport is not used in Mumbai for local or in city travel? Answer: Plane"));

  console.log(greenBright("5. Which airline has its headquarters in Mumbai? Answer: Go Air"));

  console.log(yellowBright("6. Which of the following is a famous snack in Mumbai? Answer: Vada Pav"));

}


welcome();
game();
checkScores(checkFlag);
showResults();
