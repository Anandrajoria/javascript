let arr=[1,2,3,4]
let newarr=arr.map((num)=>[num*2,num**2]);
// console.log(newarr);

let array=[
    [1,2,3,4],
    [9,8,7],
    [6,3,4]
]
let newarray=array.flatMap((item)=>item.map((item)=>item*2))
// console.log(newarray);


/*Object Transformation:
Given an array of objects, use flatMap to transform it 
into an array of objects where each number property is doubled. */
let obj=[
    {
        name:'adi',
        age:32,
        gender:'boy'
    },
    {
        name:'sdgs',
        age:33,
        gender:'girl'
    }
]
let newarray2=obj.flatMap((item)=>({...item,age:item.age*2}))
// console.log(newarray2);

/*Given a nested array, use flatMap to 
flatten it and filter out the even numbers.
 */
let array3=[
    [1,2,3,4],
    [43,345,2,4,862],
    [3,234,642,34]
]
let newarray3=array3.flatMap((item=>item.filter(num=>num%2==0)));
// console.log(newarray3);

/* Given two arrays, use flatMap to combine them 
into a single array where each element is squared.*/

let array4=[1,2,3,4]
let array5=[9,7,6,5]
let newarr2=[array4,array5].flatMap((item=>item.map((num)=>num**2)))
// console.log(newarr2);

/*Given an array of strings, use flatMap to transform 
each string into an array of its characters. */

let array6=['aditya','anand','krishna']
let newarray4=array6.flatMap((item)=>Array.from(item))
console.log(newarray4);