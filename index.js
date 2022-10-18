// Do you know Mumbai quiz as part of Neogcamp Mark 1 exercise. 

var readlineSync = require("readline-sync");

var score = 0;
var checkFlag = 0; 
let userName;

// array of objects
var questionsHub = [
{
  question: "1. Which festival is celebrated with a lot of pomp and fervor in Mumbai? -- (1). Ganesh Chaturthi. -- (2). La Tomatina -- (3).Chinese New Year Day -- (4).San Fermin. What is your answer?-->",
  answer: "1",
  
}, 
{
  question: "2. Where is the full form of BEST - which plies buses in Mumbai? -- (1). Bombay Electricity and Supply Transport. -- (2). Bombay East Supply Transport -- (3).Bombay Electricity and Safe Transport -- (4).Bombay Eastern State Transport. What is your answer?--> ",
  answer: "1",
  
},
{
  question: "3. What is the full form of BMC? -- (1). Brihanmumbai Municipal Corporation. -- (2). Bombay Municipal Corporation -- (3).Brihat Mahanagar Corporation -- (4).Bombay Municipal Corporation. What is your answer?--> ",
  answer: "1",
  
},
{
  question: "4. What transport is not used in Mumbai for local or in city travel? -- (1). Plane. -- (2). Bus -- (3).Train -- (4).Rickshaw?--> ",
  answer: "1",
  
},
{
  question: "5. Which airline has its headquarters in Mumbai?  -- (1). Indigo -- (2). Go Air -- (3).Air Vistara -- (4).Air India?-->",
  answer: "2",
  
},
{
  question: "6. Which of the following is a famous snack in Mumbai? -- (1). Vada Pav -- (2). Dum Biryani  -- (3).Chole Bhature -- (4).Dal Baati ?-->",
  answer: "1",
  
}
];



function welcome() {
  console.log("Let’s play - Do you know Mumbai?");
  userName = readlineSync.question("What's your name? ");
  console.log("-------------");
  console.log("Welcome "+ userName + " to DO YOU KNOW MUMBAI quiz?");
  console.log("");
  console.log("-----GUIDELINES FOR QUIZ--------");
  console.log("There are 6 questions in here. Each question will have four options.");
  console.log("Enter 1,2,3 or 4 as the correct answer and press enter. Enjoy the game.");
  console.log("Type your answer and Enter key or enter Q to quit at any question.");
  console.log("");
  console.log("-----LET'S BEGIN..--------");
  console.log("");
}


// play function
function play(questionAsked, answerStored) 
{
  
  var userAnswer = readlineSync.question(questionAsked);
  
  if (userAnswer == "Q" | userAnswer == "q" ) { 
         return 1;
         }
     
    
  else 


  if (userAnswer == answerStored ) { 
    console.log("");
    console.log("Your answer is correct.");
    console.log("");
    console.log("----Next question----");
    score = score + 1;
    return 0;
    
  } 
  
  else 
  
  {
    console.log("Your answer is wrong.");
    console.log("");
    console.log("----Next question----");
    return 0;
   
  }

  
}

// game function
function game() 
{
  for (var i=0; i<questionsHub.length; i++) 
  {
    var currentQuestion = questionsHub[i];
    checkFlag=play(currentQuestion.question, currentQuestion.answer);
    console.log("");
    if (checkFlag==1) 
    { 
      console.log("");

      if(score>0)
      { console.log("YAY! "+userName+ " You SCORED: ", score); }
      else 
      { console.log("You did not answer any questions.") }
      console.log("");
      console.log("You have exited the game");
      
      break;    
    }
}
}


function showScores() {
  if (checkFlag==0)
  console.log("YAY! "+userName+ " You SCORED: ", score);
}



welcome();
game();
showScores();
