function books(name){
    return function(a,b){
        let x=a,y=b;//not undestand
    
    if(x>b){
        return 1;
    }else if(x<b){
        return -1;
    }else{
        return 0
    }//till yet
    };   
}
let product =[
    {name:'python',price:200},
    {name:'javascript',price:400},
    {name:'cpp',price:600}
];
console.log("product sort by name");
product.sort(books('name'));
console.table(product)