let array=[
    {name:'anand',age:19},
    {name:'aditya',age:24},
    {name:'arnim',age:45},
    {name:'kushal',age:23},
    {name:'abhay',age:24},
    {name:'rahul',age:20},
    {name:'phula',age:13},
    {name:'modi',age:45},
]
function Filter(arr){
    let underage=arr.filter((item)=>item.age<30);
    let arrOfName=underage.map((item)=>item.name)
    return arrOfName;
}
// console.log(Filter(array));

/*Create a function that takes an array of objects with a numerical property (e.g., age) and sorts the array based on that property. */
function sorting(arr){
    return arr.sort((a,b)=>a.name.localeCompare(b.name))
}
// console.log(sorting(array));

//Write a function that searches an array of objects for an object with a specific property value. For example, find a person with a given name.
function letfind(arr){
    return person=arr.find((item)=>item.name=='phula')
}
// console.log(letfind(array));

/*Given an array of objects representing products, calculate the total price by multiplying the price and quantity for each product. */
let product=[
    {price:10,quantity:20},
    {price:12,quantity:30},
    {price:82,quantity:40},
    {price:68,quantity:50},
    {price:64,quantity:60},
    {price:23,quantity:23}
]


function claculation(arr){
    let total=0
    let calculate=product.forEach(item => {
        let producttotal=item.price*item.quantity
        total+=producttotal    
    });  return total
}
console.log(claculation(product));