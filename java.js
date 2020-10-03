function getRandomNumber(upper) {
    return Math.floor( Math.random() * upper) + 1;
}

// let counter = 0;
// while ( counter < 1000) {
//     console.log(`The random number is ${getRandomNumber(10)}`)
//     counter += 1;
// }

// let counter = 0;
// do {
//     console.log(`The random number is ${getRandomNumber(10)}`);
//     counter ++;
// } while (counter < 10);

// secret word
const secretWord = 'tomato';
let message = 'Access denied :(';

for ( let i = 5; i >= 1; i--) {
    let guess = prompt(`Enter the secret word. You have ${i} tries.`);
    if (guess === secretWord ) {
        message = 'Welcome to the secret loop world';
    }
}
alert(message);

// ask user their age
let age;
do {
    age = prompt("Are you over 21?");
} while (age != 'yes');

alert("Great your over 21. Welcome!");

do {
    console.log('Hello');
} while (false);
console.log('Goodbye');

while (false) {
    console.log('Hello');
} 
console.log('Goodbye');

alert("view console.log")

// example loop
let counter = 0
while (counter < 10) {
    console.log(counter);
    counter += 1;
}

/* ========================================================
for loop less lines of code only
for the counter we are going to substitute i for counter
i and j are common in for loops, however; you should use 
descriptive names for variable. i and j are ok for counters
=========================================================== */

for ( let i = 0; i < 10; i++) {
console.log(`The random number is ${getRandomNumber(10)}`);
}

// create a for loop that logs the numbers 5 to 100 on the console
for (let i = 5; i < 101; i++) {
    console.log(i)
}
// Dynamically display html with a loop increment 1-100 by 5
const main = document.querySelector('main');
let html = '';
for (i = 5; i < 101; i += 5 ){
    html += `<div>${i}</div>`;
    console.log(html);
} 

main.innerHTML=html;

// secret word
