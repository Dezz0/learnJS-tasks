let age;
// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
if (age >= 14 && age <= 90) {
    // выполняемый код
}

// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
if (!(age >= 14 && age <= 90)) {
    // выполняемый код
}
if (age < 14 || age > 90) {
    // выполняемый код
}

// Напишите код, который будет спрашивать логин с помощью prompt.
// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».
// Пароль проверять так:
// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».
let login = prompt("Введите логин");
if (login === "Админ") {
    let password = prompt("Введите пароль");
    if (password === "Я главный") {
        alert("Здравствуйте");
    } else if (password === "" || password === null) {
        alert("Отменено");
    } else {
        alert("Неверный пароль");
    }
} else if (login === "" || login === null) {
    alert("Отменено");
} else {
    alert("Я вас не знаю");
}
