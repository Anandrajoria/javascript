// use the at method to retrive the character at specific index

function gercharacter(str,position){
    if(str==undefined){
        return "string de na"
    }
    if(position>str.length||position<(-(str.length))){
        return 'out of range'
    }else{
    return str.at(position)}
}
let string='aditya'
console.log(gercharacter(string,-6));



function multipleElement(arr,indeces){
    return indeces.map((index)=>arr.at(index))
}
let array=['anand','kana','karan','krishna','aditya']
let indeces=[1,3]
console.log(multipleElement(array,indeces));


