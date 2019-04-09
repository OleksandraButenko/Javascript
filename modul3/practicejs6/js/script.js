'use srtict'

/*
const sum = (...rest) => {
    console.log(rest)
    let totel = 0;
    return 

}
sum (1,2,3,4,5);
*/

/*
const sum = (a,b,c) =>{
    return a + b + c
}
console.log(sum(1,2,3))
*/


/*
function newFn(){  
const newArg = Array.from(arguments);
console.log(newArg)
}
newFn(1,2,3,5,67,1)
*/




/*========= CALLBACK FUNCTION======================*/



/*
function first(callback){
   console.log(1)
   callback()
}

function second(a,b){
    return a + b;
 }

 first(() =>{
return second (2,2)
 });
*/


/*
const printMessage = function (callback) {
    const message = callback();
    console.log( message );
  };
  
  const getMessage = function () {
    return "Welcome to the jungle!";
  }
  
  printMessage(getMessage); // "Welcome to the jungle!"
  */

  /*
  function first (callback){
    setTimeout(function(){
      console.log(1)
  },4000)
  callback ();
}
  function second (a,b){

    console.log(a + b)

}

first (second, 2,2);

first(() => {
    return second (2,2)
});
*/



/*
function first (callback){
    console.log(1)
    callback();
}
function second (){
  console.log(2)

}

first(second);
*/

/*
const map = (arr, callback) => {
    const resultArr = [];
  
    for(const element of arr) {
      const result = callback(element);
      resultArr.push(result);
    }
  
    return resultArr;
  };

  const double = val => val * 2;

const triple = val => val * 3;

const numbers = [1, 2, 3, 4, 5];
*/




/*
const map = function (arr, callback){
    const newMass = [];
    for(const key of arr){
        const result = callback(key)
        newMass.push(result)
    }
   return newMass;
}

const minus = el => el - 5;

const numbers = [1,3,4,8,3,9];


const plus = function(el){
    return el + 5
}


const newMap = map(numbers, minus);
console.log(newMap)

const newPlus = map(numbers,plus);
console.log(newPlus)
*/




/*=====================ЗАМЫКАНИЕ==============*/

/*
function fn(){
  let counter = 0;
   
  function increment(){
      console.log(counter);
      counter ++;
  }
  return increment;
}

const newFn = fn();

newFn();
newFn();
newFn();
newFn();
newFn();


const newFn2 = fn();
newFn2();
newFn2();
newFn2();
newFn2();
newFn2();
*/



/*=======================ОБЪЕКТЫ===========================*/

/*
const about = {
    name: 'Maksim',
    age: 3,
    lastName: 'Norets',
    isActive: {
        run: true
    }
}

about.name = 'Pasha';
about.height = 190;

//delete about.name

///const showUser = (height, num) => about[height] >= num? console.log('Ok'): console.log(' ne Ok')

function show(a, b){
    if(about[a] >= b){
        return true;
    } else{
        return false;
    }
}

console.log(show('height', 190));
*/


/*
let name = 'Maksim';
let age = 3;
let lastName = 'Norets';
let isActive = true;

const about = {
    name : name,
    age : age,
    lastName : lastName,
    isActive : isActive

}

console.log(about)*/


/*===========
//const newObj = about.hasOwnProperty('');
//console.log(newObj)
===========*/


/*
let name = 'Maksim';
let age = 3;
let lastName = 'Norets';
let isActive = true;

const about = {
    name,
    age,
    lastName,
    isActive,
    show(){
        return about.age + 10
        },
     showHeight: function(){
         return about.height -11;
     }
}
console.log(about.show())
console.log(about.showHeight())

*/



