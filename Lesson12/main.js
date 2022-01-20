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
// 1. Объектом какого класса является document?
// 2. Какое место он занимает в DOM-иерархии?
// 3. Наследует ли он от Node или от Element, или может от HTMLElement?






// Задание №8. Очистите элемент
// Создайте функцию clear(elem), которая удаляет всё содержимое из elem.
// <ol id="elem">
//  <li>Привет</li>
//  <li>Мир</li>
// </ol>
// <script>
//  function clear(elem) { 
// /* ваш код */ 
// }
//  clear(elem); // очищает список
// </script>





// Задание №9. Почему остаётся "aaa"?
// Запустите этот пример. Почему вызов remove не удалил текст "aaa"?
// <table id="table">
//  aaa
//  <tr>
//  <td>Тест</td>
//  </tr>
// </table>
// <script>
//  alert(table); // таблица, как и должно быть
//  table.remove();
//  // почему в документе остался текст "ааа"??
// </script>





// Задание №10. Создайте список
// Напишите интерфейс для создания списка.
// Для каждого пункта:
// 1. Запрашивайте содержимое пункта у пользователя с помощью prompt.
// 2. Создавайте элемент <li> и добавляйте его к <ul>.
// 3. Процесс прерывается, когда пользователь нажимает Esc или вводит пустую 
// строку.
// Все элементы должны создаваться динамически.
// Если пользователь вводит HTML-теги -– пусть в списке они показываются как обычный 
// текст.





// Задание №11. Вставьте HTML в список
// Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:
// <ul id="ul">
//  <li id="one">1</li>
//  <li id="two">4</li>
// </ul>