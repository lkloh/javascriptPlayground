

// convert to properly formatted interval
function convertSeconds(seconds) {
  if (seconds < 60) {
    return seconds + ' s';
  } else if (seconds < 60 * 60) {
    const numMinutes = Math.floor(seconds / 60);
    return numMinutes + ' m, ' + convertSeconds(seconds % 60);
  } else if (seconds < 24 * 60 * 60) {
    const numHours = Math.floor(seconds / (60 * 60));
    return numHours + ' hrs, ' + convertSeconds(seconds % (60 * 60));
  } else {
    const numDays = Math.floor(seconds / (24 * 60 * 60));
    return numDays + ' days, ' + convertSeconds(seconds % (24 * 60 * 60));
  }
  return '';
}

console.log(convertSeconds(59));
console.log(convertSeconds(3500));
console.log(convertSeconds(3601));
console.log(convertSeconds(20000));
