const moment = require(`moment`);
const performance = require(`performance-now`);

function formatUsingMoment(dateStr) {
  const date = moment(dateStr);
  return date.format(`YYYY-MM-DD`);
}

function measureWithOrWithout(useMoment) {
  const start = performance();

  let v = null;
  for (let i = 0; i < 10000; i++) {
    v = formatUsingMoment(i % 2 === 0 ? `2009-05-25T12:34:59` : `2018-04-18T11:17:23`);
  }

  const end = performance();

  console.log(`time taken when useMoment is ${useMoment} is: ` + (end - start));
}

measureWithOrWithout(true);
measureWithOrWithout(false);

