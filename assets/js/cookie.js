// ************** //.
// * COOKIE GET * //.
// ************** //.
$(document).ready(function () {
    $('input[name=currentMileage]').val(Cookies.get('currentMileage'));
    $('input[name=contractualLimit]').val(Cookies.get('contractualLimit'));
    $('input[name=contractStart]').val(Cookies.get('contractStart'));
    $('input[name=contractDuration]').val(Cookies.get('contractDuration'));
    // TODO: This is not working.
    // TODO: We need to add html elements for each item.
    // TODO: We also need to store the note.
    $('input[name="weeklyMileage[]"]').val(Cookies.get('weeklyMileages'));
    $('input[name="weeklyTimes[]"]').val(Cookies.get('weeklyTimes'));
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
