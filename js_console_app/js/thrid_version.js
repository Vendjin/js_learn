let numberOfFilms;

console.log(numberOfFilms)
let personalMovieDB = {
    count: start(),
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function start() {
    numberOfFilms = +prompt('Сколько фильмов ты уже посмотрел?', '');

    // isNaN возвращает true если введется не число
    //         пустая строка           нажал отмену           ввел нечисло
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов ты уже посмотрел?', '');
    }

    return numberOfFilms
}


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const nameFilm = prompt('Один из последних просмотренных фильмов?', '');
        const rateFilm = +prompt('На сколько вы его оцените?', '');
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
}


// rememberMyFilms();

function detectPersonalLvl() {
    if (personalMovieDB.count <= 10) {
        console.log("Просмотрели довольно мало фильмов")
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель")
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман")
    } else {
        console.log("Произошла ошибка")
    }
}

detectPersonalLvl();

// console.log(personalMovieDB)

function showMyDB(private) {
    if (!private){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);
