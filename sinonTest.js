
var sinon = require('sinon');
var moment = require('moment');

var fakeDate = new Date(`2017-12-14T12:00-08:00`).getTime();
clock = sinon.useFakeTimers(fakeDate);
new Date(); //=> return the fake Date 'Dec 14, 2017 at 12pm in UTC-08:00'

console.log(`time now:`);
console.log(moment.utc());

clock.restore();
new Date(); //=> will return the real time again (now)


