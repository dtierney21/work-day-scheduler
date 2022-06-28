var currentDayEl = document.querySelector('#currentDay');
var today = moment().format('dddd, MMMM do');
var now = moment().getTime();
console.log(now.getTime());

currentDayEl.textContent = today;


