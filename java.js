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

let secret;
do {
    secret = prompt("Are you over 21?");
} while (secret != 'yes');

alert("Great your over 21. Welcome!");