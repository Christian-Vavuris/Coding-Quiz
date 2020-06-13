var buttonEl = document.querySelector("#startButton")

//Need to add a timer
//Need to add Quiz Questions



// This function makes things go away
var makeItGoAway = function (element) {
    console.log("makeItGoAway is running")
    document.querySelector(element).classList.add("hide")
}
// This is testing out the makeItGoAway
// makeItGoAway("h1.quiz-title");

var toggleTheHideFunction = function (selector, className) {
    console.log("toggling classes");
}



// This function starts the clock at 60 and counts down one each time it is run.  It also only runs once a minute.

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




// buttonEl.addEventListener("submit", startTimer);