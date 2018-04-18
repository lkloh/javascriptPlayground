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
    v = formatUsingMoment(`2009-05-25T12:34:59`);
  }

  const end = performance();

  console.log(`time taken when useMoment is ${useMoment} is: ` + (end - start));
}

measureWithOrWithout(true);
measureWithOrWithout(false);

