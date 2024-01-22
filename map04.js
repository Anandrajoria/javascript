let array=[
    obj1={
        name:'aditya',
        age:19,
        class:12,
        clg:"arya"
    },
    obj2={
        name:'karan',
        age:20,
        class:12,
        clg:"arya"
    },
    obj3={
        name:'monu',
        age:19,
        class:12,
        clg:"bhavani"
    }]
let object=array.map(function(items){
    return items.name
    
})
console.log(object);