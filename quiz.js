// to do - 
// Populate the quiz questions
// Get the timer working
// Add Local Storage and populate the high score page 

var startButtonEl = document.getElementById("start-button")
var startPageEl = document.getElementById("question-block")
var buttonOneEl = document.getElementById("button-1")
var buttonTwoEl = document.getElementById("button-2")
var buttonThreeEl = document.getElementById("button-3")
var buttonFourEl = document.getElementById("button-4")
var inputNameEl = document.getElementById("submit-score")

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

// This function starts the clock at 60 and counts down one each time it is run.  It also only runs once a minute. It isn't wokring yet.

var countDown = function () {
    var clock = 60;
    clock = clock - 1;
    setInterval(countDown, 1000);
    return clock;
};

//This function runs CountDown as long as the for loop is running

var activeTimer = function () {
    for (i = 0; i < 60; i++) {
    countDown()
    }
}

console.log(countDown());

document.getElementById("timer").innerHTML = "Time Remaining: " + countDown();


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
   

// This sets up the first question. 

startButtonEl.addEventListener("click", function () {
    console.log(clickHandler());
    document.getElementById("question-text").innerHTML = questions[0];
    document.getElementById("button-1").innerHTML = choices[0];
    document.getElementById("button-2").innerHTML = choices[1];
    document.getElementById("button-3").innerHTML = choices[2];
    document.getElementById("button-4").innerHTML = choices[3];
});

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


// This function defines the question that gets passed into the HTML 



// This increases the counter each time the correct answer is selected 



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



// buttonEl.addEventListener("submit", startTimer);