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
var save = document.getElementById("save-btn");

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

// final page prompts and score
Verdict = document.getElementById("sum-head");
displayedScore = document.getElementById("score");
Fail = document.getElementById("oof");
Pass = document.getElementById("yeah");

// wrong message
var False = document.getElementById("wrong1");
var False2 = document.getElementById("wrong2");
var False3 = document.getElementById("wrong3");
var False4 = document.getElementById("wrong4");

// score(4 total)
var score = 4;

// timer
var displayedTime = document.getElementById("count-down");
var timer;
var time;

// countdown function
function startTime() {
  var timer = setInterval(function () {
    time--;
    displayedTime.textContent = time;
    if (time === 0) {
      clearInterval(timer);
      q1Page.style.display = "none";
      q2Page.style.display = "none";
      q3Page.style.display = "none";
      q4Page.style.display = "none";
      lastPage.style.display = "block";
      Verdict.innerText = "Epic Fail";
      Fail.style.display = "block";
      displayedTime.style.display = "none";
      score = 0;
    }
    return timer;
  }, 1000);
}

//  function that writes score
function writescore() {
  if (score > 2) {
    Verdict.innerText = "Great Success";
    Pass.style.display = "block";
  } else {
    Verdict.innerText = "Epic Fail";
    Fail.style.display = "block";
  }
  document.getElementById("score").innerText =
    "Your Score: " + String((score / 4) * 100) + "%";
}

// function saves score in local storage

// function that displays wrong if question is incorrect
function wrong(x) {
  x.style.display = "block";
  setTimeout(function () {
    x.style.display = "none";
  }, 700);
}

// moves from starter to qustion 1 and starts timer
startBtn.addEventListener("click", function () {
  time = 60;
  startTime();
  displayedTime.style.display = "inline-block";
  q1Page.style.display = "block";
  startPage.style.display = "none";
});

// moves from question 1 to qustion 2
q1Btn.addEventListener("click", function () {
  displayedTime.style.display = "incline-block";
  var Cor1 = q1a1.checked;
  var Fal1 = q1a3.checked;
  var Fal2 = q1a2.checked;
  var Fal3 = q1a4.checked;

  // makes sure at least one section is made
  if (!(Cor1 || Fal1 || Fal2 || Fal3)) {
    return;
  }

  // makes sure corrct answer does not subtract from possible points and that there can only be one deduction
  if (!Cor1) {
    score = score - 1;
    wrong(False);
    time = time - 10;
  }

  q1Page.style.display = "none";
  q2Page.style.display = "block";
});

// moves from question 2 to qustion 3
q2Btn.addEventListener("click", function () {
  var Cor1 = q2a4.checked;
  var Cor2 = q2a3.checked;
  var Fal1 = q2a1.checked;
  var Fal2 = q2a2.checked;

  if (!(Cor1 || Cor2 || Fal1 || Fal2)) {
    return;
  }

  if (!(Cor1 && Cor2)) {
    score = score - 1;
    wrong(False2);
    time = time - 10;
  }

  q2Page.style.display = "none";
  q3Page.style.display = "block";
});

// moves from question 3 to qustion 4
q3Btn.addEventListener("click", function () {
  var Cor1 = q3a1.checked;
  var Fal1 = q3a4.checked;
  var Fal2 = q3a2.checked;
  var Fal3 = q3a3.checked;

  if (!(Cor1 || Fal3 || Fal1 || Fal2)) {
    return;
  }

  if (!Cor1) {
    score = score - 1;
    wrong(False3);
    time = time - 10;
  }

  q3Page.style.display = "none";
  q4Page.style.display = "block";
});

// moves from question 4 to final page
q4Btn.addEventListener("click", function () {
  displayedTime.style.display = "none";
  var Cor1 = q4a4.checked;
  var Cor2 = q4a1.checked;
  var Cor3 = q4a2.checked;
  var Cor4 = q4a3.checked;

  if (!(Cor1 || Cor2 || Cor3 || Cor4)) {
    return;
  }

  if (!(Cor1 && Cor2 && Cor3 && Cor4)) {
    score = -1;
    wrong(False4);
    time = time - 10;
  }

  q4Page.style.display = "none";
  lastPage.style.display = "block";

  clearInterval(timer);

  writescore();
});

// function for storing score in final page
save.addEventListener("click", function () {
  let initials = prompt("Type Your First and last initial");

  localStorage.setItem(toString(initials), String((score / 4) * 100) + "%");
  window.alert(
    "You can access your score by typing localStorage.getItem(Your intials)"
  );

  // unchecks check-boxes
  document.querySelectorAll("check-box").checked = false;

  lastPage.style.display = "none";
  startPage.style.display = "block";
  score = 4;
});
