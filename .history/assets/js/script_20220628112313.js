var now = moment();
console.log(now);

var currentDayEl = document.querySelector('#currentDay');
var today = moment().format('dddd, MMMM Do');


currentDayEl.textContent = today;


