let array=['aditya','anand','khushi','monu','krishna']


//using normal

// let letter=[]
// for (let i = 0; i < array.length; i++) {
//     if (array[i].length > 4) {
//         letter.push(array[i]);
//     }
    
// }
// console.log(letter);


// using filter

// let letter=array.filter( function(items) {
//     if (items.length>4) {
//         return items
//     }
// });

//let letter=array.filter((items)=>{if(items.length>4) return items})

let letter=array.filter((items)=>items.length>4)

console.log(letter);