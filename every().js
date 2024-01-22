//check all element of array are positive or not

let array2=[1,2,234,4];
let allpositive=array2.every((item)=>item>0)
// console.log((allpositive));



//check wheather all element of array are of same type or not
const array=[1,'dgs','dfs',345,true]
let firsttype=array[0];
let same=array.every((items)=>{
    if(typeof items===firsttype){
        console.log("same");
    }
})
// console.log(same);

let array3=[234,3542,325,34,346]
let even =array3.every((item)=>item%2==0)
// console.log(even);

let array4=[1,2,3,4,5,3244]
let range={
    min:0,
    max:200
};


let isinrange=array4.every((item)=>{
    return item>=range.min && item<=range.max;
});

console.log(isinrange);
