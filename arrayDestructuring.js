//array destructuring
function calculation(a,b){
    return [a+b,a-b,a/b,a*b]
}
let[sum,sub,divide,multiply]=calculation(2,4)
// console.log(sum);
// console.log(multiply);
// console.log(sub);
// console.log(divide);


// swap
function swap(a,b){
    return [a,b]=[b,a]
}
let[a,b]=swap(1,2)
// console.log(a);
// console.log(b);


/*Write a function that takes an array of numbers and returns an object with properties max and min, 
representing the maximum and minimum values in the array. */
let array=[1,2,3,4,-2,5,234]
function minmax(arr){
    let max=arr[0];
    let min=arr[0];
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }else if(arr[i]<min){
            min=arr[i]
        }else{
            arr[i]=min=max
        }
    }return [min,max]
}
let[min,max]=minmax(array)
console.log(min);