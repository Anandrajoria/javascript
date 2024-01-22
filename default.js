// function greet(meassge='hii aditya'){
//     return meassge

// }
// console.log(greet());
// console.log(greet('hii anand'))

function put(toy, toyBox = []) {
    toyBox.push(toy);
    return toyBox;
}

console.log(put('Toy Car'));
// -> ['Toy Car']
console.log(put('Teddy Bear'));
// -> ['Teddy Bear'], not ['Toy Car','Teddy Bear']


function returnArg(){
    throw new Error('requires arguments');
}
function add(x=returnArg(),y=returnArg()){
    return x+y;
}
console.log(add(12,1232))