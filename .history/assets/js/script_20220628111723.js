var currentDayEl = document.querySelector('#currentDay');
var today = moment().format('dddd, MMMM do');

currentDayEl.textContent = today;

