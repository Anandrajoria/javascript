// // strings
// // strings are immutable
// let name='krishna';
// console.log(name.length);// fro length//7
// //Note that JavaScript has the String type (with the letter S in uppercase), which is the primitive wrapper type of the primitive string type. Therefore, you can access all properties and methods of the String type from a primitive string.
// console.log(name[3]);//s
// console.log(name[name.length-1]);//for accessing the last character

// let className = 'btn';//if you want to add element in string use += operator

// className += ' btn-primary'
// className += ' none';
// console.log(className);


// //Converting values to string
// let a=12341;
// console.log(String(a));
// console.log(typeof a.toString());


// let name1 = 'John';
// let message = `Hi, I'm ${name1}.`;

// console.log(message);


// objects
let a={
    name:'aditya',
    clg:'AIET',
    batch:'A',
    section:'A1',
    roll_no:'EAICS023',
    course:'computer science',
    address:{
        contry:'bharat',
        state:'rajasthan',
        districe:'jaipur',
        street:'A-21,benad road'
    }
};


//console.log(a.address.state);
//console.log(a['address']);
// a.address.contry='india';
// console.log(a.address.contry);
a.age=19;
console.log(a);

delete a.address.contry;
console.log(a);