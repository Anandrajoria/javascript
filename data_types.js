// let counter = 120; 
// console.log(typeof(counter))
// counter = false;   
// console.log(typeof(counter))
// counter = "foo";
// console.log(typeof(counter))


// important
// let obj =null;
//console.log(typeof obj)
// the typeof null return object is a known bug in javascript a prposal to fix thisd was proposed but rejected the reason was thst fix would break a lot of existing sites


// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)

// let s =Symbol()
// console.log(Symbol() == Symbol()); // false
// it is becaues symbol create a unique value every time


//OBJECT DATA TYPES
// let person={
//     firstname:'aditya',
//     lastname:'rajoriya'
// };
// console.log(person.firstname)

let contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(408)-555-9999',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}
//console.log(contact.address.building)
let a=32;
console.log(a);