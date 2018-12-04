$(document).ready(function () {
    $('#km').on('click', function () {
        changeAllUnits('km');
    });

    $('#miles').on('click', function () {
        changeAllUnits('miles');
    });

    function changeAllUnits(unit) {
        $('#currentMileageUnit').text(unit);
        $('#contractualLimitUnit').text(unit);

        // TODO: Change the weekly calculation as well.
    }
});
