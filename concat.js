
//basic example
let arrar=[12,3,4]
let arr2=[345,24,6]
let combined =[].concat(arr2,arrar)
//console.log(combined);  // [ 345, 24, 6, 12, 3, 4 ]


//concat two strings
let array='aditya'.concat(' rajoriya')
//console.log(array);//aditya rajoriya

/* 03 Write a function that takes an array and a value,
and uses concat to add the value to the end of the array.
*/
function concatarray(arr,value){
    return arr.concat(value);
}

let array2=[12,3,4,5]
let val=23;
// console.log(concatarray(array2,val));

/*Write a function that concatenates two arrays
without modifying the original arrays.*/

function concatwithoutmodify(array1,arr2){
    return arr2.concat(array1)
}
let a=[12,34,4]
let b=[234,23452,345]
let result=concatwithoutmodify(a,b)

// console.log(a);
// console.log(b);
// console.log(result);


//concate a array with empthy array
let c=[]
// console.log(a.concat(c));

/*Write a function that 
takes an array of arrays and uses a loop to 
concatenate them into a single array.*/

function singlearray(arr){
    let mainarray=[]
    for(let i=0;i<arr.length;i++){
        mainarray= mainarray.concat(arr[i]);
    }
    return mainarray
}
let array5=[
    [1,2,3,4,5],
    [6,87,34,57,79],
    [0.8,76,567,3465]
]

console.log(singlearray(array5));