
$(document).ready(function() {

	function onlyNovember2017(date) {
		if (date.getMonth() === 10) {
			return [true, ''];
		} else {
			return [false, '']
		}
	}

    $('#nov_2017_only').datepicker({
    	minDate: new Date(2017, 1, 1),
    	maxDate: new Date(2017, 12, 31),
    	dateFormat: 'dd-mm-yy',
    	beforeShowDay: onlyNovember2017,
    });

    $('#show_two_months').datepicker({
    	defaultDate: '+1m',
    	numberOfMonths: 2,
        showCurrentAtPos: 1,
    });

});