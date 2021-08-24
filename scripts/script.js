'use strict';

window.addEventListener('DOMContentLoaded', () => {
  // Таймер
  const countTimer = (dedline) => {
    let idInterval = 0;
    let timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds');

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

    const addZero = (elem) => {
      if (String(elem).length === 1) {
        return '0' + elem;
      } else {
        return String(elem);
      }
    };

    const updateClock = () => {
      let timer = getTimeRemaining();

      timerHours.textContent = addZero(timer.hours);
      timerMinutes.textContent = addZero(timer.minutes);
      timerSeconds.textContent = addZero(timer.seconds);

      if (timer.timeRemaining <= 0) {
        clearInterval(idInterval);
      }
    };
    updateClock();
    idInterval = setInterval(updateClock, 1000);
  };

  countTimer('20 Aug 2021');

  // Меню
  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu');

    const handlerMenu = (e) => {
      const target = e.target;

      if (target.closest('.menu')) {
        menu.classList.toggle('active-menu');
      } else if (target !== menu && target.closest('[href^="#"]')) {

        menu.classList.toggle('active-menu');
      }
      if (!target.classList.contains('close-btn')) {
        menu.style.display = 'flex';
      }
    };

    btnMenu.addEventListener('click', handlerMenu);
    menu.addEventListener('click', handlerMenu);

    /*
    window.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !btnMenu.contains(e.target)) {
        menu.style.display = 'none';
      }
    });
    */
  };

  toggleMenu();

  //Модальное окно
  const togglePopup = () => {
    const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn'),
      popupContent = document.querySelector('.popup-content'),
      popupData = {
        count: -445,
        speed: 15,
        startPos: -445,
        endPos: 0
      };

    const popupShow = () => {

      if (popupData.startPos > popupData.endPos) {
        popupData.count -= popupData.speed;
      } else {
        popupData.count += popupData.speed;
        popupContent.style.transform = `translateY(${popupData.count}px)`;
      }

      if (popupData.startPos > popupData.endPos &&
        popupData.count > popupData.endPos ||
        popupData.count < popupData.endPos) {
        requestAnimationFrame(popupShow);
      }
    };

    popupBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        popup.style.display = 'block';
        if (screen.width > 768) {
          popupData.count = popupData.startPos;
          requestAnimationFrame(popupShow);
        }
      });
    });

    popup.addEventListener('click', event => {
      let target = event.target;

      if (target.classList.contains('popup-close')) {
        popup.style.display = 'none';
      } else {
        target = target.closest('.popup-content');

        if (!target) {
          popup.style.display = 'none';
        }
      }
    });
  };

  togglePopup();

  //Табы
  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
      tab = tabHeader.querySelectorAll('.service-header-tab'),
      tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    };

    tabHeader.addEventListener('click', (e) => {
      let target = e.target;

      target = target.closest('.service-header-tab');
      if (target) {
        tab.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });
      }
    });
  };

  tabs();

  //Слайдер
  const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
      dots = document.querySelector('.portfolio-dots'),
      slider = document.querySelector('.portfolio-content');
      
    for (let i = 0; i < slide.length; i++) {
      dots.insertAdjacentHTML('beforeend', 
      `<li class="dot ${i === 0 ? 'dot-active' : ''}"></li>`);
    }
    
    const dot = document.querySelectorAll('.dot');
    
    let currentSlide = 0;
    let interval;
    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };
  
    const autoPlaySlide = () => {

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };
    
    slider.addEventListener('click', (e) => {
      e.preventDefault();
      let target = e.target;

      if (!target.matches('.portfolio-btn, .dot')) {
        return;
      }
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      if (target.matches('#arrow-right')) {
        currentSlide++;
      } else if (target.matches('#arrow-left')) {
        currentSlide--;
      } else if (target.matches('.dot')) {
        dot.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        });
      }
      
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }

      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', (e) => {
      if (e.target.matches('.portfolio-btn') || e.target.matches('.dot')) {
        stopSlide();
      }
    });

    slider.addEventListener('mouseout', (e) => {
      if (e.target.matches('.portfolio-btn') || e.target.matches('.dot')) {
        startSlide();
      }
    });

    startSlide(1000);

  };

  slider();

});