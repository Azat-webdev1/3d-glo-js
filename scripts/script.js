'use strict';

const date = new Date(),
  days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ],
  hours = date.getHours(),
  day = days[date.getDay()],
  time = date.toLocaleTimeString('ru'),
  newDate = new Date(new Date().getFullYear() + 1, 0, 1);

const greeting = document.createElement('div'),
  dayOfWeek = document.createElement('div'),
  currentTime = document.createElement('div'),
  newYearDays = document.createElement('div');

const changeEnding = (num) => {
  const textVariant = [' день', ' дня', ' дней'];
    let res1 = num % 100,
        res2 = num % 10;
    
    if (res1 > 4 && res1 < 21) {
      num + textVariant[2];
    }
    else if (res2 === 1) {
      num + textVariant[0];
    }
    else if (res2 > 1 && res2 < 5) {
      num + textVariant[1];
    }
    else {
      num + textVariant[2];
    }
};