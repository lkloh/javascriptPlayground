
var d = Date.parse('invalid');
var valid = Date.parse("Nov 09 '17");
console.log(d);
console.log(valid);
console.log(new Date(valid).toString('YYYY-MM-DD'));


const regex = /^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})$/;
console.log(regex.test('2018-04-18T12:34:59'));
console.log(regex.test('Q4 2018'));
