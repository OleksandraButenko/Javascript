'use strict'

// const he = {
//     name: 'Bond',
//     number: 7,
//     getName(){
//         console.log(this.number);
//     }
// }

// he.getName()

// // const she = {
// //     name: 'Julia',
// //     age: 32,
// // }


// const she = Object.create(he)

// she.name = 'Julia';
// she.age = 50;
// she.boobsPower = 4;

// console.log(he);
// console.log(she);

// for(let key in she){
//     if(she.hasOwnProperty(key))
//     console.log(key)
// }



// function DRAGON(name, level) {
//     this.name = name;
//     this.level = level;
// }

// DRAGON.prototype.getLevel = function(el){
//     return this.level += el;
// }


// const dragon = new DRAGON('Bond', 80);
// dragon.getLevel(10);


// // console.log(dragon)

// // const dragon2 = new DRAGON('Julia', 3)
// // console.log(dragon2)


// function DoubleDragon(name, level, weapon){
//     this.weapon = weapon
//     DRAGON.call(this, name, level);

// }

// DoubleDragon.prototype.newName= function(value){
//     return this.name = value;
// }

// const double = new DoubleDragon('Maksim', 9999,'falos');

// double.newName('Ben')
// console.log(double);




// class MyClass{
//   constructor(name, xp, level){
//     this.name = name;
//     this.xp = xp;
//     this.level = level;
//   }

//   getName(){
//       console.log(this.name)
//   }
//    minus(el){
//        return  this.xp -= el
//    }


// }

// const myclass = new MyClass('Bond', 100, 80);

// myclass.getName()
// myclass.minus(10)





// console.log(myclass);


// const doubleClass = new MyClass ('Julia', 20, 60);

// doubleClass.minus(20);

// doubleClass.top = 100;

// delete doubleClass.name;


// console.log(doubleClass instanceof MyClass);
// console.log(doubleClass);






// class MyClass{
//     constructor(name, xp, level){
//       this._name = name;
//       this.xp = xp;
//       this.level = level;
//     }
  
//     getName(){
//         console.log(this._name)
//     }
//      minus(el){
//          return  this.xp -= el
//      }
  
//       doubleSuper(){
//           console.log(`${this.level}`)
//       }

//       get name(){
//           return this._name;
//          }
    
//          set name(value){
//              return this._name = value;
//          }

//           static plus(el){
//               return this.xp +=el;
//           }
//         }

//   console.log(MyClass.plus(120))
//   const myclass = new MyClass('Bond', 100, 80);
//   console.log(myclass.name = 'Maksim');
//   console.log(myclass);





//   class NewClass extends MyClass{
//       constructor(name, xp, level, weapon){
//         super(name, xp, level)
//         this.weapon = weapon;
//       }
//       minul(el){ 
//           return this.xp += el;
//     }
//       newSuper(el){ 
//       super.minus(el)
//       }

//       move(){
//           console.log(`hello ${this.name}`)
//       }
      
//       newSuper(){
//           super.doubleSuper();
//           this.move()
//       }



//   }



//   const myclass = new MyClass('Maksim', 80, 84)

//   console.log(myclass);







//   const newclass = new NewClass('Maksim', 80, 84, 'Iron')
//   newclass.minus(110);
//   newclass.newSuper(50);
//   newclass.minus(100);

//   newclass.newSuper();
//   newclass.move();
//   newclass.doubleSuper();

//   console.log(newclass);


//========================MODUL6 ДОП ЗАДАНИЯ ===================

/*
  Напиши функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email. 
  
  В prototype функции-конструктора добавь метод getInfo(), 
  который выводит в консоль значения полей login и email. 
  
  Обрати внимание, метод всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывесди их в консоль.
*/
// function Account(login, email){
//     this.login = login;
//     this.email = email;
//     Account.prototype.getInfo = function(){
//         console.log(this.login, this.email)
//     }
// }
// const account = new Account('Mangozedog', 'mango@dog.woof');

// console.log(Account.prototype.getInfo); // function
// account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof






/*
  Напиши ES6 класс StringBuilder.
  
  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в свойство _value.
  
  Добавь классу следующие методы:
  
    - геттер value - возвращает текущее значение поля _value
  
    - append(str) - получает парметр str (строку) и добавляет ее в конец _value
    
    - prepend(str) - получает парметр str (строку) и добавляет ее в начало value
  
    - pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
*/

// class StringBuilder{
//   constructor(str){

//     this._value = str;


//   }
//    get value(){
//      return this._value;
//    }
//    append(str){
//        return this._value += str;
//    }
//    prepend(str){
//        return this._value = str += this._value;
//    }
//    pad(str){
//       return this._value = str + this._value + str;
//    }
//   }
// console.log(StringBuilder.prototype)
//  const builder = new StringBuilder('.');

// builder.append('^'); 
// console.log(builder.value); // '.^'

// builder.prepend('^'); 
// console.log(builder.value); // '^.^'

// builder.pad('='); 
// console.log(builder.value); // '=^.^='









