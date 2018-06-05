

// convert to properly formatted interval
function convertSeconds(seconds) {
  if (seconds < 60) {
    return seconds + 's';
  } else if (seconds < 60 * 60) {
    const numMinutes = Math.floor(seconds / 60);
    return numMinutes + 'm, ' + convertSeconds(seconds % 60);
  } else if (seconds < 24 * 60 * 60) {
    const numHours = Math.floor(seconds / (60 * 60));
    return numHours + 'hr, ' + convertSeconds(seconds % (60 * 60));
  } else {
    const numDays = Math.floor(seconds / (24 * 60 * 60));
    return numDays + 'd, ' + convertSeconds(seconds % (24 * 60 * 60));
  }
  return '';
}

function formatTimeInterval(seconds) {
  const SECONDS_IN_MINUTE = 60;
  const SECONDS_IN_HOUR = 60 * 60;
  const SECONDS_IN_DAY = 24 * 60 * 60;
  let intervalStr = `--`;
  if (seconds < SECONDS_IN_MINUTE) {
    intervalStr = `${seconds}s`;
  } else if (SECONDS_IN_MINUTE <= seconds && seconds < SECONDS_IN_HOUR) {
    const numMinutes = Math.floor(seconds / 60);
    const numSeconds = seconds % SECONDS_IN_MINUTE;
    intervalStr = `${numMinutes}m, ${numSeconds}s`;
  } else if (SECONDS_IN_HOUR <= seconds && seconds < SECONDS_IN_DAY) {
    const numHours = Math.floor(seconds / SECONDS_IN_HOUR);
    const numMinutes = Math.floor((seconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);
    const numSeconds = Math.floor(seconds % SECONDS_IN_MINUTE);
    intervalStr = `${numHours}h, ${numMinutes}m, ${numSeconds}s`;
  } else {
    const numDays = Math.floor(seconds / SECONDS_IN_DAY);
    const numHours = Math.floor((seconds % SECONDS_IN_DAY) / SECONDS_IN_HOUR);
    const numMinutes = Math.floor((seconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);
    intervalStr = `${numDays}d, ${numHours}h, ${numMinutes}m`;
  }
  return intervalStr;
}

console.log(`\n\n\nbasic format:`);
console.log(convertSeconds(59));
console.log(convertSeconds(3500));
console.log(convertSeconds(3601));
console.log(convertSeconds(20000));
console.log(convertSeconds(123456));

console.log(`\n\n\n Levels of granularity format:`);
console.log(formatTimeInterval(59));
console.log(formatTimeInterval(3500));
console.log(formatTimeInterval(3601));
console.log(formatTimeInterval(20000));
console.log(formatTimeInterval(123456));
