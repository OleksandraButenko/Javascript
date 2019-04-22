'use strict';


//let text = document.getElementsById('text');

//let doubleText = document.getElementsByClassName('doubleText')

//text.style.color = 'red';

//console.log(text.textContent= 'new text');


//--------------------------------------------------------------------------

let text = document.querySelector('div');

let text = document.querySelectorAll('div');

console.log(text.textContent);

//-------------------------------------------------------------------

console.log(list.children);
console.log(list.firstElementChild.textContent = 'first');


//--------------------------------------------------------------------------
let list = document.querySelector('.list');
function fn(el){
    //let newMass = Array.from(list.children);
    //------or--------
    let newMass = [...el].map(el => el.textContent );
    return newMass
      
}

let copyMass = fn (list.children)


console.log(copyMass);





const element = document.createElement('ul');

const body = document.body;

body.prepend(element);

let getli = copyMass.reduce((string, el)=> string + `<li>${el}</li>`,'');


element.innerHTML = getli;




//---------------------------------------input-------------------------------------------



let textInput = document.querySelector('.text');
let Input = document.querySelector('.input');
let btn = document.querySelector('.btn')

console.log(btn)


btn.onclick = function(){

    if(Input.value.length  > 0 ){   
        textInput.textContent = Input.value



    textInput.style.color ='red';
    textInput.style.fontSize ='100px';
   // console.log(Input.value)
}
}


function click(){
    if(Input.value.length  > 0 ){   
                textInput.textContent = Input.value
        
        
        
            textInput.style.color ='green';
            textInput.style.fontSize ='100px';
         
        }
        }
btn.addEventListener('click', click);



//---------------------------------------------------------------------------


let forward = document.querySelector('.forward');
let back = document.querySelector('.back');
let images = document.querySelectorAll('.images img');

let double = document.querySelector('.images img');
console.log(double.children);

console.log(images);

let i = 0

forward.onclick = function(){
  // images[i].style.display = 'none';
  images[i].className = '';
   i = i + 1;
 
     if(i >= images.length){
         i = 0
     }
       images[i].className = 'showed'
  
}



back.onclick = function(){
    images[i].style.display = 'none';
    images[i].className = '';
    i -= 1;
  
      if(i < 0 ){
          i = images.length -1
      }
        images[i].style.display = 'block'
        images[i].className = 'showed'
   
 }





//----------------------------------ДОПОЛНИТЕЛЬНЫЕ ЗАДАНИЯ---------------------------------
//----------------------------------------ЗАДАНИЕ 1-------------------------------------
/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/

//  const items = document.querySelectorAll('.categories > li')
//  items.forEach(item => {
//     console.log('Категория:', item.firstChild);

//     console.log('Количество вложенных li:', item.firstElementChild.children.length);
//  })




 //----------------------------------------ЗАДАНИЕ 2-------------------------------------
/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/
//  const list = document.querySelector('.list');
//  console.log (list);
//  console.log(list.firstElementChild.style.color = 'red');
//  console.log(list.lastElementChild.style.color = 'blue');





//--------------------------------------------P-R-A-C-T-I-C-E-------------------------------------

// let createNew = document.createElement('p');
// let createImg = document.createElement('img');


// createImg.setAttribute('src', 'https://sh-s7-live-s.legocdn.com/is/image/LEGOMKTG/email-subscription-thank-you--gl--201606')
// createImg.setAttribute('alt', 'LEGO IMG')
// console.log(createImg.alt)

// createNew.innerHTML = 'Hello'
// createNew.className = 'text'
// createNew.style.fontSize = '40px'
// console.log(createNew);
// createNew.innerHTML += `<a href = "#">Click</a>`

// let body = document.body;
// console.log(createNew);

// body.prepend(createNew)
// body.append(createImg)




//----------------------------------------ЗАДАНИЕ 3-----------------------------------


/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

// const list = document.querySelector('.list');
// let newList =elements.reduce((acc,el) => acc + `<li>${el}</li>`, "");
// list.innerHTML = newList;
// console.log(list);

//-----------------------------------------ЗАДАНИЕ 4---------------------------------------------

