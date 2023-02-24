// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
function camelize(str) {
    return str.split("-").map((word, index) => (index === 0 ? word : word[0].toUpperCase() + word.slice(1)));
}

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
function filterRange(arr, a, b) {
    return arr.filter((num) => num >= a && num <= b);
}

// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.
let arr1 = [5, 3, 8, 1];
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num < a || num > b) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}
console.log(filterRangeInPlace(arr1, 1, 4));

// Сортировать в порядке по убыванию
let arr2 = [5, 2, 1, -10, 8];
arr2.sort((a, b) => b - a);

// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.
function copySorted(arr) {
    return arr.slice("").sort;
}

// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей.
// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
function Calculator() {
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b
    };

    this.calculate = (str) => {
        let expression = str.split(" ");

        let a = +expression[0];
        let operator = expression[1];
        let b = +expression[2];

        return this.methods[operator](a, b);
    };

    this.addMethod = (name, func) => {
        return (this.methods[name] = func);
    };
}
let calculator = new Calculator();

// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
let vasya = { name: "Вася", surname: "Пупкин", id: 1, age: 25 };
let petya = { name: "Петя", surname: "Иванов", id: 2, age: 30 };
let masha = { name: "Маша", surname: "Петрова", id: 3, age: 28 };

let users = [vasya, petya, masha];

let names = [...users].map((user) => user.name);
console.log(names);

// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
let usersMapped = [...users].map((user) => {
    return { id: user.id, fullName: `${user.name} ${user.surname}` };
});
console.log(usersMapped);

// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
function sortByAge(users) {
    return users.sort((a, b) => a.age - b.age);
}

// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
console.log(shuffle([1, 2, 3]));

// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
function getAverageAge(users) {
    return Math.round(users.reduce((averageAge, user) => (averageAge += user.age), 0) / users.length);
}

// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}
console.log(unique(strings));

// Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
// Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.
let users1 = [
    { id: "john", name: "John Smith", age: 20 },
    { id: "ann", name: "Ann Smith", age: 24 },
    { id: "pete", name: "Pete Peterson", age: 31 }
];

function groupById(arr) {
    return arr.reduce((object, user) => {
        object[user.id] = user;
        return object;
    }, {});
}
console.log(groupById(users1));
