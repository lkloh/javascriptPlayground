const moment = require('moment');

const d = moment.utc('2018-07-18T01:00:00+08:00').format('ddd, MMM D, YYYY');
console.log(d);
