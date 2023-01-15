/*
ro13 is a letter substitution cipher that rotates each char 13 chars to the right in the alphabet
*/

function rot13(text) {
  let transformed = '';
  for (let index = 0; index < text.length; index += 1) {
    transformed += rot13Character(text[index]);
  }

  return transformed;
}

function rot13Character(char) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  let isUpperCase = false;
  let initialIndex = ALPHABET.indexOf(char);

  // no match might mean that we are dealing with an uppercase letter
  if (initialIndex === -1) {
    initialIndex = ALPHABET.indexOf(char.toLowerCase());
    isUpperCase = true;
  }

  // if there is still no match, it's not a character between a-z
  if (initialIndex === -1) {
    return char;
  }

  let shiftedIndex = (initialIndex + 13) % 26;
  let transformed = ALPHABET[shiftedIndex];

  if (isUpperCase) {
    transformed = transformed.toUpperCase();
  }

  return transformed;
}


console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log('-----');
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));