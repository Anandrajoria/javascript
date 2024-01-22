let array=[1,1,1,1,1,2,3,4,5,6,2,3,4,53,2,3,32]
let count=array.reduce((items,current)=>{
    if (current in items) {
        items[current]+=1;
    }else{
        items[current]=1;

    }return items
},{});

console.log(count);