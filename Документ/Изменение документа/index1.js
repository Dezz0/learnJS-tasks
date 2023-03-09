// Есть дерево, организованное в виде вложенных списков ul/li.
// Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте.
let items = document.querySelectorAll(".count-elem ul li");
for (const li of items) {
    let count = li.querySelectorAll("li").length;
    if (!count) continue;
    li.firstChild.data += `[${count}]`;
}

// Напишите функцию createCalendar(elem, year, month).
// Вызов функции должен создать календарь для заданного месяца month в году year и вставить его в elem.
// Календарь должен быть таблицей, где неделя – это <tr>, а день – это <td>. У таблицы должен быть заголовок с названиями дней недели, каждый день – <th>, первым днём недели должен быть понедельник.
function createCalendar(elem, year, month) {
    month = month - 1;
    let date = new Date(year, month);
    let table = "<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>";

    for (let i = 0; i < getDay(date); i++) {
        table += "<td></td>";
    }

    while (date.getMonth() == month) {
        table += "<td>" + date.getDate() + "</td>";
        if (getDay(date) % 7 == 6) {
            table += "</tr><tr>";
        }
        date.setDate(date.getDate() + 1);
    }

    if (getDay(date) != 0) {
        for (let i = getDay(date); i < 7; i++) {
            table += "<td></td>";
        }
    }
    table += "</tr></table>";
    elem.innerHTML = table;
}
function getDay(date) {
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}
createCalendar(calendar, 2023, 3);

// Создайте цветные часы
let timerID;
function updateClock() {
    let clock = document.getElementById("clock");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 10) hours = "0" + hours;
    clock.children[0].innerHTML = hours;
    if (minutes < 10) minutes = "0" + minutes;
    clock.children[1].innerHTML = minutes;
    if (seconds < 10) seconds = "0" + seconds;
    clock.children[2].innerHTML = seconds;
}

function clockStart() {
    if (!timerID) timerID = setInterval(updateClock, 1000);
    updateClock();
}
function clockStop() {
    clearInterval(timerID);
    timerID = null;
}

// Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:
//<ul id="ul">
//<li id="one">1</li>
//<li id="two">4</li>
//</ul>
let one = document.getElementById("one");
// раскомментировать строку ниже
// one.insertAdjacentHTML("afterend", "<li>2</li><li>3</li>");

// Сортировка таблицы
let sortedTable = document.getElementById("sorted-table");
let sortedRows = Array.from(sortedTable.rows)
    .slice(1)
    .sort((a, b) => (a.cells[0].innerHTML > b.cells[0].innerHTML ? 1 : -1));
sortedTable.append(...sortedRows);
