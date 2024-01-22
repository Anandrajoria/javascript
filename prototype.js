// let person={name:'aditya'}
// console.log(person.toString());

function person(name){
    this.name=name;
}
person.prototype.greet=function(){
    return "hi, I'm "+ this.name ;

}
let p1=new person('aditya');
let greeting=p1.greet();
console.log(greeting);

let p2=new person('krishna');
p2.draw=function(){
    return 'i can draw';
};


p1.greet=function(){
    return 'anand';
};
console.log(p1.greet());