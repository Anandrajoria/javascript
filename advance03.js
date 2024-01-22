let array=[
    {name:'anand',age:30},
    {name:'monu',age:19},
    {name:'manish',age:24},
    {name:'sandeep',age:35},
]
// how you use map in arrray of object
function usemap(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i].age>20&&arr[i].age<30){
            arr[i].class='young';
        }else {
            arr[i].class='old';
        }
    }
    return arr
}

let result=usemap(array);

function max_min(result){
    let max=result[0].age;
    let min=result[0].age;
    for(let i=0;i<result.length;i++){
        if(result[i].age>max){
            max=result[i].age;
        }else if(result[i].age<min){
            min=result[i].age
        }
    }return {
        min,max
    }

}

let result2=max_min(result)
console.log(result2);
