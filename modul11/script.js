'use strict'

// const about = [{
//     img: 'https://pmcvariety.files.wordpress.com/2014/07/roger-moore-dead.jpg?w&#x3D;1000&amp;h&%23x3D;563&amp;crop&%23x3D;1',
//     name: 'Bond',
//     about: 'Agent',
//     work: 'killer',
//     done: false
// },
//  {img: 'https://www.androidcentral.com/sites/androidcentral.com/files/styles/xlarge/public/article_images/2018/09/spider-man-ps4-promo-image.jpg?itok=s4NGKvS2',
//     name: 'Spiderman',
//     about: 'Agent',
//     work: 'killer',
//     done: false
// },
//  {img: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/02/1484222978-deadpool.jpg?resize=480:*',
//     name: 'Deadpool',
//     about: 'Agent',
//     work: 'killer',
//     done: true
// }
// ]

//  const box = document.querySelector('#box').innerHTML.trim()
//  const list = document.querySelector('.list')
//  const compik = Handlebars.compile(box)

//  const res = compik(about)
// //  about.forEach( el=>  list.insertAdjacentHTML('afterbegin', compik(el)))


//  //console.log(res)

//  list.insertAdjacentHTML('afterbegin', res)
 



 //-------------------------------------------TASK 1--------------------------------------------

 /*
* К pen уже подключен Handlebars.
* Используй встроенные шаблоны и метод Handlebars.compile
* 
* Создай шаблон элемента списка указаного на вкладке HTML.
* Отрендери список в DOM по данным из массива products.
*/

// const products = [
//     { name: "Apples", quantity: 50 },
//     { name: "Grapes", quantity: 44 },
//     { name: "Cheese", quantity: 128 },
//     { name: "Milk", quantity: 93 }
//   ];
  
//    const box = document.querySelector('#box').innerHTML.trim()
//    const list = document.querySelector('.products')
//    const compik = Handlebars.compile(box)

//     const res = compik(products)


//   console.log(res)

//  list.insertAdjacentHTML('afterbegin', res)




 //-------------------------------------------TASK 2--------------------------------------------


 /*
 * К pen уже подключен Handlebars.
 * Используй встроенные шаблоны и метод Handlebars.compile
 * 
 * Создай шаблон поста указаного на вкладке HTML.
 * Отрендери список постов в DOM по данным из массива posts.
 * 
 * Если в объекте поле favourite=true, в посте должна быть 
 * разметка иконки избранного поста, в противном случае,
 * разметки иконки быть не должно.
*/

const posts = [
    {
      title: "Phasellus volutpat metus",
      text:
        "Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Ut leo.",
      favourite: true
    },
    {
      title: "Nulla consequat massa",
      text:
        "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      favourite: true
    },
    {
      title: "In enim justo",
      text:
        "Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Suspendisse eu ligula. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus.",
      favourite: false
    },
    {
      title: "Vestibulum ante ipsum",
      text:
        "Vestibulum suscipit nulla quis orci. Praesent venenatis metus at tortor pulvinar varius. Nulla sit amet est. Suspendisse eu ligula sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien.",
      favourite: true
    }
  ];



 const box = document.querySelector('#box').innerHTML.trim()
 const list = document.querySelector('.posts')
 const compik = Handlebars.compile(box)

 const res = compik(posts)


 console.log(res)

 list.insertAdjacentHTML('afterbegin', res)
 
 
