// Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.
// Каждый вызов должен сохраняться как массив аргументов.

function spy(func) {
    function wrapper(...arg) {
        wrapper.calls.push(arg);
        return func.apply(this, arg);
    }
    wrapper.calls = [];
    return wrapper;
}

// Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд.
function f(x) {
    console.log(x);
}

function delay(f, ms) {
    return function () {
        setTimeout(() => f.apply(this, arg), ms);
    };
}

let f1000 = delay(f, 1000);
f1000("test");

// Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд. Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.
function debounce(f, ms) {
    let inQueue = false;

    return function () {
        if (inQueue) return;
        f.apply(this, arguments);
        inQueue = true;
        setTimeout(() => (inQueue = false), ms);
    };
}

// Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку, передавая вызов в f не более одного раза в ms миллисекунд. Те вызовы, которые попадают в период «торможения», игнорируются.
function throttle(func, ms) {
    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {
        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments);

        isThrottled = true;

        setTimeout(function () {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}
