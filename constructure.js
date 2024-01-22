

// constructor
// function Person(firstname,lastname){
//     this.firstname=firstname;
//     this.lastname=lastname;
//     this.getFullName = function () {
//         return this.firstName + " " + this.lastName;
//     };
    
// }

// let person1= new Person('aditya','rajoriya')
// console.log(person1);

// // let person2=new Person('krishna','rajoriya')
// console.log(person1.firstName);
// // console.log(person2);

// person1.fullname=function(){
//     return this.firstname+ ' '+this.lastname;
// }

// console.log(person1.fullname());

// function Person(name) {
//     this.name = name;
//   }  
//   // Using the constructor function with 'new'
//   const person1 = new Person("Alice");
//   console.log(person1.name); // Outputs "Alice"
  
//   // Using the constructor function without 'new'
//   const person2 = Person("Bob"); // This will not create a new object
//   console.log(person2); // Outputs 'undefined'
//   console.log(name); // Outputs "Bob" (modifies global variable)
  



// function Person(firstName, lastName) {
//     if (!new.target) {
        
//         return firstName+' '+lastName
//     }

//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// let person=Person('aditya','rajoriya')

// console.log(person);

// function Person(firstName, lastName) {
//     if (!new.target) {
//         return new Person(firstName, lastName);
//     }

//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// let person = Person("John", "Doe");

// console.log(person.firstName);