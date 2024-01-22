let person={
    name:'aditya',
    age:19,
    clg:'arya',
    address:{
        country:'india',
        state:'rajasthan',
        road:'benad road',
        house_no:24
    }
}
// let{name,age,clg,address:{country,state,road,house_no}}=person

// function info(person){
//     return`${person.name} is ${person.age} year old`
// }
// console.log(info(person));

function detail({name,...args}){
    return {name,args}
}


let{name,args}=detail(person)
console.log(args);