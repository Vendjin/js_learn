// импортируем переменные и функции по старому
/*const myModule = require('./main');

const myModuleInstance = new myModule();

myModuleInstance.hello();
myModuleInstance.goodBye();*/

import {one, two} from "./main";
import {sayHi as hello} from "./main";
import defFunc from "./main";

console.log(one , two);
hello();