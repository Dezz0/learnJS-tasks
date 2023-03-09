// Создайте дерево, которое по клику на заголовок скрывает-показывает потомков:
// Требования:
// - Использовать только один обработчик событий (применить делегирование)
// - Клик вне текста заголовка (на пустом месте) ничего делать не должен.
let tree = document.querySelector(".tree");
for (let li of tree.querySelectorAll("li")) {
    let span = document.createElement("span");
    li.prepend(span);
    span.append(span.nextSibling);
}

tree.onclick = function (event) {
    if (event.target.tagName != "SPAN") return;
    let childrenContainer = event.target.parentNode.querySelector("ul");
    console.log(childrenContainer);
    if (!childrenContainer) return;

    childrenContainer.hidden = !childrenContainer.hidden;
};

// Сделать таблицу сортируемой: при клике на элемент <th> строки таблицы должны сортироваться по соответствующему столбцу.
// Каждый элемент <th> имеет атрибут data-type
let grid = document.getElementById("grid");
grid.onclick = function (e) {
    if (e.target.tagName != "TH") return;
    let th = e.target;
    sortGrid(th.cellIndex, th.dataset.type);
};

function sortGrid(colNum, type) {
    let tbody = grid.querySelector("tbody");
    let rowsArray = Array.from(tbody.rows);
    console.log(rowsArray);
    let compare;

    switch (type) {
        case "number":
            compare = (rowA, rowB) => {
                return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
            };
            break;
        case "string":
            compare = (rowA, rowB) => {
                return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
            };
            break;
    }
    rowsArray.sort(compare);
    tbody.append(...rowsArray);
}

// Напишите JS-код, реализующий поведение «подсказка».
// При наведении мыши на элемент с атрибутом data-tooltip, над ним должна показываться подсказка и скрываться при переходе на другой элемент.
let tooltipElem;

document.onmouseover = (event) => {
    let target = event.target;
    let tooltipHtml = target.dataset.tooltip;
    if (!tooltipHtml) return;

    tooltipElem = document.createElement("div");
    tooltipElem.className = "tooltip";
    tooltipElem.innerHTML = tooltipHtml;
    document.body.append(tooltipElem);

    let coords = target.getBoundingClientRect();

    let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0;

    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) {
        top = coords.top + target.offsetHeight + 5;
    }

    tooltipElem.style.left = left + "px";
    tooltipElem.style.top = top + "px";
};

document.onmouseout = () => {
    if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
    }
};