/*
const cars = {
    color: 'red',
    wheels: 4,
    doors: 5,
    music: true
}

//for( let key in cars){
    //console.log(cars[key])
//}

const keys = Object.keys(cars);
console.log(keys);

const values = Object.values(cars);
console.log(values)

const entries = Object.entries(cars)
console.log(entries)

for(let key of entries){
    console.log(key);
    let newKey = key[0];
    let newValues = key[1];

    console.log('${newKey}--${newValues}')
}



/*
const cars = {
    color: 'red',
    wheels: 4,
    doors: 5,
    music: true
}

const bmw = {
    wheels: 2,
    doors: 4,
    ego: true
}

const c = {...cars, ...bmw}
console.log(c)

//const showObj = Object.assign(cars, bmw);

//console.log(showObj);
//console.log(cars);
//console.log(bmw)
*/

/*
const cars = {
    color: 'red',
    wheels: 4,
    doors: 5,
    music: true
}

const bmw = {
    wheels: 2,
    doors: 4,
    ego: true
}

const{wheels, doors = 4, ego = false} = bmw;

console.log(wheels);*/





//===========================КОНСТРУКТОРЫ========================
/*
const name = {
  name: 'Maksim',
  getName(){
    console.log(this.name);
  }
}

name.getName()
*/



/*
function fn(){
  return `hello ${this.name}`
}


const itsMe = {
  name: 'Maksim'
}

itsMe.showMe = fn;
console.log(itsMe.showMe())


const newFn = () => console.log(this);
newFn()
*/


//============== THIS =======CALLBACK=================

/*
const itsMe = {
  name: 'Maksim',
  fn(){
    console.log(this)
  }
}

itsMe.fn()
const fnDouble = function(callback) {

  callback()
}

fnDouble(itsMe.fn)
*/


/*
function fnMe(age){
  return `hello ${this.name} ${age}`
}

const Me = {
  name: 'Maksim',
  height: 191
}

//Me.showMe = fnMe;
//console.log(Me.showMe());
//console.log(Me)

console.log(fnMe.call(Me, [11]));
console.log(Me)
*/



//===================BIND=======================
/*const itsMe = {
  name: 'Maksim',
  fn(){
    console.log(this)
  }
}

itsMe.fn()
const fnDouble = function(callback) {

  callback()
}

fnDouble(itsMe.fn.bind(itsMe));
console.log(fnDouble)
*/

/*
function DOUBLE(name, age, height){
  this.name = name;
  this.age =age;
  this.height = height;
  this.plus = function(el){
    return this.age  = this.age + el;
  };
  this.minus = function(){
    this.height -= 10;
    console.log(this.height)
  }
}

const double = new DOUBLE('Maksim', 2, 195);
double.plus(10);
double.minus();
console.log(double);

const triple = new DOUBLE('Pasha', 4, 210);
triple.minus();
triple.plus(30);
console.log(triple)
*/
/*
function SHOP(name, sell = 0, change = 10){

  this.name = name;
  this.sell = sell;
  this.change = change;
  this.plus = function(product){
     this.sell +=1;
     this.change -= 1;
     return `${product}`
  }
   
  this.alarm = function(){
    let counter = 0
    if(this.change <= 6){
      alert('ALARM')
    }
  }

}

const margo = new SHOP('Margo');
margo.plus('iron')
margo.plus('tv')
margo.plus('tv')
margo.plus('tv')
margo.plus('tv')


margo.alarm()
console.log(margo);

*/








/*=======================ЗАДАЧКИ==========================*/

//====================== task01 ==================

//  Выведите на экран зарплату Пети и Коли.
// var obj = {Коля: '1000', Вася: '500', Петя: '200'};


/*
var obj = {'Коля':'1000', 'Вася':'500', 'Петя':'200'};
console.log(obj['Коля']);
console.log(obj['Вася']);
console.log(obj['Петя']);
*/


//====================== task02 ==================

// Дан многомерный массив arr:
/*
 var arr = {
'ru':['голубой', 'красный', 'зеленый'],
	'en':['blue', 'red', 'green'],
};

console.log(arr.ru[0]);
*/

// Выведите с его помощью слово 'голубой'.

//====================== task03 ==================

// Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта:
 /*
var obj = {a: 1, b: 2, c: 3};
console.log(obj['c'])
console.log(obj.c)
*/

