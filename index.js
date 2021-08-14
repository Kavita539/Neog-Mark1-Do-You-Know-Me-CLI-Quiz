var readLineSync=require("readline-sync"); //this lib is ued to take i/p.
var chalk=require("chalk");//this lib is used to beautify the app
var score=0;
var userName=readLineSync.question("Hello! Enter your name :\n->");
console.log(chalk.black.bgRed.bold("\nWelcome ")+chalk.black.bgRed.bold(userName)+chalk.black.bgRed.bold(" To 'Do you know Kavita? Quiz '\n"));

//function play is created 
function play(question,answer){
  var userAnswer = readLineSync.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.green("\ncongrats! You're right :)"));
    score=score+1;
  }
  else{
    console.log(chalk.red("\nOops! You're wrong :("));

  }
  console.log(chalk.yellow("Your current score is : "+score));
  console.log(chalk.grey.bold("\n------------------------\n"));
  
}

//an array of highscores is created to keep the scores of highscorers using object
var highScores=[{
  name:"Kavita",
  score:5
},{
  name:"Aakanksha",
  score:4
}
]

//an array of questions is created that are to be asked to the user using object
var questions = [{
  question:"1) Where do I live?\n-->",
  answer:"Kalyan"
},{
  question:"2) What's my age?\n-->",
  answer:"21"
},{
  question:"3) Where do I study?\n-->",
  answer:"SSJCE"
},{
  question:"4) My favourite cuisine?\n-->",
  answer:"Indian"
},{
  question:"5) My favorite place (apart from Mumbai)?\n-->",
  answer:"Varanasi"
}
]

 for(var i=0;i<questions.length;i=i+1){
   var currentQuestion=questions[i];
   play(currentQuestion.question,currentQuestion.answer)
 }
 console.log("You Scored : ",score);
 console.log("\n--------------------------------");
 console.log(chalk.magenta("Score Board of High Scores : "));
 console.log("--------------------------------");
   

 for(var j=0;j<highScores.length;j=j+1){
   var currentHighScore=highScores[j];
   console.log(currentHighScore.name);
   console.log(currentHighScore.score);
 }

//  if else statement to update the highscorer accordingly
 if(score >= highScores[0,1].score) {
    console.log(chalk.red.italic("\nCongratulations!!!\n"));
    console.log("*************************************");
    console.log(chalk.bold.cyan("Since you are one of the highscorers, send me a screenshot and I'll update one of the Highscorers as you..."));
  } else {
   console.log(chalk.red("\nSorry, You haven't beaten the Highscore, Please try again :)\n"));
}


