// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.
let btn = document.getElementById("hider");
let hiddenElement = document.getElementById("text");
btn.onclick = () => (hiddenElement.hidden = true);

// Пусть мяч перемещается при клике на поле, туда, куда был клик
// Требования:
// - Центр мяча должен совпадать с местом нажатия мыши (если это возможно без пересечения краёв поля);
// - CSS-анимация желательна, но не обязательна;
// - Мяч ни в коем случае не должен пересекать границы поля;
// - При прокрутке страницы ничего не должно ломаться;
document.getElementById("field").onclick = function (event) {
    let fieldCoords = this.getBoundingClientRect();
    let ball = document.getElementById("ball");
    let ballCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
    };
    if (ballCoords.top < 0) ballCoords.top = 0;
    if (ballCoords.left < 0) ballCoords.left = 0;
    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
    }
    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + "px";
    ball.style.top = ballCoords.top + "px";
};

// Создать меню, которое по нажатию открывается либо закрывается
let title = document.querySelector(".title");
let sweeties = document.getElementById("sweeties");
title.onclick = () => {
    sweeties.classList.toggle("open");
};

// Есть список сообщений.
// При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.
let panes = document.querySelectorAll(".pane");
for (const pane of panes) {
    pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[X]</button>');
    pane.firstChild.onclick = () => pane.remove();
}
