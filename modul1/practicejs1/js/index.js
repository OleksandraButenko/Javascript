'use strict'

//let a = 10;
//let b =20;
//let result;
//result = a + b;
//console.log(result);

//const show = prompt ('how old are you', 'only number!!!!');
//let aftershow = Number(show);
//let small = 18;
//let about = "it's not ok " + aftershow + "only after " + small;
//let about = `it's not ok ${aftershow} only after ${small}`;
//alert (about);

//const a = 10;
//const b = 5;
//let result;

//let str = 'hello my friends';
//console.log(str.split(''));



// 1. Зайдите в консоль своего браузера. При помощи оператора определения типа уточните тип следующих величин: «Привет», 123, true, «true».
/*let a= "Привет";
console.log (typeof a);

let b = 123;
console.log (typeof b);

let c = true;
console.log (typeof c);

let d = "true";
console.log (typeof d);*/



// 2. Зайдите в консоль своего браузера. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений: 5 + 3, 5 — 3, 5 * 3, 5 / 3.
/*let a = 5;
let b = 3;
let result;

result = a + b;
console.log(result)


result = a - b;
console.log(result)


result = a * b;
console.log(result)


result = a / b;
console.log(result)*/






// 3. Зайдите в консоль своего браузера. При помощи оператора нахождения остатка от деления %, найдите значения выражений: 5 % 3, 3 % 5.

/*let a = 5;
let b = 3;
let result;

result = a % b;
console.log(result);

result = b % a;
console.log(result);*/

// 4. Зайдите в консоль своего браузера. При помощи оператора + (сложение, склеивание) найдите значения выражений: 5 + ‘3’ , ‘5’ — 3, 75 + ‘кг’.

/*let a = 5 + '3';
let b = '5' - 3;
let c = 75 + 'кг';
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);*/




// 5. Создайте переменные строкового, числового и булева типов. Выведите их содержимое.

/*let a = 'like';
let b = Number(10);
let c = true;

console.log(a);
console.log(b);
console.log(c);*/



// 6. Напишите скрипт, который находит площадь прямоугольника длиной 23см., шириной 10см.

/*let a = 23;
let b = 10;
let c = a * b;

console.log(a * b);
*/

// 7. (*) Найди двенадцатый элемент последовательности Леонардо Пизанского (нужно использовать функцию Math.pow(число, степень))


// 8. (*) Даны размер ипотечного кредита, процентная ставка, кол-во лет. Найти переплату по кредиту.

// _________________________________
// 9) Створіть змінну num і надайте їй значення 3. Виведіть значення цієї змінної на екран за допомогою методу alert

/*let num = 3;
alert(num); */




// 10) Створіть змінні a = 10 і b = 2. Виведіть на екран їх суму, різницю, добуток і частку (результат ділення)
/*let a = 10;
let b = 2;
let result;
alert (a + b);
alert (a - b);
alert (a * b);
alert  (a / b);*/




// 11) Створіть змінні c = 15 і d = 2. Підсумуйте їх, а результат надайте змінної result. Виведіть на екран значення змінної result

/*let c = 15;
let d = 2;

let result = c + d;
alert(c + d);*/
// 12) Створіть змінні a = 10, b = 2 і c = 5. Виведіть на екран їх суму.

/*let a = 10;
let b = 2;
let c = 5;
let result = a + b + c;
alert(a + b + c);
*/

// 13) Створіть змінні a = 17 і b = 10. Відніміть від a змінну b і результат надайте зміннії c. Потім створіть змінну d, надайте їй значення 7. Складіть змінні c і d, а результат запишіть в змінну result. Виведіть на екран значення змінної result.
  
/*let a = 17;
let b = 10;
let c = a - b;
let d = 7;
let result = c + d;
alert(result);*/

// 14) Запитайте ім'я користувача за допомогою методи prompt. Виведіть за допомогою alert повідомлення 'Ваше ім'я
// %значення що отримали з prompt%'

/*const yourName = prompt("Ваше ім'я");
alert(yourName);*/

// 15) Створіть три змінні - година, хвилина, секунда. З їх допомогою виведіть поточний час в форматі 'година: хвилина: секунда'.

/*let hour = '13: ';
let min = '25: ' ;
let sec = '10';
let currentTime = hour + min + sec;
console.log(currentTime);*/

// 16) Створіть змінну, надайте їй число. Зведіть це число в квадрат. Виведіть його на екран
/*let a = 10;
let b = Math.pow(10, 2);
alert(b);*/

// 17) Переробіть цей код так, щоб в ньому використовувалися операції + =, - =, * =, / =. Кількість рядків коду при цьому не повинно змінитися.

  /*var num = 47;
  num += 7;
  num -= 18;
  num *= 10;
  num /= 15;
  alert (num);*/


// 18) Створіть змінну str і надайте їй значення 'Hello World'. Виведіть значення цієї змінної на екран
/*let str ='Hello World';
alert(str);*/

// 19) Створіть змінні str1 = 'Hello,' і str2 = 'World!'. За допомогою цих змінних і операції додавання рядків виведіть на екран фразу 'Hello World'.
/*let str = 'Hello ';
let str2 = 'World!'
let result = str + str2;
alert(result);*/

