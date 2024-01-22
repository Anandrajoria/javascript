// let array=[23,35,45,234,235,32,53,532,45,]

// for (let i = 0; i < array.length; i++) {
//     if(array[i]%2==0){
//         even.push(array[i])
//     }
    
// }
// console.log(even);

// let even=array.filter( function(items) {
//     if (items%2==0) {
//         return items;
//     }
// });
let array=[23,35,45,234,235,32,53,532,45,]

// let even=array.filter((items)=>{if(items%2==0)return items})
let even=array.filter((items)=>(items%2==0 ? items:undefined))
console.log(even);