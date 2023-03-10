// Напишите код, выполнив задание из каждого пункта отдельной строкой:
const user = new Object();
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
}
multiplyNumeric(menu);
console.log(menu);
