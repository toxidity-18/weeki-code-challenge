function calculateDemritPoints(speed){
    if(isNaN(D)||D<0){
    return;
 }
const limitofD=70;
let demeritPoints=0;
let excessSpeed=P;
if(D>limitofD){
    constP =D-limitofD;
    demeritpoints=Math.floor(P/5);
    console.log("You have exceeded the speedlimit by",excessSpeed,"km/h.");
} 
else{
    console.log("ok");
}
console.log("Demerit points",demeritPoints);
}
const speed=Number(prompt("Enter car speed (km/h):"));
calculateDemeritPoints(speed);
