'use strict'



//-------------------------------------------JSON---------------------------------


// const about = {
//    name: 'Maksim',
//    isActive: true,
//    hobby: {
//        run: true,
//        jump: false,
//    }
// }
// //console.log(about);

// const jasonAbout = JSON.stringify(about)
// console.log(jasonAbout);

// const parseAbout = JSON.parse(jasonAbout)
// console.log(parseAbout);


//---------------------------------------FETCH-------------------------------------

// console.log('first')

// fetch('https://api.myjson.com/bins/k9i31')
//       .then(response  => response.json())
//       .then(data => console.log(data));
      
//     //   .catch()

//     console.log('second')


//-------------------------------------------------------------------------------------

// console.log('first')

// let newDate;

// fetch('https://api.myjson.com/bins/k9i31')
//       .then(response  => response.json())
//       .then(data => {
//           let num = document.querySelector('.num')
//           num.textContent = data.age;
//       });


//     setTimeout(function(){
//         console.log(newDate);
        
//     },300)
      
//     //   .catch()
//     console.log('second')


//--------------------------------------------------------

// fetch('https://api.myjson.com/bins/k9i31')

// function returnFetch(){
//    return  fetch
//           .then(response  => response.json())
// }
// returnFetch(). then(data =>{ 
// let num = document.querySelector('.num')
// num.textContent = data.age;
// })

//-------------------------------------------------------------
// const url = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11'
// fetch(url)

//           fetch(url)
//           .then(response  => {
//               if(response.ok) return response.json()

//               throw new Error('Error')
//           })
//           .then(data => console.log(data))
//           .catch( err => console.error('ERROR!!!', err))



//--------------------------------------------------------------------------



// function getPost(what, posts){
//     return fetch(`https://jsonplaceholder.typicode.com/${what}/${posts}`)
//          .then(response => response.json())
        
// }

// getPost("albums", 9).then(data => console.log(data.title, data.id))



//------------------------------------CRUD- POST-------------------------------------------

// const newObj ={
//       name: 'Bond',
//       number: '007',
//       car: { 
//           first: 'Jaguar',
//           second: 'Aston' 
//     },
//      kill: true
// }

// const url  = 'https://jsonplaceholder.typicode.com/posts'

// const settings = {
//     method : "POST",
//     body: JSON.stringify(newObj),
//     headers: {
//         "Content-type": "application/json"
//     }
// }
// fetch(url,settings)
// .then(response => response.json())
// .then(data => console.log(data))




//------------------------------------CRUD- PUT  (UPDATE)-------------------------------------------


// const newObj ={
//     name: 'Bond',
//     number: '007',
//     car: { 
//         first: 'Jaguar',
//         second: 'Aston' 
//   },
//    kill: true
// }

// const url  = 'https://jsonplaceholder.typicode.com/posts'

// const settings = {
//   method : "POST",
//   body: JSON.stringify(newObj),
//   headers: {
//       "Content-type": "application/json"
//   }
// }
// fetch(url,settings)
// .then(response => response.json())
// .then(data => console.log(data))




// const putObj = {
//     title: 'happy title'
// }

// const putSettings ={
//     method: "PUT",
//     body: JSON.stringify(putObj),
//     headers:{
//         "Content-type": "application/json"
//     }
// }

// fetch('https://jsonplaceholder.typicode.com/posts/3', putSettings)
// .then(response => response.json())
// .then(data => console.log(data))


// fetch('https://jsonplaceholder.typicode.com/posts/3', {method: "DELETE"})
// .then(response => response.json())
// .then(data => console.log('Delete!!!!!!!'))



//-------------------------------------LOCAL STORAGE---------------------------------

// localStorage.setItem('login', 'Maksim')
// localStorage.setItem('log', 'Bond')

// localStorage.removeItem('login')

//---------------------------------------


// const newLocal = {
//     name: 'Bond',
//     job: 'killer'
// }


// let getKey = localStorage.getItem('log')
// console.log(getKey);



//-------------------------------------------------------


// const newLocal = {
//     name: 'Bond',
//     job: 'killer'
// }

// newLocal.name = 'Jean'
// console.log(newLocal);

