var now = moment();
console.log(now);

var currentHour = moment().format('H');
console.log(currentHour);

var currentDayEl = $('#currentDay');
var today = moment().format('dddd, MMMM Do');

currentDayEl.text(today);

var descriptions = localStage.getItem("descriptions")



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
    localStorage.setItem('descriptions', 'test');
})