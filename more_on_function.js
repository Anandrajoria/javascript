//local variable
// function say(greet){
//     let name='aditya';
//     return greet +name;
// }
// console.log(say('hii '))
//console.log(name)

// function checkage(age){
//     if(age>=18){
//         return 'assess grunted'
//     }return 'assess denied'
// }
// function checkage(age){
//     return (age>=19)? true:console.log('did parents allow you')? false:console.log('assess denied');
// }
// console.log(checkage(9))


// function min(a,b){
//     if(a>b){
//         return a;
//     }return b;
// }
// console.log(min(2,4))


function pow(x,n){
    let result=x**n;
    return result;
}
let x=10;
let n=-1;
if (n<1) {
    console.log('give positve integer');
}else{
    console.log(pow(x,n))
}