// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
// setInterval
function printNumbers(from, to) {
    let start = from;
    let timer = setInterval(() => {
        console.log(start);
        if (start === to) {
            clearInterval(timer);
        }
        start++;
    }, 1000);
}
//setTimeout
function printNumbers(from, to) {
    setTimeout(() => {
        console.log(from);
        if (from !== to) {
            printNumbers(from + 1, to);
        }
    }, 1000);
}
