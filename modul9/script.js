'use strict'

// console.log('first')

// setTimeout (function(){
//     console.log('second');
// }, 2000)

// console.log('third');


// function show(){
//     console.log('second')
// }
// setTimeout(show, 2000)






// let img = document.querySelector('img');


//  function loop() {
//   img.setAttribute('src','http://lorempixel.com/400/400/');
// }
// let show = setInterval(loop, 400);

// function stop(){
//     clearInterval(show)
// }

// img.addEventListener('click',loop);
// img.addEventListener('click',stop);





// let date = Date.now();
// console.log(date);

// let date1 = new Date(100000000000);
// console.log(date1);

// let date2 = new Date(2018,22);
// console.log(date2);



// let date = new Date ()
// console.log(date.setHours(6,6,6));




// const options = {
//     weekday:'long',
//     year:'numeric',
//     month:'short',
//     day:'numeric',
//     hour:'2-digit',
//     minute:'2-digit',
//     second:'2-digit',
//     era:''

// }

// let Uk = date.toLocaleString('en-Us', options);
// console.log(Uk);


//-----------------------------------PROMISE------------------------------------


// let prize = Math.floor(Math.random()*2);
// console.log(prize);

// function shooter(arrow){
//     console.log('вы сделали выстрел');


//     const promise = new Promise((resolve,reject) =>{
//         setTimeout(function(){
//             Math.random() > .5 ? resolve('good shot') : reject('you are a loser')
            
//         },3000)
        
//     })
//    return promise;
// }


// function win(){
//     console.log('you won!')
// }

// function prizes (){
//    if(prize === 1){
//      console.log('Get your BEER!');
//    } else {
//        console.log('get your VODKA!');
       
//    }
// }


// // shooter({}
// //     function(){
// //     console.log('head')
// //     win();
// //     prizes();
// // },
// // function(miss){
// //     console.log(miss)
// // }
// // )


// shooter({})
//       .then(head => console.log(head))
//       .then(win)
//       .then(prizes)
//       .catch(miss => console.log(miss))
//       .finally(()=>console.log('finished!'));





//-----------------------------------------------------TASK 1-----------------------------------------



/*
 * Есть массив цветов в hex-формате и кнопки Start и Stop. 
 * 
 * Напиши скрипт, который после нажатия кнопки Start, раз в секунду
 * меняет цвет фона body на случайное значение из массива. Используй
 * инлайн-стиль для изменения background-color.
 *
 * При нажатии на кнопку Stop, изменении цвета фона должно останавливаться.
 * 
 * Учти, что на кнопку Start можно нажать бесконечное количество раз.
 * Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
*/

// const colors = [
//     "#FFFFFF",
//     "#2196F3",
//     "#4CAF50",
//     "#FF9800",
//     "#009688",
//     "#795548"
//   ];

//   const start = document.querySelector('.js-start')
//   const stop = document.querySelector('.js-stop')
//   const body = document.querySelector('body')


// function showColor(event){
//     if(event.target.getAttribute('data-action') === 'start') {
//         event.target.disabled = true;
//         startColor();
//     } else if(event.target.getAttribute('data-action') === 'stop'){
//         document.querySelector('[data-action = start]').disabled = false;
//         clearInterval(stop1)
//     }
// }
// function showColors() {
//     let color = colors[Math.floor(Math.random()* colors.length)]
//     body.style.backgroundColor = color;
// }
// let stop1;
// function startColor(){
//       stop1 =  setInterval(showColors,1000)
// }

// body.addEventListener('click', showColor)

// let show; 

// function stopColor(){
// }


// // start.addEventListener('click', startColor)
// // stop.addEventListener('click', stopColor)
//  document.body.addEventListener('click', showColor)

  


//-----------------------------------------------------TASK 2-----------------------------------------
/* 
  Напишите функцию getFormattedTime(time), которая 
  получает time - кол-во миллисекунд и возвращает 
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  
  Используйте возможности объекта Date для работы со временем.
  
  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/
// let a
// let b
// function getFormattedTime(time) {
//     const day = new Date(time);
//     console.log(day);
    

//     a = `${day.getMinutes()}:${day.getSeconds()}:${parseInt (day.getMilliseconds()/100)}`
//     return a
//   }
  

//   console.log(
//     getFormattedTime(1523621052858)
//   ); // 04:12.8
  
//   console.log(
//     getFormattedTime(1523621161159)
//   ); // 06:01.1
  
//   console.log(
//     getFormattedTime(1523621244239)
//   ); // 07:24.2
   

//-----------------------------------------------------TASK 3-----------------------------------------

/* 
  Напишите скрипт, реализующий базовый функционал
  таймера, запуск отсчета времени и сброс счетчика
  в исходное состояние.
  
  Используйте возможности объекта Date для работы со временем.
  
  Создайте функцию startTimer, которая будет запускать
  отсчет времени с момента ее нажатия, она вызывается 
  при клике на кнопку с классом js-timer-start.
  
  Создайте функцию stopTimer, которая будет останавливать
  счетчик, она вызывается при клике на кнопку с классом js-timer-stop.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе. 
  Для составления строки времени в формате xx:xx.x, 
  исользуйте функцию getFormattedTime из задания номер 3.
  
  Подсказка: так как нам интересны исключительно сотни миллисекунд,
      нет смысла выполнять пересчет времени чаще чем каждые 100мс.
*/

