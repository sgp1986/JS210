/*
write a function that takes a number argument and returns true if the number is prime and false if not
assume the num is always non negative integer

prime - number 2 or greater that has no divisors other than 1 and itself
algo
  loop from 2 to 1 less than number
  if number % increment === 0 stop loop and return false, else increase
*/

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let increment = 2; increment < number; increment++) {
    if (number % increment === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false