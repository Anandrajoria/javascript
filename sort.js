let arra22y=[4,245,462,34,385,34]

let newarray=arra22y.sort((a,b)=>{
    if(a>b) return 1;
    if(a<b) return -1;
    return 0;
})
// console.log(newarray);

let array2=['karan','monu','aditya','anand']
// console.log(array2.sort());

let array3=[
    {name:'aditya',age:18},
    {name:'monu',age:23},
    {name:'shub',age:21},
    {name:'krishna',age:16}
]

function letsort(arr,property){
    let array=arr.sort((a,b)=>{
        if(a[property]>b[property]){
            return 1;
        }else if(a[property]<b[property]){
            return -1;
        }else{
            return 0;
        }
    })
    return array
}
let newarray2=letsort(array3,'name');
// console.log(newarray2);

let array4=[1,2,3,4,5,6]
//console.log(array4.sort((a,b)=>b-a));

