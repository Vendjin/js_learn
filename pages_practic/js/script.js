/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
    Новый фильм должен добавляться в movieDB.movies.
    Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
    "Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


'use strict';

// данный эвент не дожидается полной загрузки
document.addEventListener('DOMContentLoaded', () => {


    const marketingBlock = document.querySelectorAll('.promo__adv img');
    const poster = document.querySelector('.promo__bg');
    const promoGenre = document.querySelector('.promo__genre');
    const watchingMovies = document.querySelector('.promo__interactive-list');
    const addFrom = document.querySelector('form.add');
    const addInput = addFrom.querySelector('.adding__input');
    const checkBox = document.querySelector('[type=checkbox]');
    const button = document.querySelector('button');


    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const deleteAdv = (parent) => {
        parent.forEach(block => {
            block.remove();
        });
    }


    const makeChanges = () => {
        promoGenre.textContent = 'драма';
        poster.style.backgroundImage = "url('img/bg.jpg')";
    }


    const sortArr = (arr) => {
        arr.sort();
    };

    function createMoviesList(movies, parent) {
        parent.innerHTML = '';
        sortArr(movies);

        movies.forEach((movie, index) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">
                    ${index + 1} ${movie}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                // splice - удалить элемент из массива, начиная с какого и сколько
                movies.splice(i, 1);
                // и снова вызываем эту же функцию для перегеннирации нумирации
                createMoviesList(movies, parent);
            })
        });
    }


    // submit - события для формы!
    addFrom.addEventListener("submit", (event) => {
        event.preventDefault();

        let newMovie = addInput.value;
        let favorite = checkBox.checked;

        if (newMovie) {
            if (newMovie.length > 21) {
                movieDB.movies.push(`${newMovie.slice(0, 22)}...`);
            }
            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newMovie);
            sortArr(movieDB.movies);

            createMoviesList(movieDB.movies, watchingMovies);
        }

        // сбросить форму
        event.target.reset();
    }, {once: true});


    deleteAdv(marketingBlock);
    makeChanges();
    createMoviesList(movieDB.movies, watchingMovies)
});
