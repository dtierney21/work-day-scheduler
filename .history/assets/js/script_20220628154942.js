var now = moment();
console.log(now);

var currentHour = moment().format('H');
console.log(currentHour);

var currentDayEl = $('#currentDay');
var today = moment().format('dddd, MMMM Do');

currentDayEl.text(today);

//var descriptions = localStorage.getItem("descriptions")

$('.description').each(function() {
    if ($(this).data('hour') == currentHour) {
        $(this).addClass('present');
    } else if($(this).data('hour') > currentHour){
        $(this).addClass('future');
    } else {
        $(this).addClass('past');
    }
})

$('.saveBtn').on('click', function() {
    //console.log($(this).siblings('.description').val());
    var key = $(this).siblings('.description').data('hour');
    var value = $(this).siblings('.description').val();
    localStorage.setItem(key, value);
})

function setSavedValues() {
    $('.description').each(function() {
        $(this).val('hello');
    })
}