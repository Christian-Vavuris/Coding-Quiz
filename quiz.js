// to do - 
// Add Local Storage and populate the high score page :How tho??:

var startButtonEl = document.getElementById("start-button")
var startPageEl = document.getElementById("question-block")
var buttonOneEl = document.getElementById("button-1")
var buttonTwoEl = document.getElementById("button-2")
var buttonThreeEl = document.getElementById("button-3")
var buttonFourEl = document.getElementById("button-4")
var addHighscoreEl = document.getElementById("add-highscore")
var TimerEl = document.getElementById("timer")

// this measures the number of correct clicks
function clickHandler() {
    clickHandler.counter++;
    return clickHandler.counter;
}
clickHandler.counter = 0;


// This function toggles the hide class onto the Element selected. 
var toggleHide = function (element) {
    console.log("toggleHide is running")
    document.getElementById(element).classList.toggle("hide")
}

// Calling this function starts the timer

function timerCounter() {
    var i = 60;
    // This block will be executed 60 times.
    setInterval(function(){
        if (i == 0)  clearInterval(this);
        else console.log( (i--) );
        document.getElementById("timer").innerHTML = ("Time Remaining: " + i);
        return i; 
    }, 1000);
}

// How do I stop this and pull out the i once they get to the end screen?


// This calls the toggleHide function when the startButtonEl is clicked.
startButtonEl.addEventListener("click", function() {
    toggleHide("opening-page"), false
});

startButtonEl.addEventListener("click", function() {
    toggleHide("question-block"), false
    }
);

var displayEndPage = function () {
    toggleHide("question-block"), false
    toggleHide("end-page"), false
}

var goToHighscores = function () {
    console.log("go to high scores is running");
    window.location = "HighScores.HTML"
}

var addToMemory = function(){
    document.getElementById("submit-score");
    localStorage.setItem("High Score Name", input.val());
}


// This advances the quiz whent the user clicks the correct answer.  It also 

var setQuestion = function () {

    if (clickHandler.counter == 1) {
        console.log(clickHandler());
        document.getElementById("question-text").innerHTML = questions[1];
        document.getElementById("button-1").innerHTML = choices[4];
        document.getElementById("button-2").innerHTML = choices[5];
        document.getElementById("button-3").innerHTML = choices[6];
        document.getElementById("button-4").innerHTML = choices[7];
        alert("Correct! The answer is " + answers[0])
    }
    else if (clickHandler.counter == 2) {
        console.log(clickHandler());
        document.getElementById("question-text").innerHTML = questions[2];
        document.getElementById("button-1").innerHTML = choices[8];
        document.getElementById("button-2").innerHTML = choices[9];
        document.getElementById("button-3").innerHTML = choices[10];
        document.getElementById("button-4").innerHTML = choices[11];
        alert("Correct! The answer is " + answers[1])
    }
    else if (clickHandler.counter == 3) {
        alert("Correct! The answer is " + answers[2])
        console.log(clickHandler());
        document.getElementById("question-text").innerHTML = questions[3];
        document.getElementById("button-1").innerHTML = choices[12];
        document.getElementById("button-2").innerHTML = choices[13];
        document.getElementById("button-3").innerHTML = choices[14];
        document.getElementById("button-4").innerHTML = choices[15];
    }
    else if (clickHandler.counter == 4) {
        alert("Correct! The answer is " + answers[3])
        console.log(clickHandler());
        displayEndPage();
    }
    else {
        displayEndPage()
        console.log(clickHandler());
    }
};


// These are the Event Listeners

// This sets up the first question. 

startButtonEl.addEventListener("click", function () {
    console.log(clickHandler());
    document.getElementById("question-text").innerHTML = questions[0];
    document.getElementById("button-1").innerHTML = choices[0];
    document.getElementById("button-2").innerHTML = choices[1];
    document.getElementById("button-3").innerHTML = choices[2];
    document.getElementById("button-4").innerHTML = choices[3];
    timerCounter();
});

buttonOneEl.addEventListener("click", function() {
    alert("Incorrect, please try again.")
})
buttonTwoEl.addEventListener("click", function() {
    alert("Incorrect, please try again")
})

buttonThreeEl.addEventListener("click", function() {
    setQuestion(); 
});

buttonFourEl.addEventListener("click", function() {
    alert("Incorrect, please try again")
})

addHighscoreEl.addEventListener("click", function() {
    goToHighscores()
});
