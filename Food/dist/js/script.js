/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabheader__item');
  const tabsContent = document.querySelectorAll('.tabcontent');
  const tabsParent = document.querySelector('.tabheader__items'); // TABS

  function hideTabContent() {
    tabsContent.forEach(item => {
      // item.style.display = 'none';
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });
    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  } // i = 0 это стандарт ES6 - значение по умолчание


  function showTabContent(i = 0) {
    // tabsContent[i].style.display = 'block';
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();
  tabsParent.addEventListener('click', event => {
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')) {
      // перебираем все элементы, что бы получить их индексы и сравниваем
      tabs.forEach((item, i) => {
        if (target === item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  }); //TIMER

  const deadline = '2023-01-01';

  function getTimeRemaining(endTime) {
    const t = Date.parse(endTime) - Date.parse(new Date());
    let days, hours, minutes, seconds; // проверка что бы счетчик не считал после того как дата истечет

    if (t <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      // (1000 * 60 - кол-во мс в 1 мин) * 60 1в часе) * 24 в сутках) - сколько в сутках миллисекунд
      days = Math.floor(t / (1000 * 60 * 60 * 24));
      hours = Math.floor(t / (1000 * 60 * 60) % 24);
      minutes = Math.floor(t / (1000 / 60) % 60);
      seconds = Math.floor(t / 1000 % 60);
    }

    return {
      "total": t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endTime) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds'); // устанавливаем обновление интервала каждую секунду 1 сек = 1000 мили сек

    const timeInterval = setInterval(updateClock, 1000); // что бы время при старте не мигало время

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endTime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds); // если наш total - deadline = 0 наступила дата, то останавливаем наш интервал

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline); //MODAL WINDOW

  const modalWindow = document.querySelector('.modal');
  const modalCloseBtn = document.querySelector('[data-close]');
  const btnContactUs = document.querySelectorAll('[data-modal]');

  function openModalWindow() {
    /*modalWindow.classList.remove('hide');
     modalWindow.classList.add('show');*/
    modalWindow.classList.toggle('show'); // функционал отключения прокрутки

    document.body.style.overflow = 'hidden'; // если пользователь сам открыл окно, то оно не будет открываться снова

    clearInterval(modalTimerId);
  }

  function closeModalWindow() {
    /*modalWindow.classList.add('hide');
    modalWindow.classList.remove('show');*/
    modalWindow.classList.toggle('show');
    document.body.style.overflow = '';
  }

  btnContactUs.forEach(btn => {
    btn.addEventListener('click', event => {
      const target = event.target;

      if (target && target.classList.contains('btn')) {
        openModalWindow();
      }
    });
  });
  modalWindow.addEventListener('click', event => {
    const target = event.target;

    if (target === modalCloseBtn || target === modalWindow) {
      closeModalWindow();
    }
  });
  document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && modalWindow.classList.contains('show')) {
      closeModalWindow();
    }
  }); // делаем всплывающие окно когда страница пролистана до определенного уровня
  // мой вариант, но не продуманно как не работать после закрытия окна

  /*function getHeight() {
      let height = window.getComputedStyle(document.body).height;
       return height.split('.')[0];
  }
   console.log(document.documentElement.scrollTop, Math.trunc(getHeight() * 0.7));
   document.addEventListener('scroll', () =>{
      if (document.documentElement.scrollTop  >= Math.trunc(getHeight() * 0.7)) {
          openModalWindow();
      }
  });*/

  const modalTimerId = setTimeout(openModalWindow, 3000);

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModalWindow(); // удаляем событие прокрутки, после того как оно выполнилось

      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  window.addEventListener('scroll', showModalByScroll); // MENU CARD

  const menu = document.querySelector('.menu__field');
  const menuItems = menu.querySelectorAll('.menu__item'); // мой вариант

  /*class MenuCard {
      constructor(parentElem, img, subtitle, description, total) {
          this.parentElem = parentElem;
          this.img = img;
          this.subtitle = subtitle;
          this.description = description;
          this.total = total;
      }
       addMenuCard () {
          // this.parentElem.firstElementChild.style.maxWidth = `1320px`;
          this.parentElem.firstElementChild.style.flexWrap = `wrap`;
          this.parentElem.firstElementChild.style.gap = `20px`;
          this.parentElem.firstElementChild.innerHTML += `
          <div class="menu__item">
                  <img src="${this.img}" alt="${this.img.split('/').slice(-1)}">
                  <h3 class="menu__item-subtitle">${this.subtitle}</h3>
                  <div class="menu__item-descr">${this.description}</div>
                  <div class="menu__item-divider"></div>
                  <div class="menu__item-price">
                      <div class="menu__item-cost">Цена:</div>
                      <div class="menu__item-total"><span>${this.total}</span> грн/день</div>
                  </div>
          </div> `;
      }
  }
   const newMenuCard = new MenuCard(
      menu,
      'img/tabs/hamburger.jpg',
      'Меню Фастфуд',
      'lorem',
      600);
   newMenuCard.addMenuCard();*/

  class MenuCard {
    constructor(src, alt, title, description, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.description = description;
      this.price = price;
      this.transfer = 65;
      this.changeToRUB();
      this.parentSelector = document.querySelector(parentSelector);
      this.classes = classes;
    }

    changeToRUB() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement('div'); // проверка если мы не передали классы для дива, будет автоматом подставляться

      if (this.classes.length === 0) {
        this.element = 'menu__item';
        element.classList.add(this.element);
      } else {
        this.classes.forEach(className => element.classList.add(className));
      }

      element.innerHTML = `
            <img src="${this.src}" alt="${this.alt}">
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.description}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
            </div>
            `;
      this.parentSelector.append(element);
    }

  }

  new MenuCard('img/tabs/vegy.jpg', 'vegy', 'Меню "Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд:' + ' больше свежих овощей и фруктов. Продукт активных и здоровых людей.' + ' Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 9, '.menu .container', 'menu__item').render();
  new MenuCard('img/tabs/elite.jpg', 'elite', 'Меню “Премиум', 'В меню “Премиум” мы используем не только красивый дизайн упаковки,' + ' но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное' + ' меню без похода в ресторан!', 13, '.menu .container', 'menu__item').render();
  new MenuCard('img/tabs/post.jpg', 'post', 'Меню "Постное"', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов' + ' животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество' + ' белков за счет тофу и импортных вегетарианских стейков.', 10, '.menu .container').render(); // FORMS

  const forms = document.querySelectorAll('form');
  const messages = {
    loading: 'Загрузка',
    success: 'Спасибо! Скоро с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };

  function postData(form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const statusMessageDiv = document.createElement('div');
      statusMessageDiv.classList.add('status');
      statusMessageDiv.textContent = messages.loading;
      form.append(statusMessageDiv);
      const request = new XMLHttpRequest();
      request.open('POST', 'server.php'); // при POST заголовок не нужно давать заголовки
      // request.setRequestHeader('Content-type', 'multipart/form-data');
      // получить все данные из формы

      const formData = new FormData(form);
      request.send(formData);
      request.addEventListener('load', () => {
        if (request.status === 200) {
          console.log(request.response);
          statusMessageDiv.textContent = messages.success;
        } else {
          statusMessageDiv.textContent = messages.failure;
        }
      });
    });
  }

  forms.forEach(item => {
    postData(item);
  });
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map