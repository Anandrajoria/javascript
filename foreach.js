let array=[3.4,456,456]
// array.forEach((items)=>{console.log(items);});


let array2=[1,2,3,4,5]
// array2.forEach((items)=>console.log(items+5))

let array3=[1,2,3,4,5]
let sum=0
array3.forEach((items)=>{
    sum=sum+items;
})
// console.log(sum)

let array4=[1,34,6,7,2,4,77,63,23]
let greaterthen10=[];
array4.forEach((items)=>{
    if(items>10){
        greaterthen10.push(items);
    }
})

// console.log(greaterthen10);

let array6=[1,2,3,4,5]
// array6.forEach((items)=>console.log(items*items))