var currentDayEl = document.querySelector('#curentDay');
var today = moment().format('MMM do, YYYY');

currentDayEl.textContent = today;

