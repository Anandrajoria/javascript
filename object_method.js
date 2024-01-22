let sym=Symbol('ket1')

let user={
    name:'aditya',
    'full name':'aditya rajoriya',
    [sym]:'anand',//symbol syntax
    age:19,
    lcation:'jaipur',
    email:'aanand@google.com'
}



user.greeting=function(){
    console.log("welcome sir")
}

user.greetingtwo=function(){
    console.log(`hello ,${this.name},your full name is ${this["full name"]}`)
}
console.log(user.greeting());
console.log(user.greetingtwo());
console.log(user);