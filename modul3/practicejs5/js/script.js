'use script'





/*
const add = function(a, b, c){
       return a + b * c;
}

console.log(add(10, 3, 19));
console.log(add(7, 7, 9));
console.log(add(1, 3, 1));
*/


/*
const name = function(name = 'Ivan', lastName = 'Ivan', day = 0){
    console.log(`my name is ${name} my last name ${lastName} ${day}`);

}
name('Maksim', 'Norets');
*/


/*
const name = function(){
    console.log(`Hello`);
}

name()
*/

/*

name(12, 6);
console.log (name(12,6));
age();

*/

/*
function name(a,b) {
    return a + b;
}
function age(){
    console.log (`age`);
}
*/

/*
name(3,6)
console.log (name(3,6))

function name(a,b) {
    return a * b;
}



const add = function(a,b){
    return ( a * b);
}
console.log(add(3,6))
*/


/*
let total = 0;
function arg (){
   let mass = Array.from(arguments);
    //console.log(arguments);


 //for(let i = 0; i < mass; i += 1) {
  //total += arguments[i];
  //console.log(total)}

console.log(mass);
for(let key of mass){
    total += key;
}
return total;
}

console.log(arg(1,2,3,4,5,6,10));
*/




/*function restMass(...rest){
    console.log(rest)
}

console.log(restMass(1,6,33,77,0,646));
*/

/*
let total = 0
function restMass(...rest){
    for(let key of rest){
        total += key;
    }
    return total;
}
restMass(1,6,33,77,0,646);
console.log(restMass(1,6,33,77,0,646));
*/


/*
let n = 30;

function newFn(b){
    let n =11;
  console.log(b + n)
}
newFn(10)

console.log(n)
*/



/*
function fn(b){
 return b % 2 === 0;
}



function fn2(b) {
    if (fn (b)){
        alert('Ok')
   }else{
    alert('no')
   }
}
fn2(2)
*/

//const fn = (a,b) => a + b;
//console.log(fn(3,3));


/*

const fn = b => b % 2 === 0;
const fn2 = b =>fn(b)? alert('ok'): alert('no');

fn2(4)*/



//=============================== task 01 =======================

// Заполните массив 10-ю иксами с помощью цикла.

 /*arr = new Array();
 for (let i=0; i<10; i++) {
    arr.push('x');
}

console.log(arr); 
*/

//=============================== task 02 =======================

// Заполните массив числами от 1 до 10 с помощью цикла.

/*
arr = [];
 for (let i=0; i<10; i++) 
 arr[i] = i + 1;

console.log(arr); 
*/

//=============================== task 03 =======================

// Дана строка, например, '123456'. Сделайте из нее '214365'.
/*
let str = '123456';
let a = str.split('');
let a1 = a[1] + a[0] + a[3] + a[2] + a[5] + a[4]
console.log(a1)
*/

//=============================== task 04 =======================

//Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
/*
function sNumberInRange(a) {
    return ( a > 0 > 10)
}

console.log(sNumberInRange(3333))
*/

//=============================== task 05 =======================

// Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
/*
function isEven(num) {
	if (num % 2 == 0) {
		return true;
	} else {
		return false;
    }
}
console.log(isEven(12))
*/
//=============================== task 06 =======================


// Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи
/*
function isEven(num) {
	if (num % 2 == 0) {
		return true;
	} else {
		return false;
    }
}
console.log(isEven(12))

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = [];
for (let i = 0; i < arr.length; i++) {
	if(isEven(arr[i])) {
		result.push(arr[i]);
	}
}

console.log(result);
*/
//=============================== task 07 =======================

// Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой
/*
let str ='abcde abcde abcde';
let arr = [];

let arr2 = str.split(' ');


function ucfirst(str) {
	return str[0].toUpperCase() + str.substr(1);
}
for (let i = 0; i < arr.length; i++) {
	arr2.push(ucfirst(arr[i]));
}

let str2 = arr2.join(' ');
console.log(str2);
*/
//=============================== task 08 =======================

// Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false
/*
let str = 'яблоко';
let arr = ['банан', 'яблоко', 'персик'];
 console.log(inArray(str, arr));

 function inArray(str, arr) {
	for (let i = 0; i < arr.length; i += 1) {
		if (arr[i] === str) {
			return true;
		}
	}
	return false;
}

*/
//=============================== task 09 =======================

// Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число)


/*
function getDivisors(a) {
    let mass  = [];
    for( let i = 0; i <= a ; i ++){
        if( a % i === 0){ 
            mass.push(i)
    }
    
     }
     return mass;
 }

 console.log(getDivisors(90))*/





 //=============================== task 10 =======================

