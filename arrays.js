/*
write a function named push
accepts two arguments
  array
  any value
append the second argument to the end of the array
return the new length of the array
*/

const push = (array, value) => {
  array[array.length] = value;
  return array.length;
}

console.log('Push');
let countPush = [0, 1, 2];
console.log(push(countPush, 3));         // 4
console.log(countPush);                  // [ 0, 1, 2, 3 ]

/*
write a function named pop
accepts one argument
  array
remove the last element from the array
return the removed element
*/

const pop = (array) => {
  if (array.length === 0) {
    return undefined;
  }

  let newLength = array.length - 1;
  let last = array[newLength];
  array.length = newLength;
  return last;
}

console.log('Pop');
let countPop = [1, 2, 3];
console.log(pop(countPop));             // 3
console.log(countPop);                  // [ 1, 2 ]

/*
write a function named unshift
accepts two arguments
  array
  value
insert value at beginning of array
return new length of the array
*/

const unshift = (array, value) => {
  for (let index = array.length; index > 0; index--) {
    array[index] = array[index - 1];
  }

  array[0] = value;
  return array.length;
}

console.log('Unshift');
let countUnshift = [1, 2, 3];
console.log(unshift(countUnshift, 0));      // 4
console.log(countUnshift);                  // [ 0, 1, 2, 3 ]

/*
write a function named shift
accepts one argument
  array
remove the first value from the beginning of the array
return the removed value
*/

const shift = (array) => {
  first = array[0];

  if (array.length === 0) {
    return undefined;
  }

  for (let index = 0; index < array.length - 1; index++) {
    array[index] = array[index + 1];
  }

  array.length = array.length - 1;
  return first;
}

console.log('Shift');
let countShift = [1, 2, 3];
console.log(shift(countShift));           // 1
console.log(countShift);                  // [ 2, 3 ]

/*
write a function named indexOf
accepts two arguments
  array
  value
return the first index which the value can be found, -1 if not present
*/

const indexOf = (array, value) => {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === value) {
      return index;
    }
  }

  return -1;
}

console.log('Index Of');
console.log(indexOf([1, 2, 3, 3], 3));         // 2
console.log(indexOf([1, 2, 3], 4));            // -1

/*
write a function named lastIndexOf
accepts two arguments
  array
  value
return the last index at which the value can be found, -1 if not present
*/

const lastIndexOf = (array, value) => {
  for (let index = array.length - 1; index >= 0; index--) {
    if (array[index] === value) {
      return index;
    }
  }

  return -1;
}

console.log('Last Index Of');
console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1

/*
write a function named slice
accepts 3 arguments
  array
  start index
  end index
function returns new array containing values from original array starting with value at starting index including all values up to NOT including end index
do not modify original array
*/

function slice(array, startIdx, endIdx) {
  let newArray = [];

  for (let index = startIdx; index < endIdx; index++) {
    push(newArray, array[index]);
  }

  return newArray;
}

console.log('Slice');
console.log(slice([1, 2, 3, 4, 5], 0, 2));                     // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3)); // [ 'b', 'c' ]

/*
write a function named splice
accepts three arguments
  array
  start index
  number of values to remove
remove values from the original array starting with the start index removing the specified number of values
return the removed values in a new array
*/

function splice(array, startIdx, number) {
  let removedValues = [];

  for (let index = startIdx; index < array.length; index++) {
    if (index < startIdx + number) {
      push(removedValues, array[index]);
    }

    array[index] = array[index + number];
  }

  array.length = array.length - removedValues.length;
  return removedValues;
}

console.log('Splice');
let countSplice = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(countSplice, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(countSplice);                                 // [ 1, 2, 8 ]

/*
write a function named concat
accepts two arguments
  array
  array
return a new array that contains the values from each original array
*/

function concat(arr1, arr2) {
  let newArray = [];

  for (let index = 0; index < arr1.length; index++) {
    push(newArray, arr1[index]);
  }

  for (let index = 0; index < arr2.length; index++) {
    push(newArray, arr2[index]);
  }

  return newArray;
}

console.log('Concat');
console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]

