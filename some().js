let array=[1,2,3,94,14,47,34,40]
let greaterThenTen=array.some((items)=>items>30);
//console.log(greaterThenTen);

let array2=['aditya','krishna','shub']
function containTarget(array2,target){
    return array2.some((items)=>items.includes(target))
}

let target='tya'
//console.log(containTarget(array2,target));

let containTarget2=array2.some((items)=>items.includes('tya'))
//console.log(containTarget2);


let array3=[
    {name:'aditya',
    age:23},

    {
        name:'krishna',
        age:25
    }
]

function eligable(arr){
    let iselegible=arr.some((items)=>items.age>18)
    return iselegible
}
//console.log(eligable(array3));

let array4=[
    [1,2,3,45,6],
    [32,2345,463,457],
    [-23,-2345,234]
]

function negative(arr){
    let find=arr.some(function(items){
        return items.some((num)=>num<0)
    } )
    return find
}

//console.log(negative(array4));

let array5=['aditya','xyz','mon','Z']
function check(arr){
    let upperCase= arr.map((items)=>items.toUpperCase())

    return upperCase;
}


let available=check(array5).some((items)=>items.includes("Z"))
console.log(available);
console.log(check(array5));