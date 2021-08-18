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