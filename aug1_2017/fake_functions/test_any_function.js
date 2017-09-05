

var obtain_names = require('./any_function.js');
var assert = require('assert');

assert.deepEqual(obtain_names.get_first_name(), 'John');
assert.deepEqual(obtain_names.get_last_name(), 'Doe');

