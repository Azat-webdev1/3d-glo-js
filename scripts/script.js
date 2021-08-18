'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const countTimer = (dedline) => {
    let timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds');
    
    let idInterval = 0;
    
    const getTimeRemaining = () => {
      let dateStop = new Date(dedline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000;
      
      let seconds = 0,
        minutes = 0,
        hours = 0;
      
      if (timeRemaining > 0) {
          seconds = Math.floor(timeRemaining % 60);
          minutes = Math.floor((timeRemaining / 60) % 60);
          hours = Math.floor(timeRemaining / 60 / 60);
        }
      
      return {
        timeRemaining,
        hours,
        minutes,
        seconds
      };
    };

    const updateClock = () => {
      let timer = getTimeRemaining();

      timerHours.textContent = timer.hours;
      timerMinutes.textContent = timer.minutes;
      timerSeconds.textContent = timer.seconds;

      if (timer.timeRemaining < 0) {
        clearInterval(idInterval);
      } 
    };
    idInterval = setInterval(updateClock, 1000);
  };

  countTimer('19 Aug 2021');
});