// const clockface = document.querySelector(".js-clockface");
// const startBtn = document.querySelector(".js-timer-start");
// const stopBtn = document.querySelector(".js-timer-stop");

// const timer = {
//   startTime: null,
//   deltaTime: null,
//   id: null
// };

// /*
// * Вспомогательные функции
// */

// /*
// * Обновляет поле счетчика новым значением при вызове
// * аргумент time это кол-во миллисекунд
// */
// function updateClockface(elem, time) {
//   // Используйте функцию getFormattedTime из задания #1
//   // elem.textContent = getFormattedTime(time);
// }

// /*
// * Подсветка активной кнопки
// // */
// function setActiveBtn(target) {
//   if(target.classList.contains('active')) {
//     return;
//   }
  
//   startBtn.classList.remove('active');
//   stopBtn.classList.remove('active');
  
//   target.classList.add('active');
// }






// const timer = {
//   startTime: 0,
//   deltaTime: null,
//   id: null,
//   pauseTime: 0,
//   isActive: false
// };

// const clockface = document.querySelector(".js-clockface");
// const startBtn = document.querySelector(".js-timer-start");
// const stopBtn = document.querySelector(".js-timer-stop");
// const section = document.querySelector(".timer");

// startBtn.addEventListener('click', handleClickStart);
// stopBtn.addEventListener('click', handleClickStop);
// stopBtn.addEventListener('dblclick', handleClickReset);
// section.addEventListener('click', setActiveBtn );



// function handleClickStart () {
//   if(!timer.isActive) {
//     timer.isActive = true;
//     this.pauseTime = 0;
    
//     timer.startTime = new Date() - timer.pauseTime;
//     // console.log('timer.startTime', timer.startTime);
//     timer.id = setInterval(() => {
//       let currentTime = new Date();
    
//       timer.deltaTime = currentTime - timer.startTime;
//       let time = new Date(timer.deltaTime);
//       updateClockface(clockface, time)
//     }, 100); 
//   }
// }

// function handleClickStop (time) {
//   timer.pauseTime = timer.deltaTime;
  
//   clearInterval(timer.id);
  
//   timer.isActive = false;
//   timer.startTime = 0;
//   timer.id = null;
  
// }

// function handleClickReset() {
//   // console.log('reset');
//   timer.isActive = false;
//   clearInterval(timer.id);
//   timer.id = null;
//   timer.startTime = 0;
//   timer.deltaTime = 0;
//   updateClockface(clockface, timer.startTime)
// }

// /*
// * Обновляет поле счетчика новым значением при вызове
// * аргумент time это кол-во миллисекунд
// */
// function getFormattedTime(time) {
//   let date = new Date(time);
//   let min = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
//   let sec = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
//   let ms = Math.floor(date.getMilliseconds() /100)
//   return `${min}:${sec}.${ms}`;
  
// }

// function updateClockface(el, time) {
//   el.textContent = getFormattedTime(time);
// }

/*
* Подсветка активной кнопки
*/
// function setActiveBtn(event) {
//   if(event.target.nodeName === 'BUTTON') {
//     return;
//   }
  
//   startBtn.classList.add('active');
//   stopBtn.classList.add('active');
  
//   event.classList.contains('active');
// }



// function setActiveBtn(event) {
//   if(event.target.nodeName === 'BUTTON') {
//     return;
//   }
  
//   startBtn.classList.add('active');
//   stopBtn.classList.add('active');
  
//   target.classList.remove('active');
// }



//------------------------------------------TASK 5----------------------------------------------------

/*
 * Есть переменная quantity хранящиая в себе
 * текущее количество единиц какого-то товара на складе.
 * 
 * Напиши функцию processOrder(value), получающую
 * кол-во товаров заказанных покупателем, и возвращающую промис.
 * 
 * Для имитации проверки достаточного количества товаров
 * на складе используй setTimeout с задержкой 500мс.
 * 
 * Если на складе товаров больше либо равно заказанному
 * количеству, функция возвращает промис который исполняется
 * успешно со строкой "Ваш заказ готов!".
 * 
 * В противном случае, со строкой "К сожалению на складе не достаточно товаров!".
 * 
 * Если же пользователь ввел не число, то промис выполняется с ошибкой
 * и значением "Некорректный ввод!".
*/

// const DELAY = 1000;
// const quantity = 100;

// function processOrder (value){ 
// const promise = new Promise((resolve,reject)=>{
//   setTimeout (function(){
//       if(typeof value === "number"){
//       value <= quantity ?resolve('Ваш заказ готов!') : reject('К сожалению на складе недостаточно товаров!')
//       }else{
//           reject('Некорректный ввод!');
//       }
//   },500)
// })

// return promise

// }


// Вызовы функции для проверки
// processOrder(50)
//   .then(console.log) // Ваш заказ готов!
//   .catch(console.log);


// processOrder(500)
//   .then(console.log) // К сожалению на складе недостаточно товаров!
//   .catch(console.log);

// processOrder("lorem")
//   .then(console.log)
//   .catch(console.log); // Некорректный ввод!



//----------------------------------------------------HOMEWORK-----------------------------------------------------------

/*
  Создайте скрипт секундомера.  
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  Изначально в HTML есть разметка:
  
  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>
  
  Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
    с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/

