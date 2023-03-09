// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.
Function.prototype.defer = function (ms) {
    setTimeout(this, ms);
};
function f() {
    alert("Hello!");
}

f.defer(1000);

// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.
Function.prototype.defer = function (ms) {
    let fn = this;
    return function (...args) {
        setTimeout(() => fn.apply(this, args), ms);
    };
};
function f(a, b) {
    alert(a + b);
}
f.defer(1000)(1, 2);
