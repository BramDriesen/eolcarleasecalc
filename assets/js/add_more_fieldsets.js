let field_group_count = 1;

/**
 * Function to add more fields.
 */
function add_weekly_calculation_fields() {
    field_group_count++;
    let objTo = document.getElementById('weekly-calculation-fields');
    let divtest = document.createElement("div");
    divtest.setAttribute("class", "form-group removeclass-" + field_group_count);
    // If updated, replace add button with: <button class="btn btn-danger" type="button" onclick="remove_weekly_calculation_fields(' + field_group_count + ');"> <i class="fas fa-minus"></i> </button>.
    divtest.innerHTML = '<div class="row"> <div class="col-sm-3 nopadding"> <div class="form-group"> <div class="input-group mb-3"> <input type="number" class="form-control" id="weeklyMileage" name="weeklyMileage[]" placeholder="75"> <div class="input-group-append"> <span class="input-group-text">km</span> </div> </div> </div> </div> <div class="col-sm-1 nopadding"> <p>x</p> </div> <div class="col-sm-3 nopadding"> <div class="form-group"> <div class="input-group mb-3"> <input type="number" class="form-control" id="weeklyTimes" name="weeklyTimes[]" placeholder="5"> <div class="input-group-append"> <span class="input-group-text">Times a week</span> </div> </div> </div> </div> <div class="col-sm-3 nopadding"> <div class="form-group"> <div class="input-group mb-3"> <input type="text" class="form-control" id="weeklyComment" name="weeklyComment[]" placeholder="E.g. Home/work"> <div class="input-group-append"> <button class="btn btn-danger" type="button" onclick="remove_weekly_calculation_fields(' + field_group_count + ');"> <i class="fas fa-minus"></i> </button> </div> </div> </div> </div> <div class="col-sm-1 nopadding"> <p>= 123456</p> </div> </div>';
    objTo.appendChild(divtest)
}

/**
 * Function to remove a row.
 *
 * @param rid
 *   The row id to be removed.
 */
function remove_weekly_calculation_fields(rid) {
    $('.removeclass-' + rid).remove();
}