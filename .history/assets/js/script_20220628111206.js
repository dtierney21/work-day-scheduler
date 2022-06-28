var currentDayEl = document.querySelector('#currentDay');
var today = moment().format('MMM do, YYYY');

currentDayEl.textContent = today;

