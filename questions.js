// // fibonacchi series
// function fibonacci_series(){
//     let fibSeries=[0,1]


//     for (let i = 2; i <=n; i++){
//         fibSeries[i]=fibSeries[i-1]+fibSeries[i-2];
//     }
//     return fibSeries;
// }
// let n=3;
// let fibonacci=fibonacci_series(n);
// console.log(fibonacci);

// palinrome chaker

//function palinrome_cheker(str){
//     let lower=str.toLowerCase().split('').reverse().join();
//     // let split=lower.split('');
//     // let revere=split.reverse();
//     // let join=revere.join('');
//     return lower==str;
// }
// let string='aditya';
// let result=palinrome_cheker(string);
// console.log(result)

//factorial of no

// function factorial(n){
//     let product=1;
//     for (let i = 1; i<=n; i++) {
//         product=product*i;
        
//     }return product;
// }
// let n=6;
// let result=factorial(n);
// console.log(result)

// function factorial(n){//not understand
//     if(n===0){
//         return 1;
//     }else{
//         return n*factorial(n-1);
//     }
// }
// // let n=6;
// let result=factorial(6);
// console.log(result)

//array sum

// function arraySum(arr){
//     let sum=0;
//     for (let i = 0; i< arr.length; i++) {
//         sum+=arr[i];
        
//     }    return sum;
// }
// let num=[12,2432,32,232,35,3523,35];
// console.log(arraySum(num))


//reverse a string
// function reverse(string){
//     let str=string.split('');
//     let reverse=str.reverse();
//     let join=reverse.join('');
//     return join;
// }
// let sentence='aditya,is,mad';
// console.log(reverse(sentence))

// // another method of reverse a string
// function  reverse(string){
//     reverse_string=('');
//     for (let i = string.length-1; i>=0; i--) {
        
//         reverse_string+=string[i];
//     }return reverse_string
// }
// let sentence='aditya';
// console.log(reverse(sentence))

// //largest element

// function largest_no(arr){
//     let largestnum=arr[0]
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i]>largestnum) {
//                 largestnum=arr[i];
//             }
            
//         }return largestnum
// }

// let num=[234,234,567,6785,345,2345,346,4356];
// let result=largest_no(num);
// console.log(result);


//fizzBuss:

function fizzBuss(n){
    
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    
        
}
    return fizzBuss;
}
let num=15;
console.log(fizzBuss(num))
