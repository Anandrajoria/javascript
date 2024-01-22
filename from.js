/*Write a function that takes a string as input and uses 
the Array.from method to create an array 
where each element is a character from the string.*/

function tostring(string){
    return Array.from(string)
}
let str='aditya';
//console.log(tostring(str));


/*Array from a Range:
Implement a function that generates an array of 
numbers within a specified range using the Array.from method..*/


function range(num){
    return Array.from({length:num},(it,i)=>i)//.map((item,index)=>index)
}
// console.log(range(5));

/*Custom Mapping with Array.from:
Given an array of numbers, use the Array.from 
method to create a new array where each element is the square of the 
corresponding element in the original array. */
let array=[1,2,3,4,5]
let newarr=Array.from(array).map((item)=>item*item)
// console.log(newarr);



/* Array from Arguments:
Create a function that takes any number of arguments and 
uses Array.from(arguments) to convert them into an array.*/

function argarray(...args){
    return Array.from(args);
}
//console.log(argarray('asf','sfd','d,fh'));

