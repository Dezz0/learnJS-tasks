// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.
let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
let firstElem = styles.shift();
console.log(firstElem);
styles.unshift("Рэп", "Регги");
console.log(styles);

// Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
function sumInput() {
    let array = [];
    while (true) {
        let num = prompt("Введите число");
        if (num === "" || !isFinite(num) || num === null) break;
        array.push(+num);
    }
    return array.reduce((sum, num) => (sum += num), 0);
}
console.log(sumInput());

// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
function getMaxSubSum(arr) {
    let maxSum = 0;
    let sum = 0;
    for (let item of arr) {
        sum += item;
        maxSum = Math.max(maxSum, sum);
        if (sum < 0) sum = 0;
    }
    return maxSum;
}
console.log(getMaxSubSum([1, -2, 3, 4, -9, 6]));
