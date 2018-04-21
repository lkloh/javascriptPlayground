
var d = Date.parse('invalid');
var valid = Date.parse("Nov 09 '17");
console.log(d);
console.log(valid);
console.log(new Date(valid).toString('YYYY-MM-DD'));


const regex = /^(\d{4}-\d{2}-\d{2}\s*T*\s*\d{2}:\d{2}:\d{2}Z*)$/;
console.log(regex.test('2018-04-18T12:34:59Z'));
console.log(regex.test('2018-04-18 12:34:59'));
console.log(regex.test('2017-01-14T00:00:00Z'));
console.log(regex.test('Q4 2018'));

var d = parseInt('Apr 2017', 10);
console.log(d);
