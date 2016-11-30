console.log("security_questions.js loaded");
console.log("security_questions.js loaded");

var securityQuestions = [
  {question: "Where are you from?", expectedAnswer: "New Jersey"},
  {question2: "Do you have any pets", expectedAnswer2: "No"},
  {question3: "Where do you live now?", expectedAnswer3: "San Francisco"}
];

var answer = prompt(securityQuestions["question"]);

if (answer !== securityQuestions.expectedAnswer) {
  var nextAnswer = prompt(securityQuestions["question2"]);
} else if (nextAnswer !== securityQuestions.expectedAnswer2) {
  var lastAnswer = prompt(securityQuestions["question3"]);
} else {
  return "That is correct";
}
