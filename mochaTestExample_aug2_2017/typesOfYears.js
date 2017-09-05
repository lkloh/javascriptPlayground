
module.exports = {

	isLeapYear: function(year) {
		if (Number.isInteger(year) && (year >= 0)) {
			if (year % 4 == 0) {
				if (year % 100 == 0) {
					if (year % 400 == 0) {
						return true;
					} else {
						return false;
					}
				} else {
					return true;
				} 
			} else {
				return false;
			}
		} else {
			throw 'Year must be an integer >= 0';
		}
	}

}