// /*
//  * Напиши класс Car с указанными свойствами и методами
// */

// class Car {
//   constructor({ maxSpeed = 0, speed=0, running= false, distance = 0,price }) {
//     this.maxSpeed = maxSpeed;
//     this.speed = speed;
//     this.running = running;
//     this.distance = distance;
//     this.price = price}
//     /*
//       Добавь свойства:
//         - speed - для отслеживания текущей скорости, изначально 0.
//         - maxSpeed - для хранения максимальной скорости 
//         - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
//         - distance - содержит общий киллометраж, изначально с 0
//     */
  


//   turnOn(running) {
//        return this.running = true
      
//       }
// //     // Добавь код для того чтобы завести автомобиль
// //     // Просто записывает в свойство running значание true
  

//     turnOff(running) {
//          return this.running = false
// //     // Добавь код для того чтобы заглушить автомобиль
// //     // Просто записывает в свойство running значание false
//    }

//      accelerate(spd) {
//        if (this.spd <= this.maxSpeed) {
//          this.speed = spd;
//          return this.speed
//        };
// //     // Записывает в поле speed полученное значение, при условии что
// //     // оно не больше чем значение свойства maxSpeed
//    }

//      decelerate(spd) {
//        if (this.speed < this.maxSpeed && this.speed > 0){
//          return this.speed
//        };
// //     // Записывает в поле speed полученное значение, при условии что
// //     // оно не больше чем значение свойства maxSpeed и не меньше нуля
//    }

//   drive(hours) {
//    if (this.distance = hours * this.speed){
//    }
//    else if(this.running){  
//        return this.distance

//     // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//     // но только в том случае если машина заведена!
//    }
//    }

//    static getSpecs(el){
//       console.log(`${el.speed}, ${el.maxSpeed}, ${el.running}, ${el.distance}`);
//    }
     
//    get value(){
//      return this.price;
//    }

//    set value(value) {
//     this.price = value;
//   }
  
// }




//  /*
// * Добавь к классу Car из предыдущего задания статический
// * метод getSpecs, который принимает объект-машину как параметр
// * и выводит в консоль значения полей maxSpeed, speed, running и distance.
// */
// // const car = new Car({ maxSpeed: 100 });
// // car.turnOn();
// // car.accelerate(50);
// // car.drive(2);
// // Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100



// /*
// * Добавь классу Car свойство цены автомобиля, назови его сам.
// * Добавь геттер и сеттер value, который будет работать с свойством цены автомобиля.
// */
// const car = new Car({ maxSpeed: 50, price: 2000 });
// console.log(car.value); // 2000
// car.value = 4000;
// console.log(car.value); // 4000
// console.log(car)










//====================================================HOMEWORK======================================================


/*
  Сеть фастфудов предлагает несколько видов гамбургеров.
  Основа (булочка) гамбургера может быть большой или маленькой (обязательно):
	- маленькая (+30 денег, +50 калорий)
	- большая (+50 денег, +100 калорий)
  Гамбургер может быть с одной из нескольких видов начинок (обязательно):
	- сыром (+15 денег, +20 калорий)
	- салатом (+20 денег, +5 калорий)
	- мясом (+35 денег, +15 калорий)
  Дополнительно, гамбургер можно:
	- посыпать приправой (+10 денег, +0 калорий)
	- полить соусом (+15 денег, +5 калорий)
  Напишите скрипт, расчитывающий стоимость и калорийность гамбургера. Используте ООП подход,
  создайте класс Hamburger, константы, методы для выбора опций и рассчета нужных величин.
  Написанный класс должен соответствовать следующему jsDoc описанию. То есть класс должен содержать
  указанные методы, которые принимают и возвращают данные указанного типа.
*/

/**
 * Класс, объекты которого описывают параметры гамбургера.
 */
// class Hamburger {
//   /**
//    * @constructor
//    * @param {String} size - Размер
//    * @param {String} stuffing - Начинка
//    */
//   constructor(size, stuffing) {
//     this._size = size;
//     this._stuffing = stuffing;
//     this._toppings = [];
//   }

//   /**
//    * Добавить topping к гамбургеру. Можно добавить несколько topping, при условии, что они разные.
//    * @param {String} topping - Тип добавки
//    */
//   addTopping(topping) {
//     if(this._toppings.includes(topping)){ 
//       return 
//     }

//     this._toppings.push(topping)
//     console.log(this.toppings)
//   }

//   /**
//    * Убрать topping, при условии, что она ранее была добавлена
//    * @param {String} topping - Тип добавки
//    */
//   removeTopping(topping) {
//     if(this._toppings.includes(topping)){
//       this._toppings = this._toppings.filter(el => el !== topping)
    
//   }
 
//   console.log(this._toppings);
// }
//   /**
//    * Получить список toppings
//    * @returns {Array} - Массив добавленных topping, содержит значения констант Hamburger.TOPPING_*
//    *
//    * Попробуйте сделать это геттером чтобы можно было обращаться как obj.toppings и нам вернет массив добавок
//    */
//    getToppings() {
//      return this._toppings;
//    }

