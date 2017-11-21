// https://stackoverflow.com/questions/2236747/use-of-the-javascript-bind-method


function Rachel() {
   this.name = 'Rachel Green';
   this.total = 500;
   var rachelFee = getMonthlyFee.bind(this);
   console.log(rachelFee());
}


function getMonthlyFee() {
  	var remaining = this.total - 50;
	this.total = remaining;
	return this.name +' remaining balance:' + remaining;
}

new Rachel();
