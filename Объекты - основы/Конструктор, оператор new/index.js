// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
function Calculator() {
    this.read = () => {
        this.value1 = +prompt("Введите первое число");
        this.value2 = +prompt("Введите второе число");
    };
    this.sum = () => {
        return this.value1 + this.value2;
    };

    this.mul = () => {
        return this.value1 * this.value2;
    };
}
let calculator = new Calculator();
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

// Создайте функцию-конструктор Accumulator(startingValue).
// Объект, который она создаёт, должен уметь следующее:
// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = () => {
        this.newValue = +prompt("Введите новое число");
        this.value += this.newValue;
    };
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);
