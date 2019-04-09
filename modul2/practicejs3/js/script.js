'use strict';

/*let arr = ['Name', 25, true];

const [name, number, bo] = arr;

console.log(name);
console.log(number);
console.log(bo);


console.log(arr.length);*/





/*const arr = ['Java', 'Javascript', 'python', 'c', 'c++', 'React'];
const inputName = prompt('Enter a name');
arr.length = 3;

let mewMass = [];

if(arr.insludes(inputName)){
    newMass.push(inputName)
}else{
    alert('no')
}
*/
/*arr[2]= 'View';
console.log(arr[1]);*/



/*const word = 'Hello my friends';

const word2 = word.split(' ');

delete word2[1];

console.log(word2.join(' '));
*/



/*const word = 'Hello my friends';

console.log(word.imdexOf('m'));*/




/*const arr = ['Java', 'Javascript', 'python', 'c', 'c++', 'React'];

arr.push('Ruby', 'PHP');
arr.pop();
arr.unshift('PHP');
arr.shift();
console.log(arr);*/



/*const lg = {
            en:['q', 'w', 'e', 'r', 't', 'y'],
            ru: ['й', 'ц', 'у', 'к', 'е', 'н']
        }

console.log(lg.en);
*/



/*const arr = [[1, 2, 3], [4, 5, 6]];
console.log(arr[0][1]);*/




/*const arr = [ 'Javascript', 'python', 'c', 'c++', 'React'];
const newArr = arr.slice();

newArr.splice(2,0,'ruby')

console.log(newArr)
console.log(arr);*/



/*const arr = [ 'Javascript', 'python', 'c', 'c++', 'React'];

const newArr = ['ruby', 'php'];
arr.push('shshsh')

const newMass = arr.concat(newArr);

console.log(newMass);*/





/*const arr = [ 'Javascript', 'python', 'c', 'c++', 'React'];

const newArr = ['ruby', 'php'];

const a = 20;

console.log(newArr.reverse())
*/





//1) Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
/*const arr = ['a', 'b', 'c'];
const newArr = arr.concat([1, 2, 3]);
console.log(newArr)*/


// 2) Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
/*const arr = ['a', 'b', 'c'];
arr.push('1', '2', '3');
console.log(arr);*/

// 3) Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
/*const arr = ['a', 'b', 'c'];
const newArr = arr.concat([1, 2, 3]);
console.log(newArr)*/


// 4) Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
/*const arr = ['a', 'b', 'c'];
const newArr = arr.reverse();
console.log(newArr)*/

// 5) Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
/*const arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);*/


// 6) Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

/*const arr = [1, 2, 3];
arr.unshift(4, 5, 6);
console.log(arr)*/


// 7)  Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.

/*const arr = ['js', 'css', 'jq'];
console.log(arr[1]);*/


// :sunglasses: Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

/*const arr = ['js', 'css', 'jq'];
console.log(arr[2]);*/


// 9) Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

/*const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(0,3));*/


// 10) Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5]. Скрыть решение.

/*const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(3));*/

// 11) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

/*const arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);*/


// 12)  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4]. Показать решение.

/*const arr = [1, 2, 3, 4, 5];
const newArr = arr.splice(1,3);
console.log(newArr);*/

// 13) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5]. Показать решение.
/*const arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, 'a', 'b', 'c');
console.log(arr);*/

// 14) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']. Показать решение. (edited)
/*const arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(6, 0, 'c');
arr.splice(8, 0, 'e');
console.log(arr);*/




// 1) Вибираємо випадкове число (від 0 до довжини масива);
// 2) Записати в змінну звернення типу масив[індекс];
// 3) Вивести змінну з пунтку 2 в алерт;

/*const arr = [1, 2, 3, 4, 5];
const arr2 = Math.floor(Math.random()*arr.length);
console.log(arr[arr2]);*/

// 1) Через prompt вводимо свій варіант тваринки
// 2) Варіант компютера записати в змінну
// 3) Порівнюємо наш варіант з копютерним
// 3,1) Якщо варіанти співпали тоді виводимо алертом що юзер виграва.
// 3,2) Якщо варіанти не співпали кажемо що користувач програв і виводимо варіант компютера.

/*const animal= prompt('Enter an animal name');
const animalName = ['lion', 'wolf', 'monkey'];
let index = Math.floor(Math.random()*animalName.length);
if(animalName[index].includes(animal)){
    alert('good job!')
} else if(index !== animalName[index]) {
    alert('Oops! Try again')
}*/


// Написати гру Камінь Ножиці Папір.
// Варіанти вибору потрібно зберігати в масиві
// Користувач вводить свій варіант
// Компютер вибирає свій рандомний варівант з масиву
// Первіряємо вибір користувача і вибір компютера. 
// Опрацювати всі варіанти:
// 1) Варіанти де виграє користувач
// 2) Варіанти де виграє компютер
// 3) Варіанти де виходить нічия.


