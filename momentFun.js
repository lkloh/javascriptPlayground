
// npm install moment

var moment = require('moment');

// 5.00pm today
console.log( typeof(moment().format('5:00 a')) );

// 9:00am tomorrow
console.log( moment().day(1).format('9.00 a') );

// 9:00am of the first day of next month
console.log('\n\n9:00am of the first day of next month');
var first_day_of_next_month = moment().add(1, 'months').set({date: 1, hour:9, minute:0, second:0, millisecond:0});
console.log(first_day_of_next_month);

// Ordinal date only
console.log(moment().format('Do'));