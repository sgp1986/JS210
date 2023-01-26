/*
write a function named repeatedCharacters
accepts one argument
  string
return a n object that contains a count of the repeated characters
*/

function repeatedCharacters(str) {
  let letterCounts = {};
  let repeatedCounts = {};

  for (let index = 0; index < str.length; index++) {
    let currentLetter = str[index].toLowerCase();
    if (letterCounts[currentLetter]) {
      letterCounts[currentLetter] += 1;
    } else {
      letterCounts[currentLetter] = 1;
    }
  }

  for (letter in letterCounts) {
    if (letterCounts[letter] > 1) {
      repeatedCounts[letter] = letterCounts[letter];
    }

    // if (letterCounts[letter] === 1) {
    //   delete letterCounts[letter];
    // }
    // return letterCounts;
  }

  return repeatedCounts;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }