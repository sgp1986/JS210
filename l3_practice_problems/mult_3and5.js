/*
write a function that logs the integers from 1 to 100 inclusive that are multiples of either 3 or 5 - append ! to the end if divisible by both
*/

function multiplesOfThreeAndFive() {
  for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log(String(num) + '!');
    } else if (num % 3 === 0 || num % 5 === 0) {
      console.log(String(num));
    }    
  }
}

multiplesOfThreeAndFive();