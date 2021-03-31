var readlineSync = require("readline-sync");

var score=0;
var userName = readlineSync.question("Enter your name:\n");
console.log("Hey,"+userName+".");
console.log("let's play a short game on how good you know about twitter?\n");

function quiz(question,answer){
  var useranswer=readlineSync.question(question);

  if(useranswer===answer){
    console.log("you got it right! ;)")
    score++;
  }
  else{
    console.log("Oh!No problem you will learn :(")
  }
    console.log("Your current score is:"+score);
    console.log("---------------------------")
}
var quests = [{
    question:"First things first, Can a tweet be edited once posted?",
    answer:"no"
  },
  {
    question:"Max number of words which can be put in a tweet?",
    answer:"100"
  },
  {
    question:"Can one promote their brand on twitter by paying for ads?",
    answer: "yes"
  },
  {
    question:"Connecting with anyone on twitter is easy compare to other platforms?",
    answer:"yes"
  },
  {
    question:"Does twitter have similar feature like stories similar to IG?",
    answer: "yes"
  },
  {
    question:"What's the name of that feature on twitter?",
    answer: "fleets"
  },
]

for(i=0; i<quests.length; i++){
  var currentQuestion = quests[i];
  quiz(currentQuestion.question, currentQuestion.answer);
}
console.log("Your Final score is"+" "+score)
console.log("Thanks"+" "+userName+" "+"for playing this game")