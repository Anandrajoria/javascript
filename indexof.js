let a=[10,20,30,10,40,20,10,10,30,50,70,10,20,11,10]
function occurance(item,array){
    let result=[];
    let index=array.indexOf(item);
    while(index != -1){
        result.push(index);
        index=array.indexOf(item,index+1);

    // for(let i=0;i<a.length;i++){
    //     if (index!=-1) {
    //         result.push(item);
    //         index=array.indexOf(item,index+1)    
    //     }
        
}
return result
}


console.log(occurance(10,a));