/*const log = prompt('Lets play a game');
const game = ['Камень', 'Ножницы', 'Бумага' ];
let index = Math.floor(Math.random()*game.length);
let random = game[index];
console.log(random);
if (log === 'Камень' && random === 'Камень') {
    alert('Ничья')
}else if( log === 'Камень' && random === 'Ножницы'){
    alert('You are a winner')
}else if ( log === 'Камень' && random === 'Бумага'){
    alert('You are a loser !')
}else if(log === 'Ножницы' && random === 'Ножницы') {
    alert('Ничья')
}else if( log === 'Ножницы' && random === 'Камень'){
    alert('You are a winner')
}else if ( log === 'Ножницы' && random === 'Бумага'){
    alert('You are a loser !')
}else if(log === 'Бумага' && random === 'Бумага') {
    alert('Ничья')
}else if( log === 'Бумага' && random === 'Камень'){
    alert('You are a winner')
}else if ( log === 'Бумага' && random === 'Ножницы'){
    alert('You are a loser !')
}else{
    alert('Error! Enter only Камень, Ножницы, Бумага')
}*/


// 1) Записуємо в змінну строку з промта
// 2) Зробити строку масивом
// 3) Скопіювати масив
// 4) Реверсимо масив
// 5) З масивів робимо строки
// 6) Порівнюємо дві строки і виводимо результат в консоль; 

/*let name = prompt('Welcome home!');
let a = name.split(' ');
let b = a.slice();
let c = b.join(' ');
console.log(b);
console.log(c);
*/


// 1) Запитати логін
// 2) Перевірити чи існує логін в базі
// 3) Якщо логін існує вивести алерт ("Такий логін вже існує")
// 4) Якщо логін не існує вивести алерт ("Вітаємо") 

/*const log = prompt('Your login, please');
const logName = ['admin', 'sasha', 'chief' ];
if(log ===null){
    alert('You cancelled your registration. ')
}else if(log === 'admin'){
    alert('This login is already used! Try again!')
}else if(log === 'sasha'){
    alert('This login is already used! Try again!')
}else if(log === 'chief'){
    alert('This login is already used! Try again!')
}else if(log !== logName){
    alert('Congratulations! You can use this login')
}
*/



/*=================================================*/

/*const numbers = [12,33, 56, 2, 6, 45, 90];
const userInput = Number(prompt('Show a number!'));
let hasNumber = false;

for (let i = 0, max = numbers.length; i < max; i += 1) {
    if(numbers[1] === userInput){
        hasNumber = true;
         break;
    }
}
console.log(hasNumber);
const message = hasNumber
? 'Here is your number !'
: 'There is no a such number';

console.log(message);*/


/*
// Сделаем простой счетчик
let counter = 0;

while (counter < 10) {
  console.log("counter: ", counter);
  // запись counter += 1 аналогична counter = counter + 1
  counter += 1;
}

// Будем заполнять места в отеле до тех пор пока
// текущее количество клиентов не будет равно максимально допустимому
let clientCounter = 18;
const maxClients = 25;

while(clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}

// Переберем массив клиентов и выведем их имена
const clients = ["Mango", "Ajax", "Poly"];
let i = 0;

while (i < clients.length) {
  console.log('Logging clients: ', clients[i]);
  i += 1;
}

// С помощью цикла можно заполнять массив данными
const numbers = [];
let num = 0;

while (num < 10) {
  numbers.push(num);
  num += 1;
}




console.log("numbers: ", numbers);
*/

/*for(let i = 0, max = 10; i < max; i += 1) {
    console.log(`${max} % ${i} = `, max % i);
  }*/




/*  const clients = ['Mango', 'Ajax', 'Poly'];

for(let i = 0, max = clients.length; i < max; i += 1) {
  console.log(clients[i]);
}*/

/*const numbers = [];
for(let i = 0; i < 10; i += 1) {
  numbers.push(`number-${i}`);
}
console.log(numbers);
*/




/*// Итерация по массиву
const clients = ['Mango', 'Ajax', 'Poly'];

for(const value of clients) {
  console.log(value);
}
*/


/*
// Итерация по строке
const iterable = 'javascript';
for (const value of iterable) {
  console.log(value);
}*/



/*
const clients = ["Mango", "Poly", "Ajax"];
const clientName = "Poly";
let resultMsg = "";

for (const value of clients) {
  // На каждой итерации мы будем проверять совпадает ли
  // элемент массива с именем клиента.
  // Если совпадает то мы записываем в resultMsg сообщение
  // об успехе и делаем break чтобы не искать дальше

  if (value === clientName) {
    resultMsg = "Клиент с таким именем есть в базе данных!";
    break;
  } 

  // Если они не совпадают то запишем в resultMsg
  // сообщeние об отсутсвии имени
  resultMsg = "Клиента с таким именем нету в базе данных!";
}

console.log(resultMsg); // Клиент с таким именем есть в базе дан*/

/*const number = 10;

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) continue;

  console.log("Нечетное i: ", i); // 1, 3, 5, 7, 9
}*/

