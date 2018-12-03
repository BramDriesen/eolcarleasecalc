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

    $.each(weeklyMileages, function (key, value) {
        weeklyResult[key] = value.value;
    });

    $.each(weeklyTimes, function (key, value) {
        let mileage = weeklyResult[key];
        weeklyResult[key] = mileage * value.value;
        totalWeeklyMileage += mileage * value.value;
    });

    let tableDiv = $('#result');
    // Empty the current result div and re-append the header and table opening.
    tableDiv.empty();
    tableDiv.append('<h2>Result</h2>');
    let tableHtml = '<table class="table">';
    // TABLE - HEAD.
    tableHtml += '<thead> <tr> <th scope="col">Year</th> <th scope="col">Month</th> <th scope="col">Mileage (est)</th> <th scope="col">#</th> </tr> </thead> <tbody>';


    // Cast the contract start into a start date.
    let startDate = moment(contractStart);
    let endDate = moment(contractStart);
    // Calculate the end date.
    endDate.add(contractDuration, 'months');

    // Create an array of all the years that we need to fill with data.
    let years = [];
    for (let i = parseInt(startDate.format('YYYY')); i <= parseInt(endDate.format('YYYY')); i++) {
        years.push(i);
    }


    years.forEach(function (year) {
        moment.months().forEach(function (month, index) {
            tableHtml += '<tr>';
            // If the index is 0 we add the year.
            if (index === 0) {
                tableHtml += '<td rowspan="12">' + year + '</td>';
            }

            tableHtml += '<td>' + month + '</td>';

            // TODO: Mileage.
            tableHtml += '<td>123</td>';

            // TODO: If over mileage add td.
            // TODO: If month == end of lease, add td.
            tableHtml += '<td style="color: tomato">End of Lease!</td>';

            tableHtml += '</tr>';
        });
    });


    // Close the table and append.
    tableHtml += '</tbody></table>';
    tableDiv.append(tableHtml);
});