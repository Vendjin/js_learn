'use strict';

try {
    console.log('Normal');
    console.log(a);
    console.log('result')
} catch(error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally{
    // если во время try какой то процесс не завершился в этом блоке его завершаем
}

console.log('работаем дальше');