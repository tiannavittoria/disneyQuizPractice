# disneyQuizPractice

Hi! Welcome to my Disney Quiz Practice Repo!
I am self-taught through various sources such as Team Treehouse & Youtube Videos.
Area of Focus: Front-End Development
This is a practice challenge from Team Treehouse's lesson on Javascript Loops, Arrays & Objects.

In this repo, I am practicing the following:
1. JavaScript Basics including Loops & Two-Dimensional Arrays
2. Creating a local repository in Git
3. Uploading my local repository to GitHub.

What did I learn:
1. My confidence with Git & Github grows with each commit & upload. 
2. I can almost complete git tasks without looking at a cheat sheet!
3. The variable correctAnswer in my conditional if statement gave me some issues.

if (response === answer) {
    correctAnswers += 1;
  }
}

 html = "Congrats! " + "You got " + correctAnswers + " question(s) right!";
print(html); 

correctAnswers returned NaN when printed. Took me awhile to trouble shoot this. 
What finally got my code to work was this:

var correctAnswers = 0;

Since the variable correctAnswers was returning a NaN I figured the variable was returing a string intead of a number. 
Therefore, I decided the variable had to be defined as a number inorder for the code to increment and print out 
with a number in place of correctAnswers. When I declared the variable with the number 0; the code ran correcty.
It no longer produced NaN. It now it returned the number of correct answers the user inputed.

Try my code and see if it works for you!

Thank you for joining me on my coding journey.
  
