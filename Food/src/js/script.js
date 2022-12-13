window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');

    // TABS
    function hideTabContent() {
        tabsContent.forEach(item => {
            // item.style.display = 'none';
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        })

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        })
    }

    // i = 0 это стандарт ES6 - значение по умолчание
    function showTabContent(i = 0) {
        // tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
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
    });


    //TIMER
    const deadline = '2023-01-01';

    function getTimeRemaining(endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date());
        let days, hours, minutes, seconds;
        if (t <= 0 ){
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else{
            // (1000 * 60 - кол-во мс в 1 мин) * 60 1в часе) * 24 в сутках) - сколько в сутках миллисекунд
            days = Math.floor(t / (1000 * 60 * 60 * 24));
            hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            minutes = Math.floor((t / (1000 / 60) % 60));
            seconds = Math.floor((t / 1000) % 60);
        }

        return {
            "total": t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    }

    function getZero(num){
        if (num >=0 && num < 10){
            return `0${num}`;
        } else {
            return num;
        }
    }
    function setClock(selector, endTime){
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');
        // устанавливаем обновление интервала каждую секунду 1 сек = 1000 мили сек
        const timeInterval = setInterval(updateClock, 1000);

        // что бы время при старте не мигало время
        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endTime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            // если наш total - deadline = 0 наступила дата, то останавливаем наш интервал
            if (t.total <= 0){
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);
});