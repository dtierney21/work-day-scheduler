var currentDayEl = document.querySelector('#currentDay');
var today = moment().format('dddd, MMMM do');
var now = moment();
console.log(now);

currentDayEl.textContent = today;


