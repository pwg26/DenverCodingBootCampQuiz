// pages
var startPage = document.getElementById("start-page");
var q1Page = document.getElementById("q1");
var q2Page = document.getElementById("q2");
var q3Page = document.getElementById("q3");
var q4Page = document.getElementById("q4");
var lastPage = document.getElementById("finish");

// buttons
var startBtn = document.getElementById("start-btn");
var q1Btn = document.getElementById("question1-btn");
var q2Btn = document.getElementById("question2-btn");
var q3Btn = document.getElementById("question3-btn");
var q4Btn = document.getElementById("question4-btn");
var lastBtn = document.getElementById("final-btn");

// choices question1
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

// choices question2
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

// choices question3
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

// choices question4
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

// score
var score = 0;

// timer function
function timer() {}

// moves from starter to qustion 1
startBtn.addEventListener("click", function () {
  q1Page.style.display = "block";
  startPage.style.display = "none";
});

// moves from question 1 to qustion 2
q1Btn.addEventListener("click", function () {
  var q1Corr = q1a3.checked;
  var q1Fal1 = q1a1.checked;
  var q1Fal2 = q1a2.checked;
  var q1Fal3 = q1a3.checked;

  if (!(q1Corr || q1Fal1 || q1Fal2 || q1Fal3)) {
    return;
  }

  if (q1Corr) {
    score++;
  } else {
    score--;
  }

  q1Page.style.display = "none";
  q2Page.style.display = "block";
});

// moves from question 2 to qustion 3
q2Btn.addEventListener("click", function () {
  q2Page.style.display = "none";
  q3Page.style.display = "block";
});

// moves from question 3 to qustion 4
q3Btn.addEventListener("click", function () {
  q3Page.style.display = "none";
  q4Page.style.display = "block";
});

// moves from question 4 to final page
q4Btn.addEventListener("click", function () {
  q4Page.style.display = "none";
  lastPage.style.display = "block";
});

lastBtn.addEventListener("click", function () {
  lastPage.style.display = "none";
  startPage.style.display = "block";
});
