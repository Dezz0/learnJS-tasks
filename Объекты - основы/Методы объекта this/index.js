// Создайте объект calculator (калькулятор) с тремя методами:
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
    read() {
        this.value1 = +prompt("Введите первое число");
        this.value2 = +prompt("Введите второе число");
    },
    sum() {
        return this.value1 + this.value2;
    },

    mul() {
        return this.value1 * this.value2;
    }
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

// У нас есть объект ladder (лестница), который позволяет подниматься и спускаться. Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так: ladder.up().up().down().showStep().down().showStep();
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert(this.step);
        return this;
    }
};
