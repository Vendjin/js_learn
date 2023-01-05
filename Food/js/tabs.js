const tabs = document.querySelectorAll('.tabheader__item');
const tabsContent = document.querySelectorAll('.tabcontent');


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