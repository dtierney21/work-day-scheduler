var now = moment();
console.log(now);

var currentDayEl = $('#currentDay');
var today = moment().format('dddd, MMMM Do');


currentDayEl.textContent = today;


