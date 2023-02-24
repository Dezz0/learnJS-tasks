// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }
// Сделайте два варианта функции checkAge:
// Используя оператор ?
// Используя оператор ||
function checkAge(age) {
    return age > 18 || confirm("Родители разрешили?");
}
function checkAge(age) {
    return age > 18 ? true : confirm("Родители разрешили?");
}

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
function min(a, b) {
    return a < b ? a : b;
}

// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
let setX = +prompt("Введите число");
let setN = +prompt("Введите степень");
function pow(x, n) {
    return x ** n;
}
alert(pow(setX, setN));
