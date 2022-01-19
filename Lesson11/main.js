// Задание №1. Переведите текст вида border-left-width в borderLeftWidth
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
// Примеры:
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом 
// переделайте всё как нужно и методом join соедините обратно.

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';


// function camelize(str){
//     let arr = str.split('-');
//     let newArr = arr.map( (item, index)=> index == 0 ? item : item[0].toUpperCase() + item.slice(1) );
//     return newArr.join('');
// }
  
// console.log(camelize("list-style-image"));
// console.log(camelize("background-color"));
// console.log(camelize("-webkit-transition"));




// Задание №2. Фильтрация по диапазону
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
// Функция должна возвращать новый массив и не изменять исходный.
// Например:
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (совпадающие значения)
// alert( arr ); // 5,3,8,1 (без изменений)


// function filterRange(arr, a, b) {
//     return arr.filter(item => (a <= item && item <= b));
//   }
  
// let arr = [17, 6, 15, 10, 1, 30];  
// let filtered = filterRange(arr, 6, 15);

// console.log(filtered);   
// console.log(arr);




// Задание №3 Фильтрация по диапазону «на месте»
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.
// Например:
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
// alert( arr ); // [3, 1]


// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] <= a || arr[i] >= b) {
//           arr.splice(i, 1);   
//           i--;
//         } 
//     }
// }

// let arr = [1, 3, 8, 10, -2, 84, 44, 85, 71, -1, -5, 9, 33];
// filterRangeInPlace(arr, -10, 35);
// console.log(arr);



// Задание №4. Сортировать в порядке по убыванию
// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// console.log(arr); 




// Задание №5. Скопировать и отсортировать массив
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

// function copySorted(arr) {
//     return arr.slice().sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);

// console.log(sorted); 
// console.log(arr); 






// Задание №6. Создать расширяемый калькулятор
// Создайте функцию Calculator, которая реализует функционал калькулятора.




// Задание №7. Трансформировать в массив имён
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
// Например:
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [ vasya, petya, masha ];
// let names = /* ... ваш код */
// alert( names ); // Вася, Петя, Маша


// let tanya = { name: "Таня", age: 21 };
// let ira = { name: "Ира", age: 38 };
// let masha = { name: "Маша", age: 28 };
// let users = [ tanya, ira, masha ];
// let names = users.map(item => item.name);
// console.log(names); 



// Задание №8. Отсортировать пользователей по возрасту
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
// Например:
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let arr = [ vasya, petya, masha ];
// sortByAge(arr);
// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя


// function sortByAge(users) {
//     users.sort((a, b) => a.age - b.age);
// }

// let tanya = { name: "Таня", age: 21 };
// let ira = { name: "Ира", age: 38 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ tanya, ira, masha ];

// sortByAge(arr);

// console.log(arr[0].name); 
// console.log(arr[1].name); 
// console.log(arr[2].name); 



// Задание №9. Получить средний возраст
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
// Например:
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
// let arr = [ vasya, petya, masha ];
// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// function getAverageAge(users) {
//     return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }


// let tanya = { name: "Таня", age: 21 };
// let ira = { name: "Ира", age: 38 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ tanya, ira, masha ];

// console.log(getAverageAge(arr)); 



// Задание №10. Оставить уникальные элементы массива
// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
// Например:
// function unique(arr) {
//     let arrUnique = [];
//     for(let item of arr){
//         if(!arrUnique.includes(item)) arrUnique.push(item);
//     }
//     return arrUnique;
// }
// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O" ];
// console.log(unique(strings)); 





// Задание №11. Фильтрация уникальных элементов массива
// Допустим, у нас есть массив arr. 
// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

// function unique(arr) {
//     let newSet = new Set(arr);
//     let uniqueArr = [];
//     for (let value of newSet) {
//         uniqueArr.push(value);
//     }
//     return uniqueArr;
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",  "Krishna", "Krishna", "Hare", "Hare", ":-O"];
// console.log(unique(values)); 






// Задание №12. Перебираемые ключи
// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.
// Но это не выходит:
// let map = new Map();
// map.set("name", "John");
// let keys = map.keys();
// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция
// keys.push("more");
// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?

// map.keys() возвращает итерируемый объект

// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());

// keys.push("more");

// console.log(keys);




// Задание №13. Независимы ли счётчики?
// Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.
// Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?
// function makeCounter() {
//     let count = 0;
//     return function() {
//     return count++;
//     };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();
// console.log( counter() ); // 0
// console.log( counter() ); // 1
// console.log( counter2() ); // ?
// console.log( counter2() ); // ?

// Счетчики независимы, так как у них разное присванивание, поэтому функция будет работать отдельно от каждого. Покажут одинаковые результаты.





// Задание №14. Объект счётчика
// Здесь объект счётчика создан с помощью функции-конструктора.
// Будет ли он работать? Что покажет?
// function Counter() {
//     let count = 0;
//     this.up = function() {
//         return ++count;
//     };
//     this.down = function() {
//         return --count;
//     };
// }

// let counter = new Counter();
// console.log(counter.up() ); // 1
// console.log(counter.up() ); // 2
// console.log(counter.down() ); // 1


// Функция Counter будет работать. Будет показывать значение счётчика в зависимости от прибавление/убавления



// Задание №15*. Вычислить факториал
// Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!
// Определение факториала можно записать как:
// n! = n * (n - 1) * (n - 2) * ...*1
// Примеры значений для разных n:
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
// alert( factorial(5) ); // 120
// P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6


// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
// }

// console.log(factorial(5));