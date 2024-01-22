let array=[1,2,3,4,5,6]
let double=array.map( function(items){
    items=items+items
    return items
})
console.log(double);