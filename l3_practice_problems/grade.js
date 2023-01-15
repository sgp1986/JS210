/*
write a program to determine a students grade based on the average of 3 scores from the user
- if the average score is 90+ then the grade is A
- if 70-89 the grade is B
- if 50 - 69 the grade is C
- lower than 50 is F
assume all input values are valid positive integers
ex
// prompts to get the 3 scores
Enter score 1: 90
Enter score 2: 50
Enter score 3: 78

// log to the console
Based on the average of your 3 scores your letter grade is "B".
*/

function getScores() {
  let score1 = prompt('Enter score 1:');
  let score2 = prompt('Enter score 2:');
  let score3 = prompt('Enter score 3:');

  return [Number(score1), Number(score2), Number(score3)]
}

let scores = getScores();

function displayAverageScores(scores) {
  let average;
  function findAverage(scores) {
    let total = 0;
    for (let idx = 0; idx < scores.length; idx++) {
      total += scores[idx];
    }
    console.log(total);
    return total / scores.length;
  }

  average = findAverage(scores);

  let score;
  if (average >= 90) {
    score = 'A';
  } else if (average > 70) {
    score = 'B';
  } else if (average > 50) {
    score = 'C';
  } else {
    score = 'F';
  }

  console.log('Based on the average of your 3 scores your letter grade is "' + score + '".');
}

// displayAverageScores([90, 50, 78]);
// displayAverageScores([99, 98, 95]);
displayAverageScores(scores);