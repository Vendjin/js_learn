function first() {
    // do something
    setTimeout(function () {
        console.log(1);
    }, 1);
}

function second() {
    console.log(2);
}


first();
second();

// callBAck функция это функция, которая будет выполнена после того как будет завершена другая функция

function learnJS(lang, callback) {
    console.log(`я учу ${lang}`);
    callback();
}

learnJS('JavaScript',function () {
        console.log('Я прошел этот урок');
    });


function done (){
    console.log('Done');
}

learnJS('Python', done);