// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// Сделайте три варианта решения:
// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.
// цикл
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
// рекурсия
function sumTo(n) {
    return n === 1 ? n : n + sumTo(n - 1);
}
// по формуле
function sumTo(n) {
    return (n * (n + 1)) / 2;
}

// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
function factorial(n) {
    return n === 1 ? n : n * factorial(n - 1);
}

// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

// Напишите функцию printList(list), которая выводит элементы списка по одному.
// Сделайте два варианта решения: используя цикл и через рекурсию.
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
// рекурсия
function printList(list) {
    console.log(list.value);
    if (list.next) {
        printList(list.next);
    }
}
printList(list);
// цикл
function printList(list) {
    let copyList = list;
    while (copyList) {
        console.log(copyList.value);
        copyList = copyList.next;
    }
}

// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
// Сделайте два решения: с использованием цикла и через рекурсию.
// рекурсия
function printList(list) {
    if (list.next) {
        printList(list.next);
    }
    console.log(list.value);
}
// цикл
function printList(list) {
    let result = [];
    let copyList = list;
    while (copyList) {
        result.push(copyList.value);
        copyList = copyList.next;
    }
    result.sort((a, b) => b - a).forEach((n) => console.log(n));
}
