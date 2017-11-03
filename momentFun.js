
// npm install moment

var moment = require('moment');

// 5.00pm today
console.log( typeof(moment().format('5:00 a')) );

// 9:00am tomorrow
console.log( moment().day(1).format('9.00 a') );