//====================== task04 ==================

// Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.
/*
const obj = {'1': 'Monday', '2':'Tuesday', '3':'Wednesday', '4':'Thursday', '5': 'Friday', '6':'Saturday','7':'Sunday'}
console.log(obj['1'])
*/
//====================== task05 ==================

// Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day.
/*
let day = obj['3']
console.log(day)
*/
//====================== task06 ==================

// Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'. Пусть первый ключ содержит элемент, являющийся массивом названий дней недели по-русски, а второй - по-английски. Выведите с помощью этого массива понедельник по-русски и среду по английски (пусть понедельник - это нулевой день)9
/*
var arr = {
    'ru':['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    'en':['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
}

console.log(arr.ru[0], arr.en[0])
*/
//====================== task07 ==================

// Пусть теперь в переменной lang хранится язык (она принимает одно из значений или 'ru', или 'en' - либо то, либо то), а в переменной day - номер дня. Выведите словом день недели, соответствующий переменным lang и day. То есть: если, к примеру, lang = 'ru' и day = 3 - то выведем 'среда'.

/*
let arr = {
	'ru':['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
	'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
let lang = 'ru';
let day = 3;
console.log(arr[lang][day]);
*/

//====================== task08 ==================

/*  
  Напиши скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - заменяет значение premium на false
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/
/*
const user = {
    name: "Mango",
    age: 20,
    hobby: "html",
    premium: true
  };
  

  user.mood = 'happy',
  user.hobby = 'javascript',
  user.premium = false

// const keys = Object.keys(user);
// console.log(keys);

  for ( let key of keys){
    console.log(key);
    let newKey = key[0];
    let newValues = key[1]

    console.log (`${newKey} ${newValue}`)
// }


//const entries = Object.entries(user);
//console.log(entries)

for ( let key of entries){
    console.log(key);
    let newKey = key[0];
    let newValues = key[1]

    console.log (`${newKey} ${newValue}`)
}

*/

//====================== task09 ==================

/*
  Напиши скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/
/*
const tasksCompleted = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  };
  

  let a = 0;
  let name;
  for (let  key in tasksCompleted){
    console.log(key)
    if(a < tasksCompleted[key]){
        a = tasksCompleted[key];
        name = key
    }
  }

  console.log(a)
  //console.log(key)

*/

//====================== task10 ==================

/*  
  Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// Вызовы функции для проверки
/*console.log()
    countProps({})
  ); // 0
  
  console.log(
    countProps({a: 1, b: 3, c: 'hello'})
  ); // 3*/

//====================== task11 ==================

/*  
  Напиши функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

// Вызовы функции для проверки

  /*
  const obj={};

  const isObjectEmpty=(obj)=>Object.keys(obj).length === 0;
  console.log(
    isObjectEmpty({})
  ); // true
  
  console.log(
    isObjectEmpty({a: 1})
  ); // false
  
  console.log(
    isObjectEmpty({a: 1, b: 2})
  ); // false
  */
//====================== task12 ==================

/*  
  Напиши функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
// Вызовы функции для проверки
console.log(
    isObjectEmpty({})
  ); // true
  
  console.log(
    isObjectEmpty({a: 1})
  ); // false
  
  console.log(
    isObjectEmpty({a: 1, b: 2})
  ); // false
  

*/


  //====================== task13 ==================

/*  
  Напиши функцию countTotalSalary(salaries). 
  
  Функция получает объект зарплат и считает общую сумму запрплаты работников.
  Возвращает общую сумму зарплаты.
  
  Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
*/

// Вызовы функции для проверки
/*console.log(
    countTotalSalary({})
  ); // 0
  
  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80
    })
  ); // 330 
  */
/*
let sum = 0;
 const countTotalSalary ={
  mango: 100,
  poly: 150,
  alfred: 80
};
for(let key in countTotalSalary){
  sum += countTotalSalary[key];

  console.log(sum);
}
  */
  //====================== task14 ==================

