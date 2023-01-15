/*
xor - exclusive or - only one is truthy
write a function isXor that takes two arguments and returns true if exactly one argument is true, and false otherwise
should work with boolean values of true and false, but any js value based on their truthiness
*/

function isXor(first, second) {
  if ((first && !second) || (second && !first)) {
    return true;
  }

  return false;
}

console.log(isXor(false, true));     // true
console.log(isXor(true, false));     // true
console.log(isXor(false, false));    // false
console.log(isXor(true, true));      // false


console.log(isXor(false, 3));        // true
console.log(isXor('a', undefined));  // true
console.log(isXor(null, ''));        // false
console.log(isXor('2', 23));         // false