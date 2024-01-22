//anonymous function

(function(){
    console.log('ji')
})

let greet=function(){
    console.log('hii')
};

//greet();

let show = function() {
    console.log('Anonymous function');
    let message='jai shree ram';
    return message;
};

//console.log(show())
/*since we assign the anonymous function to 
variable we need not to wrap it in ()*/


// setTimeout(function(){
//     console.log("it execute after 1 sec")
// },1000);

let a={
    name:'aditya'
};
(function(){
    console.log(a.name);
})
//(a);

let add = function (a, b) {
    return a + b;
}
//console.log(add(1,2))

let show2=()=>console.log('hii');
console.log(show2())