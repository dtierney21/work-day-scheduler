// Get the current hour
var currentHour = moment().format('H');
console.log(currentHour);

// Get and set the current day
var today = moment().format('dddd, MMMM Do');
var currentDayEl = $('#currentDay');
currentDayEl.text(today);

// Determine which slots are past, present, or future and set class
$('.description').each(function() {
    if ($(this).data('hour') == currentHour) {
        $(this).addClass('present');
    } else if($(this).data('hour') > currentHour){
        $(this).addClass('future');
    } else {
        $(this).addClass('past');
    }
})

// On save, set local storage vatriables using the timeslot's hour and description
$('.saveBtn').on('click', function() {
    var key = $(this).siblings('.description').data('hour');
    var value = $(this).siblings('.description').val();
    localStorage.setItem(key, value);
})

// On page load set any descriptions that have been previously saved
function setSavedValues() {
    $('.description').each(function() {
        if (localStorage.getItem($(this).data('hour')) != null) {
            $(this).val(localStorage.getItem($(this).data('hour')));
        }
    })
}