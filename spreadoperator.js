/* Array Concatenation:
Write a function that takes two arrays
as arguments and uses the spread operator 
to concatenate them into a new array.*/

function concatenate(arr1,arr2){
    let newarray=[...arr1,...arr2];
    return newarray;
}

let array1=[1,2,3]
let array2=[4,5,6]
// console.log(concatenate(array1,array2));


/* Function Parameters:
Create a function that takes any number 
of arguments and returns the 
sum of those arguments using the spread operator.*/


function sum(...args){
    let newarray2=args.reduce((result,items)=>result+items);
    return newarray2;
}

//console.log(sum(2,2,3,432,3523));




/* Object Merging:
Write a function that merges two objects into a 
new object using the spread operator. 
If there are overlapping properties, 
the values from the second object should overwrite those from the first.*/


let obj1={
    name:'aditya',
    age:21
}

let obj2={
    name:'anand',
    age:19
}

let obj3={...obj1,...obj2}
// console.log(obj3);

/* Array Filtering:
Write a function that filters out 
even numbers from an array using the spread operator.*/

function adding(...args){
    let newarray3=args.filter((items)=>items%2==0);
    return newarray3
    
}

// console.log(adding(1,2,3,4));



/*Array Max Value:
Write a function that finds the 
maximum value in an array using the spread operator. */
function max(...args){
    let newarray4=args.reduce((start,items)=>start<items?items:start)
    return newarray4;
}
console.log(max(1,2,3435,4,5));
