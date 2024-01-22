
array=[
    {name:'adi',age:22,city:'jaipur'},
    {name:'karan',age:23,city:'jaipur'},
    {name:'nandu',age:24,city:'kota'},
    {name:'sandeep',age:25,city:'mp'},
]
function groupByProperty(array,property){
    let group={};
    array.forEach(item => {
        let property_value=item[property]

        if(!group[property_value]){
            group[property_value]=[]
        }else{
            group[property_value].push(item)  
}})
    let result=Object.values(group)
    return result
}
console.log(groupByProperty(array,'city'));
// let group=array.reduce((acc,item)=>{
//     let category=item.city;
//     if(!acc[category]){
//         acc[category]=[]
//     }acc[category].push(item)
//     return acc
// },{})

// let result=Object.values(group)
// console.log(result);