// let newkey = localStorage.setItem('about',JSON.stringify(newLocal))

// let result = JSON.parse(localStorage.getItem('about'));
// console.log(result.name, result.job);

//localStorage.clear()

//---------------------------------ПАФОСНАЯ ЗАПИСЬ-------------------------

// let text = document.querySelector('.text'),
//     input = document.querySelector('.input'),
//     btn = document.querySelector('.btn');


//  function writeLocal(){
//     localStorage.setItem('about',input.value)
//     getLocal()
    
//  }   

//  function getLocal(){
//     text.textContent = localStorage.getItem('about', '')

//  }

//  getLocal()

//  btn.addEventListener('click', writeLocal)



//-----------------------------------------------------------TASK 1---------------------
/*
  Написать функцию fetchCountryData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны
  
  Все необходимые данные есть в ответе от API.
  
  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");
// const API_URL = "https://restcountries.eu/rest/v2/name/";


// function fetchCountryData(evt) {
//  evt.preventDefault()
//  fetch(API_URL + input.value)
// .then(response => {
//     if(response.ok) return response.json()

//     throw new Error('Error')
// })
// .then(data => console.log(data.forEach(el => result.innerHTML = `<p>${el.name}</p> 
//                                                                  <p>${el.capital}</p>
//                                                                  <p>${el.flag}</p>
//                                                                  <p>${el.currencies[0].name}</p>`
          
//                                                                 )))
 //  .catch( err => console.error('ERROR!!!', err))
// }

// form.addEventListener("submit", fetchCountryData);


//-----------------------------------------------------------TASK 2------------------------------

/*
  Написать функцию fetchUserData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.
*/

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");
// const API_URL = " https://api.github.com/users/";


// function fetchUserData(evt) {
//     evt.preventDefault()
//     fetch(API_URL + input.value)
//     .then(response => {
//           if(response.ok) return response.json()
      
//           throw new Error('Error')
//       })
//     .then(data => result.innerHTML = `<p>Avatar: <img src="${
//       data.avatar_url
//     }" alt="avatar user" style="height:50px";></p>
//       <p>Username: ${data.name}</p>
//       <p>Bio: ${data.bio}</p>
//       <p>Public repos: ${data.public_repos}</p>`)


//     .catch( err => console.error('ERROR!!!', err))
    
// }

// form.addEventListener("submit", fetchUserData);


// function updateUI(data) {
//   result.innerHTML = `<p>Avatar: <img src="${
//     data.avatar_url
//   }" alt="avatar user" style="height:50px";></p>
//     <p>Username: ${data.name}</p>
//     <p>Bio: ${data.bio}</p>
//     <p>Public repos: ${data.public_repos}</p>`;
// }


//-----------------------------------------------------------TASK 3------------------------------

/*
  Документация API: https://jsonplaceholder.typicode.com/

  Просмотр всех пользователей: https://jsonplaceholder.typicode.com/users/ 

  Написать функцию fetchUsers, которая посылает get запрос.
  Результатом fetch будет массив объектов.
  
  В таблицу .user-table добавить строки для каждого пользователя.
  Каждая строка состоит из 5-ти столбцов указанного формата.
  Кол-во строк будет такое как и кол-во объектов пользователей в ответе.
  
    Имя | Почта | Город | Вебсайт | Компания
    Имя | Почта | Город | Вебсайт | Компания
    и так далее для каждого пользователя...
*/

// const form = document.querySelector(".search-form");
// const userTable = document.querySelector(".user-table");
// const getBtn = document.querySelector(".js-get");



// function fetchUsers(evt) {
//     evt.preventDefault()
//   fetch('https://jsonplaceholder.typicode.com/users/')
//   .then(response => {
//     if(response.ok) return response.json()
    
//     throw new Error('Error')
//      })
//   .then(data => {
//     console.log(data); 
//     data.reduce((acc, el) => 
//     userTable.innerHTML = acc + 

//       `<tr>
//           <th>Имя ${el.name}</th>
//           <th>Почта ${el.email}</th>
//           <th>Город ${el.address.city}</th>
//           <th>Вебсайт${el.website}</th>
//           <th>Компания${el.company.name}</th>
//       </tr>`, ''
  
