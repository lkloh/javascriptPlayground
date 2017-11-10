
$(document).ready(function() {

	function onlyNovember(date) {
		if (date.getMonth() === 10) {
			return [true, ''];
		} else {
			return [false, '']
		}
	}

    $('#my_datepicker').datepicker({
    	minDate: new Date(2017, 1, 1),
    	maxDate: new Date(2017, 12, 31),
    	beforeShowDay: onlyNovember,
    });

});