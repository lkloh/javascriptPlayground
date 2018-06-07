const moment = require('moment');

const utcDate = moment.utc('2018-07-18T23:00:00-08:00').format('ddd, MMM D, YYYY');
console.log(`utcDate: ${utcDate}`);

const date = moment('2018-07-18T23:00:00-08:00').format('ddd, MMM D, YYYY');
console.log(`date: ${date}`);
