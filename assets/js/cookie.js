// ************** //.
// * COOKIE GET * //.
// ************** //.
$(document).ready(function () {
    $('input[name=currentMileage]').val( Cookies.get('currentMileage') );
    $('input[name=contractualLimit]').val( Cookies.get('contractualLimit') );
    $('input[name=contractStart]').val( Cookies.get('contractStart') );
    $('input[name=contractDuration]').val( Cookies.get('contractDuration') );
    $('input[name="weeklyMileage[]"]').val( Cookies.get('weeklyMileages') );
    $('input[name="weeklyTimes[]"]').val( Cookies.get('weeklyTimes') );
});

// ************** //.
// * COOKIE SET * //.
// ************** //.
$('#calculate').on('click', function () {
    Cookies.set('current_mileage', $('input[name=currentMileage]').val());
    Cookies.set('contractualLimit', $('input[name=contractualLimit]').val());
    Cookies.set('contractStart', $('input[name=contractStart]').val());
    Cookies.set('contractDuration', $('input[name=contractDuration]').val());
    Cookies.set('weeklyMileages', $('input[name="weeklyMileage[]"]'));
    Cookies.set('weeklyTimes', $('input[name="weeklyTimes[]"]'));
});
