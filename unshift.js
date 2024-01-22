let a=[1,2,3,4]
let b=[9,8,7]
// for(let no of b){
//     a.unshift(no)
// }

a.unshift(...b)
console.log(a);