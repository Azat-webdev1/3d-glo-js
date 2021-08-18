'use strict';

/* 
24:00 - 06:00 - ночь
06:00 - 12:00 - утро
12:00 - 18:00 - день
18:00 - 24:00 - вечер
*/

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
  const res1 = num % 100,
    res2 = num % 10;
  return res1 > 4 && res1 < 21 ? num + textVariant[2] :
    res2 === 1 ? num + textVariant[0] :
    res2 > 1 && res2 < 5 ? num + textVariant[1] :
    num + textVariant[2];
};

let getChangeEnding = changeEnding(Math.ceil((newDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24));

greeting.textContent = hours < 6 || hours > 24 ? 'Доброй ночи' :
  hours < 12 ? 'Доброе утро' :
  hours < 18 ? 'Добрый день' :
  'Добрый вечер';
dayOfWeek.textContent = 'Сегодня: ' + day;
currentTime.textContent = 'Текущее время: ' + time;
newYearDays.textContent = `
  До нового года осталось ${getChangeEnding}
`;

document.body.append(greeting, dayOfWeek, currentTime, newYearDays);