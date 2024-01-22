let a=['anand','krishna','sudama','ssssss','perminder'];
function latter(word){
    return word.find(item=>item[0]=='s');
}
console.log(latter(a));