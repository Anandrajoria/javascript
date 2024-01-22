//01 array decleartion
let a=[]
let b=new Array()

//02 first and lasst element of array
let arr=[1,2,3,4,5,6]
// console.log(arr[0]);
// console.log(arr[arr.length-1]);
let last=arr.pop()
// console.log(last);



//03 add element in last of array
let c=['anand','1',true,23];
//let d=c.push('asd')
//console.log(d);//it give length of array
c.push('asd')
// console.log(c)

//04 pop last element of array
c.pop()
// console.log(c);

//05 loop throught array
// for (let i = 0; i < c.length; i++) {
//     console.log(c[i]);
// }

//06 check existence 
// 'in' method basically used to check the spicific index is present in array or not 

//console.log(0 in c);
// include method is used to check the element in array
//console.log(c.includes('anand'));


//07 remove the element of specific index//    **********************pending************
// let arr=[2,3,4,5,6,7,8]
// console.log(arr.splice(2,1));


//08  rembe element of specific index
//let arr=[1,2,3,4,5,6,7]
let Indix=2;
let newarray=arr.filter((Element,index)=>index!==Indix)
//console.log(newarray);

//09 conscate two array 
//console.log(arr.concat(c));//coonate array of arr and c



