const questions = [
  ["How many faries take care of Sleeping Beauty?", 3],
  ["How many dwarfs are there in the movie Snow White?", 7],
  ["How many sisters does Princess Ariel have?", 6],
  ["How many major princess castles does Disney have in the USA?", 2]
];

function print(message) {
  document.write(message);
}

let correctAnswers = 0;

for (let i = 0; i < questions.length; i += 1) {
  const question = questions[i][0];
  const answer = questions[i][1];
  const response = parseInt(prompt(question));
 
  
  if (response === answer) {
    correctAnswers += 1;
  }
}

const html = "Congrats! " + "You got " + correctAnswers + " question(s) right!";
print(html);


