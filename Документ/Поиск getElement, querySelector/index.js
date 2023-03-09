// https://learn.javascript.ru/task/find-elements/table.html - ссылка на сайт с таблицей и формой
// Как найти?
// Таблицу с id="age-table".
// Все элементы label внутри этой таблицы (их три).
// Первый td в этой таблице (со словом «Age»).
// Форму form с именем name="search".
// Первый input в этой форме.
// Последний input в этой форме.

const table = document.getElementById("age-table");
let labels = table.querySelectorAll("label");
let firstTd = table.rows[0].cells[0];
let form = document.querySelector('form[name="search"]');
let firstInput = form.querySelector("input");
let lastInput = form.lastElementChild;
