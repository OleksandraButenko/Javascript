'use strict'

// function showClick(){
//     console.log('Ok')
//     alert('ok')
// }


// let btn = document.querySelector('.btn');

// // btn.onClick = function(){
// //     console.log('Ok')
// // }

// btn.addEventListener('click', showClick);

// console.log(btn);





// const About = {
//     name: 'Maksim',
//     showName() {
//         console.log(this.name)
//     }
// }

// About.showName();

// btn.addEventListener('click', About.showName.bind(About));




//--------------------------------------------TASK 1-------------------------------
/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/


// let  btn = document.querySelector('.button');
// let count = 0;

//  function plus (){
//      count ++
//      btn.textContent = count;
//  }
//  btn.addEventListener('click', plus);




 //------------------------------------------TASK 2--------------------------------------------

 /*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/



// let div = document.querySelector('.expression');


// let first  = document.querySelector('.first');
// console.log(first.value)

// let second = document.querySelector('.second');
// console.log(second.value)
// let result =document.querySelector('.result');
// let btn = document.querySelector('button')

// function addition() {
// result.textContent = Number(first.value) + Number(second.value) ;
// }

// btn.addEventListener('click', addition);



//------------------------------------------TASK 3--------------------------------------------

/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/


//------------------------------РЕШЕНИЕ КЛАССАМИ-------------------------


// let sub=document.querySelector('button[data-action = "sub"]')
// let add=document.querySelector('button[data-action = "add"]')
// let result=document.querySelector('.value')

// class Counter{
//   constructor(onChange){
//     this.value = 0;
//     this.onChange=onChange;
//   } 
//   get increment(){
//     this.value++; 
//     this.onChange(this.value)
//   }

//   get decrement(){
//     this.value--; 
//     this.onChange(this.value)
//   }
// }

// function onChange(value) {
//  result.textContent=value;
// }
// let counter = new Counter(onChange)

// sub.addEventListener('click', () => counter.decrement)
// add.addEventListener('click', () => counter.increment)

//------------------------------------------------------------------------


// let btn = document.querySelectorAll ('button');
// let min = btn[0];
// console.log(min)
// let max = btn[1];
// console.log(max)

// let result = document.querySelector('span');
// console.log(result)


// function addition(){
//     console.log('plus');

//     result.textContent ++
// }

// max.addEventListener('click', addition);

// function minus(){
//     console.log('minus');

//     result.textContent --;
// }

// min.addEventListener('click', minus);






//------------------------------------------TASK 4--------------------------------------------


/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/


// const form = document.querySelector('.question-form');
// console.log(form);
// const input = form.querySelectorAll('input');
// console.log(input);
// const result = document.querySelector('.result');
// console.log(result);


// function formSubmit(event){
//    event.preventDefault();
//    let a = Array.from(input);
//    let b =  a.forEach( el => { 
//        el.checked ? result.textContent = el.value : null })

// }

// form.addEventListener('submit', formSubmit);




//------------------------------------------TASK 5--------------------------------------------

/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/

// const images = document.querySelector('.images')
// console.log(images)


// function show(event){
//  console.log(event.target.src);
// }

// images.addEventListener('click', show);



//------------------------------------------TASK 6--------------------------------------------

/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/



// const list = document.querySelector('.list')


//  function removeLi (event) {
//   if (event.target.nodeName === 'BUTTON'){
//     event.target.parentNode.remove()
//   }
// }

// list.addEventListener('click', removeLi)



//------------------------------------------TASK 7--------------------------------------------

/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/


// const list = document.querySelector('.input-list');
// console.log(list)


// function check(event) {
//   if(event.target.value.length === Number(event.target.getAttribute('data-length'))){
//     event.target.classList.add('valid')

//   } else{ event.target.classList.add('invalid')}
// }
// list.addEventListener('focusout', check)


//------------------------------------------TASK 8--------------------------------------------

 /*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/

// let input = document.querySelector('.input');
// let message = document.querySelector('.message');
// let value = document.querySelector('.input-value');
// console.log(message);


// function render (){
//  message.textContent = 'Input is in focus!'
// }

// function renderTwo (){
//   value.textContent = input.value
//  }

// input.addEventListener ('focusin', render)
// input.addEventListener ('input', renderTwo)



//------------------------------------------TASK 9--------------------------------------------


/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/


// const btn = document.querySelector('.btn');
// const modalBackdrop = document.querySelector('.js-modal-backdrop')
// const closeBtn = document.querySelector('.close-btn')
// const modal = document.querySelector('.modal')
// console.log(modal);
// const modalContent = document.querySelector('.modal-content');
// console.log(modalContent);


// console.log(closeBtn);



// function open(e){
//   e.stopPropagation()
//   modalBackdrop.classList.remove('modal-hidden')
// }

// function close (e){
//   let getAtribute = e.target.getAttribute('data-action')
//   console.log(getAtribute);
//   console.log(e.target.classClassName === 'modal js-modal-backdrop');
  
// if(e.target.classList.contains('js-modal-backdrop') || getAtribute) {
//   modalBackdrop.classList.add('modal-hidden')
// }
// }



// btn.addEventListener('click', open);
// modalBackdrop.addEventListener('click', close);



//------------------------------------------TASK 10--------------------------------------------

/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/

// let li = document.querySelectorAll('.menu-item > a');
// let ul = document.querySelector('.menu');

// function activate(element){
//   if(element.target.nodeName === 'A'){
//   li.forEach(el => el.classList.remove('active'));
//   element.target.classList.add('active')}
// }
// ul.addEventListener('click',activate)




/*----------------------------------------------REPEAT-----------------------------------------*/












