'use strict';

// это самый первый вариант AJAX, но он уже не актуален, но если где-то встретить в коде, хотя бы не бояться его
const inputRUB = document.querySelector('#rub');
const inputUSD = document.querySelector('#usd');


inputRUB.addEventListener('input', () =>{
   const request = new XMLHttpRequest();

   // настройки для запроса, получить информацию из js/current
   request.open('GET', 'js/current.json');
   // устанавливаем заголовки
   request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
   // теперь отправляем наш запрос(гет-запрашиваем информацию), для POST в send нужно передать send(body)
   request.send();

   // состояние readystatechange - отслеживает статус готовности нашего запроса, в данный текущий момент
   // состояние load - запрос полностью загрузился и мы получили какой-то результат

   // вариант с readystatechange
   // request.addEventListener('readystatechange', () =>{
   //    if (request.readyState === 4 && request.status === 200){

   request.addEventListener('load', () =>{
      if (request.status === 200){
         // request.response - ответ от сервера
         console.log(request.response);
         // ответ от сервера превращаем в object js
         const data = JSON.parse(request.response);
         // toFixed - количество знаков после точки
         inputUSD.value = (+inputRUB.value / data.current.usd).toFixed(2);
      } else {
         inputUSD.value = 'Что то пошло не так';
      }
   });
   // status - статус нашего запроса
   // statusText - текстовое описание ответа от сервера
   // response - ответ
   // readyState - текущее состояние запроса,
   //    0 UNSENT(объект создан, метод Open() не вызывался,
   //    1 Open - был вызван
   //    2 Headers_Received - заголовки получены, был вызван метод send()
   //    3 Loading  - responseText содержит частичные данные
   //    4 DONE, операция полностью завершена


});