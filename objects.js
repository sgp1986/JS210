/*
write a function named objectHasProperty
accepts two arguments
  object
  string
return true if the object contains a property with the name of the string
*/

function objectHasProperty(obj, str) {
  for (let prop in obj) {
    if (prop === str) {
      return true;
    }
  }

  return false;
}

/*
LS Solution
function objectHasProperty(object, propertyName) {
  let keys = Object.keys(object);
  return keys.indexOf(propertyName) !== -1;
}
*/

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

console.log('--Obj has Prop--');
console.log(objectHasProperty(pets, 'dog'));       // true
console.log(objectHasProperty(pets, 'lizard'));    // false
console.log(objectHasProperty(pets, 'mice'));      // true

/*
write a function named incrementProperty
accepts two arguments
  object
  string
if the object contains a property with the specified name, increment the value of that property
if it does not exist, add a new property with the specified name with a value of 1
return the new value of the property
*/

let incrementProperty = function (obj, str) {
  if (objectHasProperty(obj, str)) {
    obj[str] += 1;
  } else {
    obj[str] = 1;
  }
  
  return obj[str];
}

let wins = {
  steve: 3,
  susie: 4,
};

console.log('--Increment--');
console.log(incrementProperty(wins, 'steve'));   // 4
console.log(wins);                               // { steve: 4, susie: 4 }
console.log(incrementProperty(wins, 'lucy'));    // 1
console.log(wins);                      // { steve: 4, susie: 4, lucy: 1 }

/*
write a function named copyProperties
accepts two arguments
  object
  object
copy all properties from the first object to the second
return the number of properties copied
*/

const copyProperties = (obj1, obj2) => {
  let count = 0;
  for (let prop in obj1) {
    if (objectHasProperty(obj2, prop)) {
      continue;
    } else {
      obj2[prop] = obj1[prop];
      count += 1;
    }
  }
  return count;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = { model: 5000 };

console.log('Copies');
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }

/*
write a function named wordCount
accepts one argument
  string
return an object that contains the counts of each word that appears in the provided string
use the words as keys and the counts as values
*/

function wordCount(string) {
  let words = string.split(' ');
  let counts = {};

  for (let index = 0; index < words.length; index++) {
    let word = words[index];
    incrementProperty(counts, word);
  }

  return counts;
}

console.log('Word Count');
console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }





