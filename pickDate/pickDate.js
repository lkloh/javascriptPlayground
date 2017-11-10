
$(document).ready(function() {

	function notNovember(date) {
		return true;
	}

    $('#my_datepicker').datepicker({
    	minDate: new Date(2017, 1, 1),
    	maxDate: new Date(2017, 12, 31),
    	//beforeShowDay: notNovember,
    });

});