const moment = require(`moment`);
const performance = require(`performance-now`);

function formatUsingMoment(dateStr) {

  const date = moment(dateStr);
  return date.format(`YYYY-MM-DD`);
}

function formatUsingDate(dateStr) {
  const timestamp = Date.parse(dateStr);
  if (isNaN(timestamp)) {
    return dateStr;
  }
  const date = new Date(timestamp);
  return date.toString(`MM-DD-YYYY`);
}

function measureWithOrWithout(func, useMoment) {
  const start = performance();

  let v = null;
  for (let i = 0; i < 10000; i++) {
    if (useMoment) {
      v = func(i % 2 === 0 ? `2009-05-25T12:34:59` : `2018-04-18T11:17:23`);
    } else {
      v = `Boring`;
    }
  }

  const end = performance();

  console.log(`time taken for ${func.name} when useMoment is ${useMoment} is: ` + (end - start));
}

measureWithOrWithout(formatUsingMoment, true);
measureWithOrWithout(formatUsingMoment, false);
measureWithOrWithout(formatUsingDate, true);
measureWithOrWithout(formatUsingDate, false);

