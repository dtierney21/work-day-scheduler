var now = moment();
console.log(now);

var currentHour = moment().format('H');
console.log(currentHour);

var currentDayEl = $('#currentDay');
var today = moment().format('dddd, MMMM Do');

currentDayEl.text(today);





$('.description').each(function() {
    //console.log($(this).data('hour'))
    if ($(this).data('hour') == currentHour) {
        $(this).attr('class', "present");
    } else if($(this).data('hour') > currentHour){
        $(this).attr('class', "future");
    } else {
        $(this).attr('class', "past");
    }
})