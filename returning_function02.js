function cmTOin(length){
    return length/2.54;
}
function inTOcm(length){
    return length*2.54;
}
function convert(fn,length){
    return fn(length);
}
let inch=convert(cmTOin,2344);
console.log(inch);


let centimeter=convert(inTOcm,2434);
console.log(centimeter);