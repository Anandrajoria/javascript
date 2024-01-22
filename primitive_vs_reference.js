let person = {
    name: 'John',
    age: 25,
};

let member = person;

member.age = 26;

console.log(person);
console.log(member);

const a=[1];

const b=[1];
console.log(a===b);