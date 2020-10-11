const person = {
    name: 'Edward',
    city: 'New York',
    age: 37,
    isStudent: true,
    skills: ['JavaScript', 'HTML', 'CSS']
};

person.nickname = "Duke";
person.name = "Lizzy";

const message = `Hi, I'm ${person.name}, I live in ${person.city} most know me as ${person.nickname}. My 
age is ${person.age + 5}. I have ${person.skills.length} skills. My skills are ${person.skills.join(', ').}`;

console.log(message)