//   /**
//    * Узнать размер гамбургера
//    * @returns {String} - размер гамбургера
//    *
//    * Попробуйте сделать это геттером чтобы можно было обращаться как obj.size и нам вернет размер
//    */
//   getSize() {
//     return this._size;
//   }

//   /**
//    * Узнать начинку гамбургера
//    * @returns {String} - начинка гамбургера
//    *
//    * Попробуйте сделать это геттером чтобы можно было обращаться как obj.stuffing и нам вернет начинку
//    */
//   getStuffing() {
//     return this._stuffing;
    
//   }

//   /**
//    * Узнать цену гамбургера
//    * @returns {Number} - Цена в деньгах
//    *
//    * Попробуйте сделать это геттером чтобы можно было обращаться как obj.price и нам вернет сумму.
//    */
// calculatePrice() {
  
//     let sizePrice = Hamburger.STUFFINGS[this._stuffing].price;
    
//     let stuffingPrice =  Hamburger.SIZES[this._size].price;

  
//     let toppingPrice = this._toppings.reduce((acc, el) => acc + Hamburger.TOPPINGS[el].price,0);
  
// return ( sizePrice + stuffingPrice + toppingPrice)

//  }

//   /**
//    * Узнать калорийность
//    * @returns {Number} - Калорийность в калориях
//    *
//    * Попробуйте сделать это геттером чтобы можно было обращаться как obj.calories и нам вернет сумму.
//    */
//   calculateCalories() {

//     let sizeCalories = Hamburger.STUFFINGS[this._stuffing].calories;
//     //console.log(sizeCalories);

//     let stuffingCalories = Hamburger.SIZES[this._size].calories;
//     //console.log(stuffingCalories);

//     let toppingCalories = this._toppings.reduce((acc, el) => Hamburger.TOPPINGS[el].calories,0);

//     return ( sizeCalories + stuffingCalories + toppingCalories)
//   }
// }

// /*
//   Размеры, виды добавок и начинок объявите как статические поля класса.
//   Добавьте отсутсвующие поля по аналогии с примером.
// */
// Hamburger.SIZE_SMALL = 'SIZE_SMALL';
// Hamburger.SIZE_LARGE = 'SIZE_LARGE';

// Hamburger.SIZES = {
//   [Hamburger.SIZE_SMALL]: {
//     price: 30,
//     calories: 50,
//   },
//   [Hamburger.SIZE_LARGE]: {
//     price: 50,
//     calories: 100,
//   }
// };

// Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
// Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
// Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';

// Hamburger.STUFFINGS = {
//   [Hamburger.STUFFING_CHEESE]: {
//     price: 15,
//     calories: 20,
//   },
//   [Hamburger.STUFFING_SALAD]: {
//     price: 20,
//     calories: 5,
//   },
//   [Hamburger.STUFFING_MEAT]: {
//     price: 35,
//     calories: 15,
//   }

// };

// Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
// Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE'

// Hamburger.TOPPINGS = {
//   [Hamburger.TOPPING_SPICE]: {
//     price: 10,
//     calories: 0,
//   },
//   [Hamburger.TOPPING_SAUCE]: {
//     price: 15,
//     calories: 5,
//   }
  
// };

// /* Вот как может выглядеть использование этого класса */

// // Маленький гамбургер с начинкой из сыра
// const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// // Добавка из приправы
// hamburger.addTopping(Hamburger.TOPPING_SPICE);

// // Спросим сколько там калорий
// console.log("Calories: ", hamburger.calculateCalories());

// // Сколько стоит?
// console.log("Price: ", hamburger.calculatePrice());

// // Я тут передумал и решил добавить еще соус
// hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// // А сколько теперь стоит?
// console.log("Price with sauce: ", hamburger.calculatePrice);

// // Проверить, большой ли гамбургер?
// console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false

// // Убрать добавку
// hamburger.removeTopping(Hamburger.TOPPING_SPICE);

// // Смотрим сколько добавок
// console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1

// /*
//   🔔 Обратите внимание на такие моменты:
//     	✔️ класс не взаимодействует с внешним миром. Это не его дело, этим занимается
//     		другой код, а класс живет в изоляции от мира
//     	✔️ обязательные параметры (размер и начинка) мы передаем через конструктор,
// 		чтобы нельзя было создать объект, не указав их
//     	✔️ необязательные (добавка) добавляем через методы
//     	✔️ типы начинок обозначены "константами" с понятными именами (на самом деле просто
// 	    	свойствами, написанным заглавными буквами, которые мы договорились считать "константами")
//     	✔️ объект создается через конструктор - функцию, которая задает начальные значения полей.
//     	✔️ в свойствах объекта гамбургера логично хранить исходные данные (размер, тип начинки),
//       		а не вычисленные из них (цена, число калорий и т.д.). Рассчитывать цену и калории
// 		логично в тот момент, когда это потребуется, а не заранее.
// */

