/*Simple Array Creation:
Write a function that takes three arguments and uses 
Array.of to create a new array with those elements. */
function fromarrayof(element1,element2,element3){
    return Array.of(element1,element2,element3)
}
//console.log(fromarrayof('sd','asd','sdf'));


// custom array.of function

function custom(...args){
    return Array.of(args).flat()
}
console.log(custom(1,2,3,'234',true));