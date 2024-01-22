let fruits=["mango","banana","apple","orange"]
let element='banana';
let newarray=fruits.filter((items)=>{
    if (items==element) {
        console.log('element found');
    }
})
console.log(newarray);

console.log(fruits.includes('banana'));
// let arr=[]
// for(let element of fruits){
//     if (element==fruits) {
//         arr.push(element)
//     }
// }

// console.log(arr);