/*
  Напиши функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/
/*
// Вызовы функции для проверки
console.log( checkNumberType(2) ); // 'Even'

console.log( checkNumberType(46) ); // 'Even'

console.log( checkNumberType(3) ); // 'Odd'

console.log( checkNumberType(17) ); // 'Odd'
*/

/*
function checkNumberType(num){
   if(num % 2 === 0){
       alert('Even')
   } else{
     alert (' Odd')
      }
     
}
checkNumberType(3)
*/




//=============================== task 11 =======================

/*
  Напиши функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ка
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/
/*
// Вызовы функции для проверки
console.log(
    formatString("Curabitur ligula sapien, tincidunt non.")
  ); // вернется оригинальная строка
  
  console.log(
    formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
  ); // вернется форматированная строка
  
  console.log(
    formatString("Curabitur ligula sapien.")
  ); // вернется оригинальная строка
  
  console.log(
    formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
  ); // вернется форматированная строка
  */
 
/*
let str = "Curabitur ligula sapien, tincidunt non.";
let mass = str.split(' ');
  function formatString(str){
    for(let i = 0; i < 40; i += 1 ){
        if (mass.length < 40){
            mass.length = 40
        }
 let a = mass.join('') + '...'
 
console.log(a)
return str = a
 
}}
console.log(formatString())
*/





//=============================== task 12 =======================


/*
  Напиши функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/

// Вызовы функции для проверки
//console.log( checkForSpam('Latest technology news') ); // false

//console.log( checkForSpam('JavaScript weekly newsletter') ); // false

//console.log( checkForSpam('Get best sale offers now!') ); // true

//console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true


/*
function checkForSpam(str){
    let str2 = str.toLowerCase().split(' ');
    for( let i = 0; i < str2.length; i += 1){
        let word = str2[i];
        if ( word === 'spam' || word === 'sale'){
            return true;
        }
    }
         return false;
    
    }

*/
    



//=============================== task 13 =======================

/*  
  Написать функцию, getPx(str) 
  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/

// Вызовы функции для проверки
//console.log( getPx("10px") === 10 ); // true
//console.log( getPx("10.5") === 10.5 ); // true
//console.log( getPx("0") === 0 ); // true
//console.log( getPx(-1) ); // null
//console.log( getPx(10) ); // null

/*
function getPx(str) {
      for(let i = 0; i < 0; i += 1){
        if( typeof str !== 'string'){
          let str = Number(str);
      } 
   }
   return ''
}

console.log(getPx('0') === 0); 

*/



//=============================== task 14 =======================

/*  
  Напиши фукнцию findLongestWord(str), которая принимает 
  параметром произвольную строку и возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы, символы букв и цифр!
*/


// Вызовы функции для проверки
//console.log(
   // findLongestWord("The quick brown fox jumped over the lazy dog")
  //); // 'jumped'
  
  //console.log(
   // findLongestWord("Google do a roll")
  //); // 'Google'
  
  //console.log(
  //  findLongestWord("May the force be with you")
 // ); // 'force'


/*
function findLongestWord(str){
    let str2 = str.split(' ');
    let longestWord = str2[0];
    for (let i = 1; i < str2.length; i += 1) {
      if (str2[i].length > longestWord.length) {
        longestWord = str2[i];
      }
    }
    return longestWord;
  };
  console.log(findLongestWord("May the force be with you"));

*/



//=============================== task 15 =======================


/*  
  Напиши функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/

// Вызовы функции для проверки
//console.log(
    //findLargestNumber([1, 2, 3])
 // ); // 3
  
  //console.log(
  //  findLargestNumber([27, 12, 18, 5])
  //); // 27
  
 // console.log(
  //  findLargestNumber([31, 128, 14, 74])
 // ); // 128
  







//=============================== task 16 =======================

/*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/
/*
const uniqueNumbers  = [2, 1, 4, 9];

// Вызовы функции для проверки
addUniqueNumbers(1, 2, 3);
console.log(
  uniqueNumbers
); // [2, 1, 4, 9, 3]

addUniqueNumbers(12, 2, 3, 19);
console.log(
  uniqueNumbers
); // [2, 1, 4, 9, 3, 12, 19]

addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
console.log(
  uniqueNumbers
); // [2, 1, 4, 9, 3, 12, 19, 5, 8]
*/
/*
const uniqueNumbers  = [2, 1, 4, 9];

function addUniqueNumbers(...arg) {
  let arr = Array.from(arg);
  for (let i = 0; i < uniqueNumbers.length; i =+ 1) {
    if (uniqueNumbers.includes(arr[i]) === true) {
      delete arr[i];
    } 
    else {
      uniqueNumbers.push(arg[i]);
    }
  }; 
  return uniqueNumbers;
}
console.log(addUniqueNumbers(12, 2, 3, 19));
*/

