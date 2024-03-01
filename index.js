// /**
//  * Деструктуризація об'єкта
//  */

// const user = {
//   username: "Jacob name",
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//     a: {
//       b: 1,
//       c: {
//         d: {
//           e: 100,
//         },
//       },
//     },
//   },
// };

// const {
//   skills: {
//     a: {
//       c: {
//         d: { e },
//       },
//     },
//   },
// } = user;

// console.log(e)

// const { skills } = user;

// console.log(skills);
// console.log(skills.css);

//   /**
//    * Глибока деструктуризація об'єкта
//    */

// const {
//   skills: { css },
// } = user;

// console.log(css);

// const {
//     skills: {
//       a: {
//         c: {
//           d: { e },
//         },
//       },
//     },
//   } = user;

//   console.log(e)

/**
 * Деструктуризація об'єкта в циклі
 */

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   const { title } = book;
//   console.log(title);
// }

// for (const { title } of books) {
//   console.log(title);
// }

// Деструктуризація зі значеннями за замовчуванням

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
//   price: "3$",
//   coverImage: "img.jpg",
// };

// Деструктуризуємо;

// const { title, author, isPublic, rating, coverImage = "picture.png" } = book;

// console.log(coverImage);

// const {
//   title,
//   author,
//   isPublic,
//   rating: votes,
//   coverImage,
//   price = "5$",
// } = book;
// // console.log(rating);

// console.log(book.rating);






// const user = {
//   username: "Jacob",
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// Без деструктуризації
// function getUserName(obj) {
//   console.log(
//     `Hello my name is ${obj.name}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js -${obj.skills.js}`
//   );
// }

//   // З деструктуризацією

// function getUserName({ username: name, skills: { html, css, js } }) {
//   console.log(
//     `Hello my name is ${name}, I know html - ${html}, css - ${css} and js -${js}`
//   );
// }

// getUserName(user);





// ❗️❗️❗️ Задача

// const car1 = {
//   brand: "BMW",
//   model: "700",
//   a: "red",
//   maxSpeed: 240,
//   isNew: true,
//   dimensions: {
//     weight: 2000,
//     height: 150,
//     length: 4.2,
//   },
// };

// const car2 = {
//   brand: "BMW",
//   model: "700",
//   //   a: "red",
//   maxSpeed: 240,
//   isNew: true,
//   dimensions: {
//     height: 150,
//     length: 4.2,
//   },
// };

// function createMessage(car) {
//   const message = `
//   Color: ${car.a}
//   Max speed: ${car.maxSpeed}
//   Is new: ${car.isNew}
//   Weight: ${car.dimensions.weight}
//   `;
//   console.log(message);
// }

// function createMessage({
//   a: color = "No info",
//   maxSpeed = "No info",
//   isNew = "No info",
//   dimensions: { weight = "No info" },
// }) {
//   const message = `
//     Color: ${color}
//     Max speed: ${maxSpeed}
//     Is new: ${isNew}
//     Weight: ${weight}
//     `;
//   console.log(message);
// }

// // createMessage(car1)
// // createMessage(car2);




// //   /**
// //    * Деструктуризація масива
// //    */

// const arr = [1, 2, 3, 4, 5];
// // console.log(arr[2]);
// // const [one, two, three, , five] = arr
// // console.log(five)

// const foo = (a, b) => [a, b]

// // console.log(foo(5, 6))

// const [a, b] = foo(5, 6)

// console.log(a)