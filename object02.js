//let user=new Object()//singlrton object
let user={}//non singleton object
user.id='123abs'
user.name='aditya'
user.age=18
// console.log(user);


let user2={
    email:'anand@googel.com',
    fullname:{
        userfullname:{
            fristname:'aditya',
            lastname:'rajoriya'
            }
    }
}

//console.log(user2.fullname.userfullname);

let object1={
    1:'a',
    2:'b',
}

let object2={
    3:'c',
    4:'d',
}

//let onj3=Object.assign({},object1,object2)
let obj3={...object1,...object2}


console.log(user2);

console.log(Object.keys(user2));
console.log(Object.values(user2));