let array=[1,2,3,4,5,6,7,8,9]
let evenindexarray=[]
for (let i = 0; i < array.length; i++) {
    if (array[i]%2==0) {
        evenindexarray.push(array[i])
    }
    
}
console.log(evenindexarray);

// let evenindexarray=array.filter(function(items){
//     if (items[i]%2==0) {
//         return items[i]
//     }
// })
// console.log(evenindexarray);