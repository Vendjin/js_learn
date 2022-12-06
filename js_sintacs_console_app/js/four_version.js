let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: () => {
        personalMovieDB.count = +prompt('Сколько фильмов ты уже посмотрел?', '');
        // isNaN возвращает true если введется не число
        //         пустая строка           нажал отмену           ввел не число
        while (personalMovieDB.count === '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов ты уже посмотрел?', '').trim();
        }

        return personalMovieDB.count
    },
    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            const nameFilm = prompt('Один из последних просмотренных фильмов?', '').trim();
            const rateFilm = +prompt('На сколько вы его оцените?', '').trim();
            if (
                nameFilm != null && rateFilm != null &&
                nameFilm !== '' && rateFilm !== 0 &&
                nameFilm.length < 50) {
                personalMovieDB.movies[nameFilm] = rateFilm;
            } else {
                console.log('error');
                // если условие не выполнилось, то возвращаемся на шаг назад
                i--;
            }
        }
    },
    detectPersonalLvl: function () {
        if (personalMovieDB.count <= 10) {
            console.log("Просмотрели довольно мало фильмов")
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель")
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман")
        } else {
            console.log("Произошла ошибка")
        }
    },
    showMyDB: function (privateStatus) {
        if (!privateStatus) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: () => {
        // for (let i = 1; i <= 3; i++) {
        //     let genre = prompt(`Ваш любимый жанр под номером: ${i}`)
        //
        //     if (genre === '' || genre == null) {
        //         console.log(`Бала нажата кнопка "Отмена" или не ввели данные`);
        //         // и что бы счетчик не перешел на следующий шаг делаем откат на итерацию
        //         i--;
        //     } else {
        //         personalMovieDB.genres[i - 1] = genre;
        //     }
        //     personalMovieDB.genres.forEach((item, iterator) => {
        //         console.log(`Любимый жанр ${iterator + 1} - это ${item}`)
        //     });
        // }
        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
            if (genres === '' || genres == null) {
                console.log(`Бала нажата кнопка "Отмена" или не ввели данные`);
                // и что бы счетчик не перешел на следующий шаг делаем откат на итерацию
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }
    },
    toggleVisibleMyDB: () => {
        (!personalMovieDB.private) ? personalMovieDB.private = true : personalMovieDB.private = false;
    }
};

console.log(personalMovieDB.toggleVisibleMyDB());
// console.log(personalMovieDB);
console.log('результат после выключения', personalMovieDB.showMyDB(personalMovieDB.private));
console.log(personalMovieDB.toggleVisibleMyDB());
console.log('результат после включения', personalMovieDB.showMyDB(personalMovieDB.private));


