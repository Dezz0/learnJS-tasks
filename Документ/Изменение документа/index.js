// Создайте функцию clear(elem), которая удаляет всё содержимое из elem.
let orderedList = document.getElementById("elem");
function clear(elem) {
    elem.innerHTML = "";
}
clear(orderedList);

// Напишите интерфейс для создания списка.
// Для каждого пункта:
// - Запрашивайте содержимое пункта у пользователя с помощью prompt.
// - Создавайте элемент <li> и добавляйте его к <ul>.
// - Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
// Все элементы должны создаваться динамически.
// Если пользователь вводит HTML-теги, они должны обрабатываться как текст.
let ul = document.createElement("ul");
document.body.append(ul);
while (false) {
    // поставить true в условие while
    let content = prompt("Введите некоторый текст");
    if (!content) break;
    let li = document.createElement("li");
    li.textContent = content;
    ul.append(li);
}

// Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.
let data = {
    Рыбы: {
        форель: {},
        лосось: {}
    },
    Деревья: {
        Огромные: {
            секвойя: {},
            дуб: {}
        },
        Цветковые: {
            яблоня: {},
            магнолия: {}
        }
    }
};

let container = document.getElementById("container");
function createTree(container, data) {
    container.innerHTML = createTreeText(data);
}
function createTreeText(obj) {
    let li = "";
    let ul;
    for (let key in obj) {
        li += "<li>" + key + createTreeText(obj[key]) + "</li>";
    }
    if (li) {
        ul = "<ul>" + li + "</ul>";
    }
    return ul || "";
}
createTree(container, data);
