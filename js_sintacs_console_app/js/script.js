let numberOfFilms = +prompt('Сколько фильмов ты уже посмотрел?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = +prompt('На сколько вы его оцените?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = +prompt('На сколько вы его оцените?', '');

personalMovieDB.movies[a] = b;
// personalMovieDB.movies = rateOfLastFilm;

console.log(personalMovieDB);