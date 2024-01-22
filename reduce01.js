let array=[123,2341,123,434,56,574,567,56,7]
let sum=array.reduce((items,current)=>{
    return items+current
})
console.log(sum);

let newarray=[123,2341,123,434,56,574,567,56,7]
let product=array.reduce((result,current)=>{
    return result*current
})
console.log(product);
