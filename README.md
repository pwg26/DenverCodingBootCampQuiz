# DenverCodingBootCampQuiz
Introduction:
This repository contains a quiz to test users' understanding of basic web development questions pertaining to local storage, CSS elements, and APIs. It’s a fairly simple multiple choice assessment that prompted the user a series of questions utilizing buttons to navigate through. A score is stored and interactive events will occur depending on how well the user performs.

Motivation:
Bootcamps are exploding in popularity around the nation. Many of which are entirely online. If a student wants to get a job, it is vital that they keep up with their knowledge by assessing themselves through activity. A quiz is a great way to test this

Development:
For this project I used pop-up or prompt windows to guide the user from question to question to question via buttons. The first step was to lay out my HTML and create containers for my content which were styled and assigned variables which were expressed in the DOM.

<img src=https://github.com/pwg26/DenverCodingBootCampQuiz/blob/main/Images/score.png>

The next step was to make sure that the user answers were registered as correct or false via checkboxes and that a scoring was given depending if they answered correctly through a function. It was also important that the user made a selection before moving on which was also accounted for. Another criteria was to set a timer that the user had to finish the quiz in and also have deductions to the timer if the user answered incorrectly.  
 
 <img src=https://github.com/pwg26/DenverCodingBootCampQuiz/blob/main/Images/timer.png>
 
Lastly window prompts and alerts were used to assign the users score to a object-key pair in local storage

<img src=https://github.com/pwg26/DenverCodingBootCampQuiz/blob/main/Images/localstorage.png>

Usage:
This Intuitive quiz is utilized entirely through buttons and checkboxes. When it starts from the homepage, a one minute timer initiates for the user to finish the entire assessment. If the user cannot finish before the time runs out they fail. If the user scores lower than 50%, they fail. If the user answers a question incorrectly, 10 seconds is deducted from the time. After the quiz is finished - pass or fail, the user has the option to save their score in local storage which can be accessed from the terminal.

<img src=https://github.com/pwg26/DenverCodingBootCampQuiz/blob/main/Images/page.png>

Forward:
I’m sure a more efficient way can be used via multiple object key pairs to interchange questions for a single container rather than having to make multiple different ones. I will if I can implement this on my next quiz.
