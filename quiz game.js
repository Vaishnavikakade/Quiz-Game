var readlineSync=require("readline-sync");
var score=0;
var userName=readlineSync.question("What's your name?");
console.log("Welcome"+userName+"Do You Know Vaishnavi???");
function play(question,answer)
{
    var userAnswer=readlineSync.question(question);
    if(userAnswer.toUpperCase==answer.UpperCase())
    {
        console.log("right!!");
        score=score+1;
    }
    else{
        console.log("wrong!");
    }
    console.log("current score",score);
    console.log("------");

}
var questions=[{
    question:"Where do i live?",
    answer:"Banglore",

},
{
question:"My favourite superhero would be?",
answer:"Dhruv",
},
{
question:"Where do I work?",
answer:"Microsoft",
}];
for(var i=0; i<questions.length; i++)
{
    var currentQuestion=question[i];
    play(currentQuestion.question,currentQuestion,answer)

}
console.log("YAY!!!your score",score);
