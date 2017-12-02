
var not_map = {
	foo: {a: 1, b: 2, c: 3}, 
	bar: {a: 1, b: 2}
};
console.log(not_map);
console.log(not_map.foo ? 'present' : 'not_present');
console.log(not_map.not_present ? 'present' : 'not_present');
// console.log(not_map.get('foo'));

console.log();

var map = new Map();
map.set('foo', {a: 1, b: 2, c: 3});
map.set('bar', {a: 1, b: 2});
console.log(map);
console.log(map.get('foo') ? 'present' : 'not_present');
console.log(map.get('not_present') ? 'present' : 'not_present');
console.log(map.get('not_present') ? 'present' : 'not_present');

