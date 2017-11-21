// https://stackoverflow.com/questions/2236747/use-of-the-javascript-bind-method

function getMonthlyFee(fee){
  var remaining = this.total - fee;
  this.total = remaining;
  return this.name +' remaining balance:'+remaining;
}

var rachel = {name:'Rachel Green', total:500};
console.log(rachel);

//bind
var getRachelFee = getMonthlyFee.bind(rachel, 90);
//deduct
console.log(getRachelFee());
console.log(getRachelFee());
