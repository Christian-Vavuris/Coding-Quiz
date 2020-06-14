// to do - 
// style the CSS questions
// 

var startButtonEl = document.getElementById("start-button")

//Need to add a timer
//Need to add Quiz Questions



// This function toggles the hide class onto the Element selected. 
var toggleHide = function (element) {
    console.log("toggleHide is running")
    document.querySelector(element).classList.toggle("hide")
}
// This is testing out the makeItGoAway
// makeItGoAway("h1.quiz-title");




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
    toggleHide("h3"), false
});


// buttonEl.addEventListener("submit", startTimer);