/*
  Напишите скрипт для создания галлереи изображений. 
  
  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/

const galleryItems = [
    {
      url:
        "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat"
    },
    {
      url:
        "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish"
    },
    {
      url:
        "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Two Brown Hen and One Red Rooster"
    },
    {
      url:
        "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Group of Horses Running"
    },
    {
      url:
        "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Macaw Birds"
    },
    {
      url:
        "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "2 Lion on Grass Field during Daytime"
    }
  ];

  
  let list = document.querySelector('.gallery');

  console.log(list);

  galleryItems.forEach(el => {
    list.innerHTML += `<li><img src='${el.url}' alt='${el.alt}' width = 300 height = 200></li>`;
  });
  list.style.listStyle = 'none';
  list.style.display = 'flex';






//-----------------------------------------ЗАДАНИЕ 5---------------------------------------------
  /*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/

// const newArr = [];
// let listItem = document.querySelectorAll('.size-filter input');

// listItem.forEach(el => {
//   el.hasAttribute('checked') ? newArr.push(el) : null;
// });

// console.log(newArr);

// const collectInputData = inputs => {
//   return inputs.map(el => el.value);;
// }

// console.log(collectInputData(newArr));



//----------------------------------------------ЗАДАНИЕ 6---------------------------------------------
/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/



// let createNew = document.createElement('');


// let body = document.body
// let div = document.createElement('div');
// let div2 = document.createElement('div');
// let image = document.createElement('img');
// let title = document.createElement('h2');
// let text1 = document.createElement('p');
// let text2 = document.createElement('p');
// let text3 = document.createElement('p');
// console.log(body)
// body.prepend(div2);
// div2.prepend(div);
// div2.prepend(image);
// div.prepend(title);
// div.append(text1);
// div.append(text2);
// div.append(text3);

// image.setAttribute('src', 'http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg');

// div2.className = 'movie';
// div.className = 'movie__body';
// image.className = 'movie__image';
// title.className = 'movie__title';
// text1.className = 'movie__description';
// text2.className = 'movie__date';
// text3.className = 'movie__rating';


// title.textContent = 'The Godfather';
// text1.textContent = `Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the
// would-be killers, launching a campaign of bloody revenge.`;
// text2.textContent = 'Released: 1972-03-14';
// text3.textContent = 'Rating: 8.6';





//----------------------------------------------ЗАДАНИЕ 7---------------------------------------------

/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/

// const list = document.querySelector("#root");

// const createBoxes = num => {
//   let j = 30;
//   for (let i = 0; i < num; i++) {
//     const createDiv = document.createElement("div");
    
//     function getRandomInt(min, max) {
//        return Math.floor(Math.random() * (max - min + 1)) + min;
//         }
//     let r = getRandomInt(0, 255);
//     let g = getRandomInt(0, 255);
//     let b = getRandomInt(0, 255);
    
//     createDiv.setAttribute("style", `width:${j}px; height:${j}px; background-color: rgb(${r}, ${g}, ${b})`);
//     list.append(createDiv);
//     j += 10;
//   }
// };


// createBoxes(5);


//----------------------------------------------HOME WORK---------------------------------------------

/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

// const posts = [
//     {
//       img: "https://placeimg.com/400/150/arch",
//       title: "Post title 1",
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
//       link: 'link-1.com'
//     },
//     {
//       img: "https://placeimg.com/400/150/nature",
//       title: "Post title 2",
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
//       link: 'link-2.com'
//     },
//     {
//       img: "https://placeimg.com/400/150/arch",
//       title: "Post title 3",
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
//       link: 'link-3.com'
//     }
//   ];

//   function createPostCard(post) {

//     let root = document.querySelector("#root");
  

//     let card = document.createElement("div");
//     let cardImage = document.createElement("img");
//     let cardBody = document.createElement("div");
//     let cardTitle = document.createElement("h2");
//     let cardText = document.createElement("p");
//     let cardLink = document.createElement("a");
  

//     card.classList.add("card");
//     cardImage.classList.add("card__image");
//     cardBody.classList.add("card__body");
//     cardTitle.classList.add("card_title");
//     cardText.classList.add("card__text");
//     cardLink.classList.add("card__link");
  
  
//     cardImage.setAttribute("src", post.img);
//     cardLink.setAttribute("href", "#");
  

//     cardTitle.textContent = post.title;
//     cardText.textContent = post.text;
//     cardLink.textContent = post.link;
  

//     root.append(card);
//     card.append(cardImage);
//     card.append(cardBody);
//     cardBody.append(cardTitle);
//     cardBody.append(cardText);
//     cardBody.append(cardLink);
//   }
  
//   function createCards(posts) {
//     posts.forEach(element => {
//       createPostCard(element);
//     });
//   }
  
//   createCards(posts);