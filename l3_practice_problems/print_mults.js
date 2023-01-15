/*
write a function logMultiples that takes an argument number
it should log all multiples of the argument between 0 and 100 inclusive that are also odd numbers
log values in descending order
assume number is between 0 and 100
*/

function logMultiples(number) {
  for (let currentNumber = 99; currentNumber >= number; currentNumber -= 2) {
    if (currentNumber % number === 0) {
      console.log(currentNumber);
    }
  }
}

logMultiples(17);
console.log('---')
logMultiples(21);