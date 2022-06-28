var now = moment();
console.log(now);

var currentHour = moment().format('HH');
console.log(currentHour);

var currentDayEl = $('#currentDay');
var today = moment().format('dddd, MMMM Do');


currentDayEl.text(today);