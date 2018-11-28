$('#calculate').on('click', function () {
    // General information.
    let distanceUnit = $('input[name=distanceUnit]').val();
    // General lease information.
    let currentMileage = $('input[name=currentMileage]').val();
    let contractualLimit = $('input[name=contractualLimit]').val();
    let contractStart = $('input[name=contractStart]').val();
    let contractDuration = $('input[name=contractDuration]').val();

    // Weekly mileage.
    let weeklyMileages = $('input[name="weeklyMileage[]"]');
    let weeklyTimes = $('input[name="weeklyTimes[]"]');
    let weeklyResult = [];
    let totalWeeklyMileage = 0;

    $.each(weeklyMileages, function(key, value) {
        weeklyResult[key] = value.value;
    });

    $.each(weeklyTimes, function(key, value) {
        let mileage = weeklyResult[key];
        // TODO: The re-adding to the array isn't really needed.
        weeklyResult[key] = mileage * value.value;
        totalWeeklyMileage += mileage * value.value;
    });

    let tableDiv = $('#result');
    tableDiv.append('<h2>Result</h2>')

    let foo = '<table class="table"> <thead> <tr> <th scope="col">#</th> <th scope="col">First</th> <th scope="col">Last</th> <th scope="col">Handle</th> </tr></thead> </table>';
    tableDiv.append(foo);

});