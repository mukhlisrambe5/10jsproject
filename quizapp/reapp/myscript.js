var questions = [
    {question: "What is the baby of a Moth known as?",
    choices: [" baby", " infant", " kit", " larva"],
    correctAnswer: 3},
    // {question: "What is the adult  of a kid called?",
    // choices: [" calf", " doe", " goat", " chick"],
    // correctAnswer: 2},
    // {question: "What is the young of a BUffalo called?",
    // choices: [" calf", " baby", " pup", " cow"],
    // correctAnswer: 0},
    // {question: "What is baby Aligator called?",
    // choices: [" baby", " gator", " hatchling", " calf"],
    // correctAnswer: 2},
    // {question: "What is a baby Goose called?",
    // choices: [" gooser", " gosling", " gup", " pup"],
    // correctAnswer: 1},
    // {question: "What is a baby Hamster called?",
    // choices: [" pup", " chick", " infant", " billy"],
    // correctAnswer: 0},
    // {question: "What is a Hawk called?",
    // choices: [" hawklett", " pup", " larva", " eyas"],
    // correctAnswer: 3},
    // {question: "What is a baby Grasshoper called?",
    // choices: [" hoper", " nymph", " stick", " pup"],
    // correctAnswer: 1},
    // {question: "What is a baby Kangaroo called?",
    // choices: [" kinga", " joey", " calf", " baby"],
    // correctAnswer: 1},
    // {question: "What is a baby Whale called?",
    // choices: [" whala", " cub", " grup", " infant"],
    // correctAnswer: 1},
    // {question: "What is a baby Monkey called?",
    // choices: [" infant", " baby", " calf", " pup"],
    // correctAnswer: 0},
    {question: "What is a baby Bear called?",
    choices: [" cub", " baby balu", " young bear", " bearlet"],
    correctAnswer: 0}
];
var currentQuestionNum= 0;
var correctAnswer= 0;
var quizOver= false;

$(document).ready(function(){
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();
    $(this).find(".nextButton").on("click", function(){
        if( !quizOver){
            value= $("input[type='radio']:checked").val();
            if(value == undefined){
                $(document).find(".quizMessage").text("Please select an answer !");
                $(document).find(".quizMessage").show();
            }else{
                $(document).find(".quizMessage").hide();
                if (value == questions[currentQuestionNum].correctAnswer){
                    correctAnswer++;
                }
                currentQuestionNum ++;
                if(currentQuestionNum < questions.length){
                    displayCurrentQuestion();
                }else{
                    displayScore();
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver= true;
                }
            }
        }else{
            resetQuiz();
            quizOver= false;
            $(document).find(".nextButton").text("Next Question");
            displayCurrentQuestion();
        }
    });
});

function displayCurrentQuestion(){
    // console.log("In display current Qustion");
    var question= questions[currentQuestionNum].question;
    var choicesLength= questions[currentQuestionNum].choices.length;
    var choiceList= $(document).find(".choiceList");

    $(document).find(".question").text(question);
    $(choiceList).find("li").remove();

    var choice;
    for (i=0; i < choicesLength; i++){
        choice = questions[currentQuestionNum].choices[i];
        $('<li><input type="radio" value='+ i +' name="dynradio" />'  + choice + '</li>').appendTo(choiceList);

    }
    
}

function displayScore(){
    $(document).find(".result").text("Your score is " + correctAnswer + " out of " + questions.length);
    $(document).find(".result").show();
}

function resetQuiz(){
    currentQuestionNum=0;
    correctAnswer=0;
    hideScore();
}

function hideScore(){
    $(document).find(".result").hide();
}