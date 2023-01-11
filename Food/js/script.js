import tabs from './modules/tabs';
import modal, {openModalWindow} from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import forms from './modules/forms';
import slider from './modules/slider';
import calc from './modules/calc';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(
        () => openModalWindow('.modal', modalTimerId),
        50000
    );

    tabs();
    modal('[data-modal]', '.modal', modalTimerId);
    timer();
    cards();
    forms();
    slider();
    calc();
});