// 20) Створіть змінну name і надайте їй ваше ім'я. Створіть змінну age і надайте їй ваш вік. Виведіть на екран 'Привіт, я  % Ім'я%!'Мені% Вік% років!'.

/*let name = 'Sasha';
let age = '25';
alert(`Hello, I am ${name}! I am ${age}`);*/

// 21) Створіть змінну str і надайте їй значення 'abcde'. Звертаючись до окремих символів цього рядка виведіть на екран символ 'a', символ 'c', символ 'e'

/*let  str = 'abcde';
console.log(str[0],str[2], str[3]);*/

// 22) Створіть змінну num і надайте їй значення '12345'. Знайдіть суму, різницю, добуток, частку цифр цього числа
// і виведіть ці значення в консоль
/*let num = 12345;
let a = +num[0] + +num[1] + +num[2] + +num[3] + ++num[5];
alert(a);*/

// 23) Дана рядок 'js'. Зробіть з неї рядок 'JS'.

/*let a = 'js';
console.log(a. toUpperCase());*/

// 24) Дана рядок 'JS'. Зробіть з неї рядок 'js'

/*let a = 'JS';
console.log(a. toLowerCase());*/

// 25) Дана рядок 'я вчу javascript!'. Знайдіть кількість символів в цьому рядку.

/*let a = 'я вчу javascript!';
console.log(a. length);*/

// 26) Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.
/*let a = 10;
let b = 3;
let c = a % b;
console.log(c);
*/
// 27) Возведите 2 в 10 степень. Результат запишите в переменную st.

/*let a = 2;
let a = Math.pow(2, 10);
alert(a);*/


// 28) Найдите квадратный корень из 245.

/*let a = Math.sqrt(245);
console.log(a);*/

// 29) Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых. (toFixed(0))

/*let a = Math.sqrt(379);
console.log(a.toFixed(2));*/




// 30) Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны (edited) 
// Перечень методов для работы со строками

/*let a = Math.sqrt(587);
console.log(Math.ceil(a));
console.log(Math.floor(a));*/




//const input = Number(prompt('Введите число больше 10'));
//let message = input > 10 ? 'ура, больше 10!':'все плохо!';
//alert(message);

/*const input = Number(prompt('Введите число больше 10'));
let message;
if (input > 10) {
  message = 'ура, больше 10!';
} else {
  message = 'все плохо!';
}
alert(message);*/

/*const SIZE_SMAll = 0;
const SIZE_MEDIUM = 1;
const SIZE_LARGE = 2;

const coffeeSize = Number(prompt('0 - small, 1 - medium, 2 - large', 1))
switch (coffeeSize) { 
case SIZE_SMAll:
console.log('готовим маленький кофе');
break;
case SIZE_MEDIUM:
console.log('готовим средний кофе');
break;
case SIZE_LARGE:
console.log('готовим большой кофе');
break;
default:
console.log('такого кофе нет');
}*/

/*if (input === SIZE_SMAll){
  console.log('готовим маленький кофе');
} else if (input === SIZE_MEDIUM){
  console.log('готовим средний кофе');
} else if (input === SIZE_LARGE){
  console.log('готовим большой кофе');
} else {
  console.log('такого кофе нет');
}*/



const SIZE_SMAll = 0;
const SIZE_MEDIUM = 1;
const SIZE_LARGE = 2;

const PRICE_SMALL = 50;
const PRICE_MEDIUM = 100;
const PRICE_LARGE = 150;

const userInput = prompt('0 - small, 1 - medium, 2 - large');
const coffeeSize = Number(userInput);

const isValidInput = userInput !==null && !Number.isNaN(coffeeSize);

if (isValidInput) {
  let haveCoffee;
  let size;
  let price;

  switch (coffeeSize) {
  case SIZE_SMAll:
  console.log('маленький кофе');
  haveCoffee = true;
  size = 'small';
  price = PRICE_SMALL;
  break;

  case SIZE_MEDIUM:
  console.log('средний кофе');
  haveCoffee = true;
  size = 'medium';
  price = PRICE_MEDIUM;
  break;

  case SIZE_LARGE:
  console.log('большой кофе');
  haveCoffee = true;
  size = 'large';
  price = PRICE_LARGE;
  break;

  default:
  console.log('Такого кофе нет');
  haveCoffee = false; 
 }

 if(haveCoffee) {
   const userCash = Number(prompt(`Заказ принят ${size}, с тебя ${price}`));

   if (userCash >= price) {
     const change = userCash - price;
     alert(`Вот Ваш ${size} кофе! Сдача: ${change}`);
   } else {
     alert('Оплата не прошла. Недостаточно средств!');
   }
 }
} else {
  alert('Невалидный ввод!!!');
}






/*let day;
let number = +prompt('Enter a number');
if(number === 1 ){
    day = 'monday';
    alert('monday')
} else if(number === 2){
    day = 'tuesday';
    alert('tuesday')
} else if(number === 3){
    day = 'wednesday';
    alert('wednesday')
} else {
    console.error('error')
}
switch(number){
    case 1:
    alert('monday');
    break;
    case 2:
    alert('tuesday');
    break;
    case 3:
    alert('wednesday');
    break;
    default:
    console.error('error');
}*/