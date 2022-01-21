// Задание №1. Дочерние элементы в DOM
// Как получить:
// • Напишите код, который получит элемент <div>?
// • Напишите код, который получит <ul>?
// • Напишите код, который получит второй <li> (с именем Пит)?
// console.log(document.body.firstElementChild);
// console.log(document.body.children[1]);
// console.log(document.body.children[1].lastElementChild);



// Задание №2. Соседи
// Если elem – произвольный узел DOM-элемента…
// • Правда, что elem.lastChild.nextSibling всегда равен null? -- Правда, так elem.lastChild последний элемент в DOM, в следствии чего у нех нет последующего элемента
// • Правда, что elem.children[0].previousSibling всегда равен null ? -- Нет, так как elem.children[0] это элемент, имеющий узщел ДО, который вернется через previousSibling



// Задание №3. Выделите ячейки по диагонали
// Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.
// Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:
// // в переменной td находится DOM-элемент для тега <td>
// td.style.backgroundColor = 'red';
// Результат:

// function getTable(){
//    document.querySelectorAll('tr').forEach((item)=>{
//       Array.from(item.children).forEach((element)=>{
//          element.textContent = `${(item.rowIndex+1)} : ${(element.cellIndex+1)}`;
//          if((item.rowIndex + 1) == (element.cellIndex + 1)){
//                element.style.backgroundColor = "red";
//          }
//       });
//    });
// }

// getTable();



// Задание №3. Поиск элементов
// Вот документ с таблицей и формой. Как найти?…
// • Таблицу с id="age-table".
// • Все элементы label внутри этой таблицы (их три).
// • Первый td в этой таблице (со словом «Age»).
// • Форму form с именем name="search".
// • Первый input в этой форме.
// • Последний input в этой форме.
// Используйте код файла table.html и браузерные инструменты разработчика:

// console.log(document.querySelector('#age-table'));
// console.log(document.querySelectorAll('#age-table label'));
// console.log(document.querySelector('#age-table td'));
// console.log(document.querySelector('form[name = "search"]'));
// console.log(document.querySelector('form[name = "search"] input'));
// let formInputs = document.querySelectorAll('form[name = "search"] input');
// console.log(inputs[formInputs.length-1]);



/* Задание №4. Подсчет потомков
Есть дерево, структурированное как вложенные списки ul/li.
Напишите код, который выведет каждый элемент списка <li>:
1. Какой в нём текст (без поддерева) ?
2. Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ? */

// function showInfo(){
//    for(let li of document.querySelectorAll('li')){
//        console.log(li.textContent);
//    }
//    console.log(document.querySelectorAll('li').length);
// };
// showInfo();



// Задание №5. Свойство nodeType
// Что выведет этот код? -- 1
// alert(document.body.lastChild.nodeType);







// Задание №6. Тег в комментарии
// Что выведет этот код? --- Выведет BODY. Комментарий будет первым и единственым элементом, поэтому body.firstChild.data вернет содержимое коментария

//  let body = document.body;
//  body.innerHTML = "<!--" + body.tagName + "-->";
//  alert( body.firstChild.data ); 





// Задание №7. Где в DOM-иерархии "document"?
// Дайте ответы на вопросы:
// 1. Объектом какого класса является document? --- document – объект класса HTMLDocument
// 2. Какое место он занимает в DOM-иерархии? --- первое место, корнем иерархии которой является EventTarget
// 3. Наследует ли он от Node или от Element, или может от HTMLElement? --- Наследует Npde






// Задание №8. Очистите элемент
// Создайте функцию clear(elem), которая удаляет всё содержимое из elem.

// function clear(elem) { 
//     document.querySelector('#elem').innerHTML = "";
// }
// clear(elem); // очищает список






// Задание №9. Почему остаётся "aaa"?
// Запустите этот пример. Почему вызов remove не удалил текст "aaa"? --- Браузеор автоматически исправил ошибку и вывел текст ааа. Это особенность работы браузера, что он сам может выводить содержимое, закрывать теги

// alert(table); // таблица, как и должно быть
// table.remove();

//  почему в документе остался текст "ааа"?? --- потому что ааа не может находится в таблице, браузер исправляет некорректный HTML документ






// Задание №10. Создайте список
// Напишите интерфейс для создания списка.
// Для каждого пункта:
// 1. Запрашивайте содержимое пункта у пользователя с помощью prompt.
// 2. Создавайте элемент <li> и добавляйте его к <ul>.
// 3. Процесс прерывается, когда пользователь нажимает Esc или вводит пустую строку.
// Все элементы должны создаваться динамически.
// Если пользователь вводит HTML-теги -– пусть в списке они показываются как обычный текст.

// function createList(){
//     let ul = document.createElement('ul');    
//     let list = null;

//     do {  
//         list = prompt('Введите содержимое пункта списка: ', '');
//         if (list) {
//         let li = document.createElement('li');
//         li.innerText = list;
//         ul.append(li);  
//         }  
//     } while(list);

//     document.body.append(ul);  
// }
  
// createList();



// Задание №11. Вставьте HTML в список
// Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:
// for ( let i = 2; i < 4; i++ ) {
//     let li = document.createElement('li');
//     document.querySelector('#one').append(li);
//     li.append(i);
// }