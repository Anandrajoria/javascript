// let a=[23,3454,55,43,476,34,6]

// function even(array){
//     return array.find(item=>item%2==0);
// }
// console.log(even(a));

let sentence="i am very thankful to you god";
function findlongestword(sentence){
    let word=sentence.split(" ");
    let longest='';
    word.find((word)=>{
        if (word.length>longest.length) {
            longest=word;
        }
    });
    return longest;
}
console.log(findlongestword(sentence));