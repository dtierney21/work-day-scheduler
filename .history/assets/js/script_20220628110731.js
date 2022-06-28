var currentDayEl = document.querySelector('#cuurentDay');
var today = moment().format('MMM do, YYYY');

currentDayEl.textContent = today;

