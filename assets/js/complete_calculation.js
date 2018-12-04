$('#calculate').on('click', function () {
    // ********************* //.
    // * FORM INPUT VALUES * //.
    // ********************* //.
    let currentMileage = $('input[name=currentMileage]').val();
    let contractualLimit = $('input[name=contractualLimit]').val();
    let contractStart = $('input[name=contractStart]').val();
    let contractDuration = $('input[name=contractDuration]').val();
    let weeklyMileages = $('input[name="weeklyMileage[]"]');
    let weeklyTimes = $('input[name="weeklyTimes[]"]');

    // *********** //.
    // * GENERAL * //.
    // *********** //.
    let messagePrinted = false;

    // ******************* //.
    // * CALCULATE DATES * //.
    // ******************* //.
    let startDate = moment(contractStart);
    let startDateNoDay = moment(startDate.format('YYYY-MM-DD').substring(0, 8) + '01');
    // Calculate the end date.
    let endDate = moment(contractStart);
    endDate.add(contractDuration, 'months');
    let endDateNoDay = moment(endDate.format('YYYY-MM-DD').substring(0, 8) + '01');

    // Create an array of all the years that we need to fill with data.
    let years = [];
    for (let i = parseInt(startDate.format('YYYY')); i <= parseInt(endDate.format('YYYY')); i++) {
        years.push(i);
    }

    // ****************** //.
    // * WEEKLY MILEAGE * //.
    // ****************** //.
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

    // ****************** //.
    // * RENDER RESULTS * //.
    // ****************** //.
    let tableDiv = $('#result');
    // Empty the current result div and re-append the header and table opening.
    tableDiv.empty();
    tableDiv.append('<h2>Result</h2>');
    let tableHtml = '<table class="table">';
    // TABLE - HEAD.
    tableHtml += '<thead> <tr> <th scope="col">Year</th> <th scope="col">Month</th> <th scope="col">Mileage</th> <th scope="col">Information</th> </tr> </thead> <tbody>';

    let mileageTracker = 0;
    years.forEach(function (year) {
        moment.months().forEach(function (month, index) {
            tableHtml += '<tr>';
            // If the index is 0 we add the year.
            if (index === 0) {
                tableHtml += '<td rowspan="12">' + year + '</td>';
            }

            tableHtml += '<td>' + month + '</td>';

            // *********** //.
            // * MILEAGE * //.
            // *********** //.
            // Calculate a date based on the index of the month and current year.
            let monthIndex = index + 1;
            let monthString = '';
            if (monthIndex < 10) {
                monthString = '0' + monthIndex;
            }
            else {
                monthString = monthIndex;
            }
            let monthDate = moment(year + '-' + monthString + '-01');

            // If we are BEFORE the contractual start of the lease, we don't need to estimate anything.
            if (monthDate.format('X') < startDateNoDay.format('X')) {
                tableHtml += '<td>---</td>';
            }
            else {
                // TODO: Do something with the current mileage.
                // TODO: On months before the current moth (e.g a year into the lease) we don't really know the mileage
                // So we should display something else.

                let dailyMileage = totalWeeklyMileage / 7;
                mileageTracker += (monthDate.daysInMonth() * dailyMileage);
                tableHtml += '<td>' + Math.round(mileageTracker) + '</td>';
            }

            // ******************************** //.
            // * END OF LEASE OR OVER MILEAGE * //.
            // ******************************** //.
            let endOrOver = '';
            // If our timestamp of the current month equals the end date, we print once the end of lease message.
            if (monthDate.format('X') === endDateNoDay.format('X')) {
                endOrOver = 'End of Lease!'
            }
            // If we're exceeding our contractual limit, we add the message once.
            if (mileageTracker >= contractualLimit && !messagePrinted) {
                messagePrinted = true;
                endOrOver = 'Over contractual limit!'
            }
            tableHtml += '<td style="color: tomato">' + endOrOver + '</td>';

            tableHtml += '</tr>';
        });
    });

    // Close the table and append.
    tableHtml += '</tbody></table>';
    tableDiv.append(tableHtml);
});