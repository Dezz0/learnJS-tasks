// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
function checkSpam(str) {
    return str.toLowerCase().includes("viagra") || str.toUpperCase().includes("XXX");
}

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
function truncate(str, maxLength) {
    return str.length > maxLength ? str.slice(0, maxLength - 1) + "..." : str;
}

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
function extractCurrencyValue(str) {
    return +str.slice(1);
}
