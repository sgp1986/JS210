/*
write a function that iterates over the integers from 1 to 100 inclusively
for multiples of 3 log Fizz to console
for multiples of 5 log Buzz to console
for multiples of both log FizzBuzz to console
for all other numbers log number to console
*/

const fizzbuzz = function() {
  for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log('FizzBuzz');
    } else if (num % 3 === 0) {
      console.log('Fizz');
    } else if (num % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(num);
    }
  }
}

fizzbuzz();