// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
function sum(a) {
    return function (b) {
        return a + b;
    };
}
console.log(sum(1)(2));

// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.
// Сделайте набор «готовых к употреблению» фильтров:
// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
    return (el) => el >= a && el <= b;
}

function inArray(arr) {
    return (el) => arr.includes(el);
}
console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10])));

// У нас есть массив объектов, который нужно отсортировать:
// users.sort(byField('name'));
// users.sort(byField('age'));
// Напишите функцию byField, которая может быть использована для этого.
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(field) {
    return (a, b) => (a[field] > b[field] ? 1 : -1);
}
console.log(users.sort(byField("name")));
console.log(users.sort(byField("age")));
