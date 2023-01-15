/*
write a function that takes a positive integer as an argument and logs all odd numbers from 1 to the passed number - inclusive
all numbers should be logged on separate lines
*/

function logOddNumbers(num) {
  for (let currentNum = 1; currentNum <= num; currentNum += 2) {
    console.log(currentNum);
  }
}

logOddNumbers(19);