//   )})
//   .catch(err => console.error('Error', err))
// }


// form.addEventListener("submit", fetchUsers)

//----------------------------------------------------TASK 4---------------------------------------------

/*
  Документация API: https://jsonplaceholder.typicode.com/

  Написать функцию getUserById, которая посылает запрос 
  на получение информации о пользоватеьте с id (число) введенным в input. 
  Не забывайте что значение input это строка.
 
  Объект что придет в ответе используйте для вывода информации
  о пользователе в элементе .result
  
  Если пользователя с таким идентификатором в базе данных нет,
  в элемент .result вывести строку "Ошибка! Пользователя с таким id не существует"
*/

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");



// function getUserById(evt) {
//   const API_URL = `https://jsonplaceholder.typicode.com/users/${input.value}`;
//   evt.preventDefault()
//   fetch(API_URL)
//   .then(response => {
//     if(response.ok) return response.json()
    
//     throw new Error( result.innerHTML = '<p>Ошибка! Пользователя с таким id не существует</p>')
//      })
//    .then(data => result.innerHTML = `<p>Имя ${data.name}</p>
//                                     <p>Логин ${data.username}</p>
//                                     <p>Почта ${data.email}</p>
//                                             `)
//   .catch(err => console.error("ERROR!", err))
// }

// form.addEventListener("submit", getUserById);



//----------------------------------------------------HOMEWORK---------------------------------------------

/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/


// const input = document.querySelector('input')
// const form = document.querySelector(".search-form")
// const allUser = document.querySelector('.btn')
// const byId = document.querySelector('.user-by-ID')
// const add = document.querySelector('.add')
// const remove = document.querySelector('.remove')
// const update = document.querySelector('.update')

// const result = document.querySelector(".result");
// const URL_API =  'https://test-users-api.herokuapp.com/users/'


// function getAllUsers(event){
//   event.preventDefault()
//    fetch(URL_API)
//    .then(response => {
//     if(response.ok) return response.json()

//     throw new Error( result.innerHTML = '<p>Ошибка! Пользователя с таким id не существует</p>')
//      })

//   .then(data => { data.data.reduce((acc, el)  =>  result.innerHTML = acc + `<p>${el.name}</p>
//                                                               <p>${el.age}</p>
//                                                               <p>${el.id}</p>`, ''
                                                          
          
//     )})
// }

// allUser.addEventListener("click", getAllUsers);



// function getUserById(event){
//   event.preventDefault()
//   fetch(URL_API + input.value)
//   .then(response => {
//    if(response.ok) return response.json()

//    throw new Error( result.innerHTML = '<p>Ошибка! Пользователя с таким id не существует</p>')
//     })
//   .then(data => result.innerHTML =`<p>${data.data.name}</p>
//                                    <p>${data.data.age}</p>
//                                    <p>${data.data.id}</p>`
// )
// }

// byId.addEventListener("click", getUserById);







// function addUser(event){
//   event.preventDefault()

//   const newUser = {
//     name: 'Jean',
//     age: '26',
//   }
  
//   const settings ={
//       method: "POST",
//       body: JSON.stringify(newUser),
//       headers:{
//           "Content-type": "application/json"
//       }
//   }
//   fetch(URL_API,settings)
// .then(response => response.json())
// .then(data => result.innerHTML = `<p>${data.data.name}</p>
//                                    <p>${data.data.age}</p>
//                                    <p>${data.data.id}</p>`)

  
//   }

//  add.addEventListener("click", addUser);





//  function  removeUser (event){
//   event.preventDefault() 
//   fetch(URL_API + input.value,
//      {method: "DELETE"})
// .then(response => response.json())
// .then(() => console.log('You have deleted a user'))
//  }

//  remove.addEventListener("click", removeUser);




//  function updateUser (event){
//   event.preventDefault()

//   const newUpdate = {
//     name: 'Sasha',
//     age: '25',
//   }
//   fetch(URL_API + input.value, 
//     {method: 'PUT',
//    body: JSON.stringify(newUpdate),
//    headers : {
//      'Content-type' : 'application/json'
//     }
//   })
//  }

//  update.addEventListener("click", updateUser);