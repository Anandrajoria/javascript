function Age(){
    if(this.age>18){
        console.log('you can vote');
    }else{
        console.log('you can not vote');
    }
}

let par1={age:21};
let per2={age:11};
// Age.call(par1);
// Age.call(per2);


let person={
    name:'aditya',
    age:21,
    greet:function(){
        return `hello your name is `+ person.name
    }
}
console.log(person.greet());