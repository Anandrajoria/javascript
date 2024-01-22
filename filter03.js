let person=[
    person1={
        name:'aditya',
        age:19
    },
    person2={
        name:'karan',
        age:21
    },
    person3={
        name:'kana',
        age:25
    },
    person4={
        name:'khushi',
        age:22
    }
    
];

//using simple method

// let newperson=[]
// for (let i = 0; i < person.length; i++) {
//     if (person[i].age>20) {
//         newperson.push(person[i])}
//     }
// console.log(newperson);


// //using filter
// let newperson=person.filter(function(items){
//     if (items.age>20) {
//         return items
//     }
// })


//using arrow function
let newperson=person.filter((items)=>items.age>20?true:false)
console.log(newperson);