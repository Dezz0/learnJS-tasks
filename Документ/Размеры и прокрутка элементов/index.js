// Поместите мяч в центр поля
let ball = document.getElementById("ball");
let field = document.getElementById("field");

ball.style.left = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + "px";
ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + "px";
