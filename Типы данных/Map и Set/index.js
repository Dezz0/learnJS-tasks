// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

function unique(arr) {
    return Array.from(new Set(arr));
}
console.log(unique(values));

// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
function aclean(arr) {
    let map = new Map();
    for (let word of arr) {
        let sorted = word.toLowerCase().split("").sort().join("");
        map.set(sorted, word);
    }
    return Array.from(map.values());
}
