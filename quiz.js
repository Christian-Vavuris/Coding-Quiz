// to do - 
// style the CSS questions
// 

var startButtonEl = document.getElementById("start-button")
var startPageEl = document.getElementById("question-block")


//Need to add a timer



// This function toggles the hide class onto the Element selected. 
var toggleHide = function (element) {
    console.log("toggleHide is running")
    document.getElementById(element).classList.toggle("hide")
}

var toggleHideClass = function (element) {
    console.log("toggleHideClass is running")
        document.getElementById(element).classList.toggle("hide")
}


// This function starts the clock at 60 and counts down one each time it is run.  It also only runs once a minute. It isn't wokring yet.

var countDown = function () {
    var clock = 60;
    clock = clock - 1;
    setInterval(countDown, 1000);
    return clock;
};

var populateNextQuestion = function () {
    let timer = 1;
    console.lof(but)
}

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
    toggleHideClass("question-block"), false
    }
);


// buttonEl.addEventListener("submit", startTimer);