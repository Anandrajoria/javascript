function add(a,b){
    
    return a+b;
}
let sum=add;//call the add function

let result=sum(3,5)//can also call the add function via sum variable
console.log(result)

//passing a function as another parameter
function avg(c,d,sum){
    
    return sum(c+d)/2;
}
let result2=avg(23,45,sum);
console.log(result2)