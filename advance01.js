//crerate a deep copy of array of object 

let array=[
    {name:'adi',age:22},
    {name:'aadf',age:23},
    {name:'adisad',age:24},
    {name:'adias',age:25},
]
let object=array.map(item=>Object.assign({},item))
console.log(object);
console.log(array)