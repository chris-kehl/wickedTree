const person = {
    name: 'Edward',
    nickname: 'Duke',
    city: 'NewYork',
    age: '37',
    isStudent: true,
    skills: ['JavaScript', 'HTML', 'CSS']
};

for ( let prop in person) {
    console.log(`${prop}: ${person[prop]}`);
}

// create persons1 and store objects

const person1 = {
    name: 'Reggie',
    role: 'Software developer',
    skills: ['JavaScript', 'HTML', 'CSS'],
    isTeacher: true

};

// store the keys of the `person' object in person1Prop
const person1Prop = Object.keys(person1);
console.log(Object.keys(person1).length);
console.log(person1Prop);
