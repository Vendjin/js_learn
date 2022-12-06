let numberOfFilms = +prompt('Сколько фильмов ты уже посмотрел?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


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
if (personalMovieDB.count <= 10) {
    console.log("Просмотрели довольно мало фильмов")
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель")
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман")
} else {
    console.log("Произошла ошибка")
}


console.log(personalMovieDB)