// Напишите деструктурирующее присваивание, которое:
// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
let user = {
    name: "John",
    years: 30
};
let { name, years: age, isAdmin = false } = user;

// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250
};
function topSalary(salaries) {
    let sum = 0;
    let maxName = null;
    for (let [name, salary] of Object.entries(salaries)) {
        if (sum < salary) {
            sum = salary;
            maxName = name;
        }
    }
    return maxName;
}
