var questions = [
  ["How many faries take care of Sleeping Beauty?", 3],
  ["How many dwarfs are there in the movie Snow White?", 7],
  ["How many sisters does Princess Ariel have?", 6]
];

var question;
var answer;
var response;
var html;
var correctAnswers = 0;

function print(message) {
  document.write(message);
}

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = parseInt(prompt(question));
  
  if (response === answer) {
    correctAnswers += 1;
  }
}
  
html = "Congrats! " + "You got " + correctAnswers + " question(s) right!";
print(html);
