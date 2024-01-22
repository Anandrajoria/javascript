let array=[21,345,6,3,52,4]
function multi(arr){
    let newarr=arr.filter((items)=>!(items%2==0))
    let square=newarr.map((items)=>items**2);
    let sum=square.reduce((items,index)=>index+items,0)
    return sum
}
// console.log(multi(array));

//take a string and count the character
// let string='hello i love javascript'
// function count(string){
//     let frequency={}
//     for(let i=0;i<string.length;i++){
//         let lowercase=string[i].toLowerCase();
//         if(lowercase==' '){
//             continue;
//         }
//         if(lowercase in frequency){
//             frequency[lowercase]++
//         }else{
//             frequency[lowercase]=1;
//         }
//     }return frequency
// }

// console.log(count(string));



let string2='hello world'
function reversearray(str){
    return str.split("").reverse().join('')
    
}
console.log(reversearray(string2));