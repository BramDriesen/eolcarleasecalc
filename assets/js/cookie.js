// ************** //.
// * COOKIE GET * //.
// ************** //.
$(document).ready(function () {
    $('input[name=currentMileage]').val(Cookies.get('currentMileage'));
    $('input[name=contractualLimit]').val(Cookies.get('contractualLimit'));
    $('input[name=contractStart]').val(Cookies.get('contractStart'));
    $('input[name=contractDuration]').val(Cookies.get('contractDuration'));
    // Weekly mileage.
    let weeklyMileage = Cookies.getJSON('weeklyMileages');
    let weeklyTimes = Cookies.getJSON('weeklyTimes');
    let weeklyComment = Cookies.getJSON('weeklyComment');

    // Firstly add elements which we can then populate.
    for (let itemcount = 1; itemcount < weeklyMileage.length; itemcount++ ) {
        add_weekly_calculation_fields();
    }

    // Populate the weekly mileage.
    $.each($('input[name="weeklyMileage[]"]'), function (key, value) {
        $(this).val(weeklyMileage[key]);
    });

    // Populate the weekly times.
    $.each($('input[name="weeklyTimes[]"]'), function (key, value) {
        $(this).val(weeklyTimes[key]);
    });

    // Populate the weekly comment.
    $.each($('input[name="weeklyComment[]"]'), function (key, value) {
        $(this).val(weeklyComment[key]);
    });
});

// ************** //.
// * COOKIE SET * //.
// ************** //.
$('#calculate').on('click', function () {
    Cookies.set('currentMileage', $('input[name=currentMileage]').val());
    Cookies.set('contractualLimit', $('input[name=contractualLimit]').val());
    Cookies.set('contractStart', $('input[name=contractStart]').val());
    Cookies.set('contractDuration', $('input[name=contractDuration]').val());

    // Weekly mileage.
    let weeklyMileage = [];
    $.each($('input[name="weeklyMileage[]"]'), function (key, value) {
        weeklyMileage.push($(this).val());
    });
    Cookies.set('weeklyMileages', weeklyMileage);

    // Weekly times.
    let weeklyTimes = [];
    $.each($('input[name="weeklyTimes[]"]'), function (key, value) {
        weeklyTimes.push($(this).val());
    });
    Cookies.set('weeklyTimes', weeklyTimes);

    // Weekly comment.
    let weeklyComment = [];
    $.each($('input[name="weeklyComment[]"]'), function (key, value) {
        weeklyTimes.push($(this).val());
    });
    Cookies.set('weeklyComment', weeklyComment);
});
