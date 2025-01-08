var massMark = 78;
var heightMark = 1.69;
var massJoin = 95;
var heightJoin = 1.88;

var BMIMark = (massMark/(heightMark*heightMark) );
console.log("chỉ số BMI của Mark là : "+BMIMark)
var BMIJoin = (massJoin/(heightJoin*heightJoin));
console.log("chỉ số BMI của Join là : " +BMIJoin)

var markHigherBMI = BMIMark > BMIJoin

console.log("Mark có chỉ số BMI cao hơn Join hay không : " +markHigherBMI)