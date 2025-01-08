var massMark = 78;
var heightMark = 1.69;
var massJoin = 95;
var heightJoin = 1.88;

var BMIMark = (massMark/(heightMark*heightMark) );
console.log("chỉ số BMI của Mark là : "+BMIMark)
var BMIJoin = (massJoin/(heightJoin*heightJoin));
console.log("chỉ số BMI của Join là : " +BMIJoin)

if(BMIMark > BMIJoin){
    console.log("Mark có  BMI cao hơn Join ")
}else{
    console.log("Join có  BMI cao hơn Mark ")
}
if(BMIMark > BMIJoin){
    console.log("BMI của Mark :" + BMIMark + "  cao hơn của Join :" + BMIJoin)
}else{
    console.log("Join có  BMI cao hơn Mark ")
    
}