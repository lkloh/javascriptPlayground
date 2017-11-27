
var not_map = {foo: 'foo', bar: 'bar'};
console.log(not_map);
// console.log(not_map.get('foo'));

var map = new Map();
map.set('foo', 'foo');
map.set('bar', 'bar');
console.log(map);
console.log(map.get('foo') ? 'present' : 'not_present');
console.log(map.get('not_present') ? 'present' : 'not_present');

