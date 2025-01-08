// Test case 1: bill = 275
let bill = 275;
let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
let total = bill + tip;
console.log('Hóa đơn là ' +bill + ' tiền boa là '+ tip + ' và tổng giá trị ' + total);

// Test case 2: bill = 40
bill = 40;
tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
total = bill + tip;
console.log('Hóa đơn là ' +bill + ' tiền boa là ' + tip + ' và tổng giá trị ' + total);

// Test case 3: bill = 430
bill = 430;
tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
total = bill + tip;
console.log('Hóa đơn là ' +bill + ' tiền boa là '+ tip + ' và tổng giá trị ' + total);