/*
const uniqueNumbers  = [2, 1, 4, 9];

function addUniqueNumbers(...arg){
    for (let key of arg){
        if(!uniqueNumbers.includes(key)){
            addUniqueNumbers.push(key);
        }
    }
    return uniqueNumbers;
}
*/







//=============================== task 17 =======================

/*
  Напиши функцию filterFromArray(arr), которая 
  объявляет 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Функция возвращает новый массив, который содержит только 
  те элементы исходного массива, которые не совпадают 
  ни с одним из числовых аргументов.
*/

/*
const filterFromArray = function(arr,...arg) {
    let newMass = [];
    for (let key of arr){
        if(!arg.includes(key)){
            newMass.push(key);
        }

    console.log(arr)
    console.log(arg)
};
  


// Вызовы функции для проверки
//console.log(
  //filterFromArray([1, 2, 3, 4, 5], 2, 4)
//); // [1, 3, 5]

console.log(
  filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
); // [12, 8, 17]
*/






/*======================================================================*/
/*
let a = [1, 2, 3];
let b = 4, 5, 6;
let c = a.concat(b)
console.log(c)*/
/*

/*
let a = [1, 2, 3];
let b = a.reverse();
console.log(b)
*/

/*
let a = [1, 2, 3];
a.push(4, 5, 6);
console.log(a)
*/

/*
let a = [1, 2, 3];
a.unshift(4, 5, 6);
console.log(a)
*/

/*
let arr = ['js', 'css', 'jq'];
console.log(arr.shift())
*/

/*
let arr = ['js', 'css', 'jq'];
console.log(arr.pop())
*/

/*
let arr = [1, 2, 3, 4, 5];
let b = arr.slice(0,3) // [1, 2, 3]
console.log(b)
*/

/*
let arr = [1, 2, 3, 4, 5];
let b = arr.slice(3) // [4, 5]
console.log(b)
*/

/*
let arr = [1, 2, 3, 4, 5];
arr.splice(1,2);
console.log(arr)
*/

/*
let arr = [1, 2, 3, 4, 5];
arr.splice(0,1);
arr.splice(3,1);
console.log(arr)
*/

/*
let arr = [1, 2, 3, 4, 5];
let b = arr.splice(1,3);
console.log(b)
*/

/*
let arr = [1, 2, 3, 4, 5];
arr.splice(3,0,  'a', 'b', 'c');
console.log(arr)
*/

/*
let arr = [1, 2, 3, 4, 5];
arr.splice(1,0, 'a', 'b')
arr.splice(6,0, 'c')
arr.splice(8,0,'e')
console.log(arr)
*/










/*
let str ='123456';
let a = str.split('').reverse().join('');
console.log(a)
*/

/*
function sqr (a){
   return( a * a )
}
console.log(sqr(10))*/

/*
function add (a, b) { 
return ( a + b)
}
console.log(add(10,12))
*/

/*
function add (a, b, c) {
    return ((a-b)/c)
}
console.log(add(9,3,2))
*/


/*
function add (num){
    let day = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
     return day[num - 1];    
}
console.log(add(1));
*/

/*
let arr = [1, 2, 3, 4, 5, 6, 7, ,8 ,9];
let a = false;
for(let i = 0; i < arr.length; i += 1){
if (arr[i] == 5) {
   a = true;
}
}
if (a == true){
    alert('Yes')
}else{
    alert('No')
}
*/


/*
let a = 31;
let b = false;
for( let i = 2; i > a; i +=1){
    if (a % i === 0 ){
    b = true;
    break;
}

}
if ( b === true){
    alert('True');
}else{
    alert('False')
}*/


/*
let arr = [1, 1, 2, 3, 4, 5, 6, 7, ,8 ,9];
let a = false;
for( let i = 1; i < arr.length; i += 1){
    if(arr[i] == arr[i - 1]){
        a = true;
        break;
    }
}
if ( a === true){
    alert('YES')
}else{
    alert('NO')
}
*/


/*
function compare(a, b) {
	return a === b;
}
console.log(compare(11,10))*/


/*
function sum(a,b){
    return (a + b) > 10
}
console.log(sum(1,1))
*/


/*
function check(a){
    return a < 0
}
console.log(check(-1))
*/

/*
let str = '';
for( i = 1; i < 10; i += 1){
    str += i;
}
console.log(str);
*/

/*
let str = '';
for( i = 9; i > 0; i -= 1){
    str += i;
}
console.log(str);
*/


/*
let str = '-';
for(i = 1; i < 10; i += 1){
    str += i  + '-'
}
console.log(str);
*/