/*  
  Напиши функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа. 
  Возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/
/*
const users = [
    { name: 'Poly', age: 7, mood: 'happy' },
    { name: 'Mango', age: 4, mood: 'blissful'},
    { name: 'Ajax', age: 3, mood: 'tired' }
  ];
  
  function getAllPropValues(arr, prop) {
    return arr.map(el => el[prop]);
  }

  // Вызовы функции для проверки
  console.log(
    getAllPropValues(users, 'name')
  ); // ['Poly', 'Mango', 'Ajax']
  
  console.log(
    getAllPropValues(users, 'mood')
  ); // ['happy', 'blissful', 'tired']
  
  console.log(
    getAllPropValues(users, 'active')
  ); // []

//====================== task15 ==================

    /*  
 * Расставь отсутствующие this в методах объекта account
*/
/*
const account = {
  owner: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["order-1", "order-2", "order-3"],
  changeDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost;
    this.orders.push(order);
  }
};

account.changeDiscount(0.15);
console.log(account.discount); // 0.15

const orders = account.getOrders();
console.log(orders); // ['order-1', 'order-2', 'order-3']

account.addOrder(5000, "order-4");
console.log(account.balance); // 19000
console.log(account.orders); // ['order-1', 'order-2', 'order-3', 'order-4']
*/


//====================== task16 ==================
/*  
  Напиши функцию-конструкор User для создания 
  пользователя со следующим свойствами:
    - name - строка (имя)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, 
  будут переданы при вызове конструктора User.
  
  Добавь метод getInfo(), который, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`
*/

 //const mango = new User({ name: "Mango", age: 2, friends: 20 });
// mango.getInfo(); // User Mango is 2 years old and has 20 friends

//const poly = new User({ name: "Poly", age: 3, friends: 17 });
//poly.getInfo(); // User Poly is 3 years old and has 17 friends

/*
const User = function({name, age, friends}) {
  this.name = name;
  this.age = age;
  this.friends = friends;
  this.getUserInfo = function() {
    let info = `User ${this.name} is ${this.age} years old and has ${
      this.friends
    } friends.`;
    return console.log(info);
  };
};
const mango = new User({
  name:"Mango", 
  isActive: true,
  age: 2, 
  friends: 20});

const poly = new User({
  name:"Poly",
  age: 3, 
  friends: 17});

mango.getUserInfo();
poly.getUserInfo();
*/

//====================== task17 ==================

/*  
 * Расставь отсутствующие this в конструкторе Account
*/
/*
function Account(login, password, type = "regular") {
    this.login = login;
    this.password = password;
    this.type = type;
  
    this.changePassword = function(newPassword) {
      password = newPassword;
    };
  
    this.getInfo = function() {
      console.log(`
        Login: ${login}, 
        Pass: ${password}, 
        Type: ${type}
      `);
    };
  }
  
  const account = new Account("Mango", "qwe123", "premium");
  
  console.log(account.login); // 'Mango'
  console.log(account.password); // 'qwe123'
  console.log(account.type); // 'premium'
  
  account.changePassword("asdzxc");
  console.log(account.password); // 'asdzxc'
  
  account.getInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'
  */

//====================== task18 ==================

/*  
 * Напиши конструктор Storage(items), который будет создавать объекты для управления складом товаров
 * При вызове будет получать один аргумент - начальный массив товаров, и записываеть его в свойство items
 *
 * Добавь метод getItems, который возвращает массив текущих товаров
 * Добавь метод addItem(item), который получает новый товар и добавляет его к текущим
 * Добавь метод removeItem(item), который получет товар и, если он есть, удаляет его из текущих
*/
/*
const storage = new Storage([
    "Нанитоиды",
    "Пролонгер",
    "Железные жупи",
    "Антигравитатор"
  ]);
  


  const items = storage.getItems();
  console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
  storage.addItem("Др");
  console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
  storage.removeItem("Пролонгер");
  console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

function Storage(items){
  this.items = items


}
