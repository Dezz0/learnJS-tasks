// Добавьте ему метод dictionary.toString(), который должен возвращать список ключей, разделённых запятой. Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in.
let dictionary = Object.create(null, {
    toString: {
        vallue() {
            return Object.keys(this).join();
        }
    }
});
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

for (let key in dictionary) {
    alert(key);
}

alert(dictionary);
