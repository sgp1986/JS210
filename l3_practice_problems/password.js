/*
write a password guessing program that tracks how many times the user enters the wrong password
if the user enters the wrong password 3 times log you have been denied access and terminate the program
if the password is correct log you have successfully logged in and end the program
*/

const PASSWORD = 'password';
let failedAttempts = 0;

while (true) {
  let guess = prompt('What is the password:');

  if (guess === PASSWORD) {
    console.log('You have successfully logged in.');
    break;
  }

  failedAttempts += 1;

  if (failedAttempts === 3) {
    console.log('You have been denied access.');
    break;
  }
}