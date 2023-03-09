// Для страницы:
// <html>
// <body>
//   <div>Пользователи:</div>
//   <ul>
//     <li>Джон</li>
//     <li>Пит</li>
//   </ul>
// </body>
// </html>
// Напишите код, как получить…

// - элемент <div>?
// - <ul>?
// - второй <li> (с именем Пит)?
const divElem = document.body.firstElementChild;
const ulElem = document.body.lastElementChild;
const liElem = document.body.lastElementChild.lastElementChild;
