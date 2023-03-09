// Создайте <div>, который превращается в <textarea>, если на него кликнуть.
// <textarea> позволяет редактировать HTML в элементе <div>.
// Когда пользователь нажимает Enter или переводит фокус, <textarea> превращается обратно в <div>, и его содержимое становится HTML-кодом в <div>.
let area = null;
let view = document.getElementById("view");

view.onclick = function () {
    area = document.createElement("textarea");
    area.className = "edit";
    area.value = view.innerHTML;

    view.replaceWith(area);
    area.focus();

    area.onblur = function () {
        view.innerHTML = area.value;
        area.replaceWith(view);
    };

    area.onkeydown = function (event) {
        if (event.key == "Enter") {
            this.blur();
        }
    };
};

// Сделайте ячейки таблицы редактируемыми по клику.
// - По клику – ячейка должна стать «редактируемой» (textarea появляется внутри), мы можем изменять HTML. Изменение размера ячейки должно быть отключено.
// - Кнопки OK и ОТМЕНА появляются ниже ячейки и, соответственно, завершают/отменяют редактирование.
// - Только одну ячейку можно редактировать за один раз. Пока <td> в «режиме редактирования», клики по другим ячейкам игнорируются.
// - Таблица может иметь множество ячеек. Используйте делегирование событий.
let table = document.getElementById("bagua-table");
let editingTd;
table.onclick = function (event) {
    let target = event.target.closest(".edit-cancel,.edit-ok,td");

    if (!table.contains(target)) return;

    if (target.className == "edit-cancel") {
        finishTdEdit(editingTd.elem, false);
    } else if (target.className == "edit-ok") {
        finishTdEdit(editingTd.elem, true);
    } else if (target.nodeName == "TD") {
        if (editingTd) return;

        makeTdEditable(target);
    }
};

function makeTdEditable(td) {
    editingTd = {
        elem: td,
        data: td.innerHTML
    };
    td.classList.add("edit-td");

    let textArea = document.createElement("textarea");
    textArea.style.width = td.clientWidth + "px";
    textArea.style.height = td.clientHeight + "px";
    textArea.className = "edit-area";

    textArea.value = td.innerHTML;
    td.innerHTML = "";
    td.appendChild(textArea);
    textArea.focus();

    td.insertAdjacentHTML(
        "beforeEnd",
        '<div class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>'
    );
}

function finishTdEdit(td, isOk) {
    if (isOk) {
        td.innerHTML = td.firstChild.value;
    } else {
        td.innerHTML = editingTd.data;
    }
    td.classList.remove("edit-td");
    editingTd = null;
}
// Установите фокус на мышь. Затем используйте клавиши со стрелками, чтобы её двигать
let mouse = document.getElementById("mouse");
mouse.tabIndex = 0;

mouse.onclick = function () {
    this.style.left = this.getBoundingClientRect().left + "px";
    this.style.top = this.getBoundingClientRect().top + "px";

    this.style.position = "fixed";
};

mouse.onkeydown = function (e) {
    switch (e.key) {
        case "ArrowLeft":
            this.style.left = parseInt(this.style.left) - this.offsetWidth + "px";
            return false;
        case "ArrowUp":
            this.style.top = parseInt(this.style.top) - this.offsetHeight + "px";
            return false;
        case "ArrowRight":
            this.style.left = parseInt(this.style.left) + this.offsetWidth + "px";
            return false;
        case "ArrowDown":
            this.style.top = parseInt(this.style.top) + this.offsetHeight + "px";
            return false;
    }
};