/*
write a function named join
accepts two arguments
  array
  string
coerce each value in the array to a string then join those values together using the second argument as a separator
return the new string
*/

function join(array, separator) {
  let newString = '';

  for (let index = 0; index < array.length; index += 1) {
    newString += String(array[index]);

    if (index < array.length - 1) {
      newString += separator;
    }
  }

  return newString;
}

console.log('Join');
console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'

/*
write a function named arraysEqual
accepts two arguments
  array
  array
return true if the arrays contain the same values
*/

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let index = 0; index < arr1.length; index++) {
    if (arr1[index] !== arr2[index]) {
      return false;
    }
  }

  return true;
}

console.log('Arrays Equal');
console.log(arraysEqual([1], [1]));                               // true
console.log(arraysEqual([1], [2]));                               // false
console.log(arraysEqual([1, 2], [1, 2, 3]));                      // false
console.log(arraysEqual([1, 'hi', true], [1, 'hi', true]));       // true
console.log(arraysEqual([1, 'hi', true], [1, 'hi', false]));      // false
console.log(arraysEqual([1, 'hi', true], [1, 'hello', true]));    // false
console.log(arraysEqual([1, 'hi', true], [2, 'hi', true]));       // false

/*
write a function named sortDescending
accepts one argument
  array of numbers
returns new array of numbers sorted in desc order
do not alter original array
*/

const sortDescending = (arr) => {
  let arrCopy = arr.slice();
  return arrCopy.sort((a, b) => b - a);
}

let array = [23, 4, 16, 42, 8, 15];
let result = sortDescending(array);
console.log(result);
console.log(array);

/*
write a function named matrixSums
accepts one argument
  array of arrays of numbers
return new array containing sums of each sub array
*/

function matrixSums(arr) {
  let sums = [];

  for (let arrIndex = 0; arrIndex < arr.length; arrIndex++) {
    let total = 0;
    let subArr = arr[arrIndex];

    for (let subIndex = 0; subIndex < subArr.length; subIndex++) {
      total += subArr[subIndex];
    }

    sums.push(total);
  }

  return sums;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]

/*
write a function named uniqueElements
accepts one argument
  array of numbers
return a new array with duplicate elements removed
*/

function uniqueElements(arr) {
  let noDuplicates = [];

  for (let index = 0; index < arr.length; index++) {
    let currentNumber = arr[index];
    let unique = true;

    for (let i = 0; i < noDuplicates.length; i++) {
      if (index === i) {
        continue;
      }
      else if (currentNumber === noDuplicates[i]) {
        unique = false;
      }
    }

    if (unique) {
      noDuplicates.push(currentNumber);
    }
  }

  return noDuplicates;
}

/*
LS Solution
function uniqueElements(arr) {
  let uniques = [];
  let len = arr.length;

  for (let index = 0; index < len; index += 1) {
    if (uniques.indexOf(arr[index]) === -1) {
      uniques.push(arr[index]);
    }
  }

  return uniques;
}
*/

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]

/*
function selects numbers that only appear once
function uniqueElements(arr) {
  let noDuplicates = [];

  for (let index = 0; index < arr.length; index++) {
    let currentNumber = arr[index];
    let unique = true;

    for (let i = 0; i < arr.length; i++) {
      if (index === i) {
        continue;
      }
      else if (currentNumber === arr[i]) {
        unique = false;
      }
    }

    if (unique) {
      noDuplicates.push(currentNumber);
    }
  }

  return noDuplicates;
}
*/

/*
write a function named missing
accepts one argument
  array of numbers sorted
return new array that includes all missing integers in order between first and last elements of the argument
*/

function missing(arr) {
  let missingNumbers = [];
  let len = arr.length;
  let first = arr[0];
  let last = arr[len - 1];

  for (let num = first + 1 ; num < last; num++) {
    if (arr.indexOf(num) === -1) {
      missingNumbers.push(num);
    }
  }

  return missingNumbers;
}

console.log('Missing');
console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []