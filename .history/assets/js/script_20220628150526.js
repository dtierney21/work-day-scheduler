var now = moment();
console.log(now);

var currentHour = moment().format('H');
console.log(currentHour);

var currentDayEl = $('#currentDay');
var today = moment().format('dddd, MMMM Do');

currentDayEl.text(today);





$('.description').each(function() {
    //if ($(this).data(hour) == currentHour) {

    //}
    console.log($(this).data('hour'))
})