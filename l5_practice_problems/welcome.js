/*
write a function named greetings
accepts two arguments
  array - 2 or more strings to be combined with spaces to make a full name
  object - two keys - title and occupation - values of strings
log a greeting that uses full name and mentions the title and occupation
*/

function greetings(names, job) {
  let fullName = names.join(' ');
  let fullJob = job.title + ' ' + job.occupation;

  console.log('Hello, ' + fullName + '! Nice to have a ' + fullJob + ' around.');

  // (name, status)
  // let nameGreet = 'Hello, ' + name.join(' ') + '!';
  // let statusGreet = 'Nice to have a ' + status.title + ' ' + status.occupation + ' around.';
  
  // console.log(nameGreet + ' ' + statusGreet);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });
greetings(['Steve', 'Price'], { title: 'Junior', occupation: 'Engineer'});

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.