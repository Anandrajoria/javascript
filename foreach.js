let array =["apple", "mango", "apple", 
"orange", "mango", "mango"]



let Newarray=[]
array.forEach(function(items){
    if(!Newarray.includes(items)){
        Newarray.push(items)
    }
});
console.log(Newarray);