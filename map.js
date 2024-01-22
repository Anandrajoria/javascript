let circle=[10,20,30]
function areas(radius){
    return Math.floor(Math.PI*radius*radius)
}
let area=circle.map(areas)
console.log(area);