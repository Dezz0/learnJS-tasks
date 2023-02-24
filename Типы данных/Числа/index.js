// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
let number1 = +prompt("Введите первое число", "");
let number2 = +prompt("Введите второе число", "");
console.log(number1 + number2);

// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
// Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.
function readNumber() {
    let number;
    do {
        number = prompt("Введите число");
    } while (isNaN(number));
    if (!number) return null;
    return +number;
}

// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).
function random(min, max) {
    return min + Math.random() * (max - min);
}
console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));

// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
// Любое число из интервала min..max должно появляться с одинаковой вероятностью.
function randomInteger(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}
