/*Flatten with Filter:
Given the array [[1, 2, 3], [4, 5, 6], [7, 8, 9]], use 
the flat method and filter 
method to create a new array containing only even numbers. */



let array=[[1,2,3],[4,5,6],[7,8,9]];
function letflat(arr){
    let newarray=arr.flat(Infinity);
    let double=newarray.map((item)=>item*2);
    return double;
}
//console.log(letflat(array));

/*Flatten and Reduce:
Given the array [[1, 2], [3, 4], [5, 6]], use the 
flat method and reduce method to calculate the sum 
of all the numbers.
 */

let array2=[[1, 2], [3, 4], [5, 6]]
function letflat2(arr2){
    let newarray2=arr2.flat(Infinity);
    return newarray2.reduce((start,item)=>start+item)
}
// console.log(letflat2(array2));


let a=[1,2,[2,3245],3,3,3,3,3,234,4,342,234]
function Flat(arr3){
    let Newar=arr3.flat(Infinity);
    return Newar//.new.Set()
    
}
console.log(Flat(a));

