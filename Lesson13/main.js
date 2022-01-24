// Задание №1. Создайте календарь в виде таблицы
// Напишите функцию createCalendar(elem, year, month).
// Вызов функции должен создать календарь для заданного месяца month в году year и вставить его в elem.
// Календарь должен быть таблицей, где неделя – это <tr>, а день – это <td>. У таблицы должен быть заголовок с названиями дней недели, каждый день – <th>, первым днём недели должен быть понедельник.
// Например, createCalendar(cal, 2012, 9) сгенерирует в cal следующий календарь:
// P.S. В этой задаче достаточно сгенерировать календарь, кликабельным его делать не нужно.
// function createNewCalendar(elem, year, month) {
//     let m = month - 1;
//     let d = new Date(year, m);
//     let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

//     for (let i = 0; i < getDay(d); i++) {
//         table += '<td></td>';
//     }

//     while (d.getMonth() == m) {
//         table += '<td>' + d.getDate() + '</td>';

//         if (getDay(d) % 7 == 6) { 
//             table += '</tr><tr>';
//         }
//         d.setDate(d.getDate() + 1);
//     }

//     if (getDay(d) != 0) {
//         for (let i = getDay(d); i < 7; i++) {
//             table += '<td></td>';
//         }
//     }

//     table += '</tr></table>';
//     elem.innerHTML = table;
// }

// function getDay(date) {
//     let day = date.getDay();
//     if (day == 0) day = 7;
//     return day - 1;
// }

// createNewCalendar(calendar, 2012, 9);





// Задание №2. Создать уведомление
// Напишите функцию showNotification(options), которая создаёт уведомление: <div 
// class="notification"> с заданным содержимым. Уведомление должно автоматически исчезнуть через 1,5 секунды.
// Пример объекта options:
// // показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
// showNotification({
//  top: 10, // 10px от верхней границы окна (по умолчанию 0px)
//  right: 10, // 10px от правого края окна (по умолчанию 0px)
//  html: "Hello!", // HTML-уведомление
//  className: "welcome" // дополнительный класс для div (необязательно)
// });
// function showNotification({top = 0, right = 0, className, html}) {

//     let notification = document.createElement('div');
//     notification.className = "notification";
//     if (className) {
//       notification.classList.add(className);
//     }

//     notification.style.top = top + 'px';
//     notification.style.right = right + 'px';

//     notification.innerHTML = html;
//     document.body.append(notification);

//     setTimeout(() => notification.remove(), 1500);
//   }

//   let i = 1;
//   setInterval(() => {
//     showNotification({
//       top: 180,
//       right: 10,
//       html: 'Сербия — Украина 1:6',
//       className: "welcome"
//     });
//   }, 3000);




/* Задание №3. Найдите координаты точек относительно окна браузера
Ниже располагается код документа с зелёным «полем».
Используйте JavaScript, чтобы найти координаты углов, обозначенных стрелками.
В документе уже реализована функциональность, когда при клике на любом месте показываются соответствующие координаты.
Кликните в любом месте для получения координат в контексте окна. 
Это для тестирования, чтобы проверить результат, который вы получили с помощью JavaScript.

Ваш код должен при помощи DOM получить четыре пары координат:
• верхний левый, внешний угол (это просто).
• нижний правый, внешний угол (тоже просто).
• верхний левый, внутренний угол (чуть сложнее).
• нижний правый, внутренний угол (есть несколько способов, выберите один).
Координаты, вычисленные вами, должны совпадать с теми, которые возвращаются по клику мыши.
P.S. Код должен работать, если у элемента другие размеры или есть рамка, без привязки к конкретным числам. */

// document.onclick = function(e) { // показывает координаты точки клика
//     coords.innerHTML = e.clientX + ':' + e.clientY;
// };

// let arrow = Array.from(document.querySelectorAll(".triangle-right"));

// arrow = arrow.map(item=> {
//      const elem = item.getBoundingClientRect();
//      const Y = elem.bottom - (elem.bottom - elem.top) / 2;
//      const X = elem.right;
//      return X + ":" + Y;
// });







// Задание №4. Покажите заметку рядом с элементом
// Создайте функцию positionAt(anchor, position, elem), которая позиционирует элемент elem в зависимости от значения свойства position рядом с элементом anchor.
// Аргумент position – строка с одним из 3 значений:
// • "top" – расположить elem прямо над anchor
// • "right" – расположить elem непосредственно справа от anchor
// • "bottom" – расположить elem прямо под anchor
// Она используется внутри функции showNote(anchor, position, html), которая уже есть в исходном коде задачи. Она создаёт и показывает элемент-«заметку» с текстом html на заданной позиции position рядом с элементом anchor.
// function positionAt(anchor, position, elem) {

// let coordinates = anchor.getBoundingClientRect();

// switch(position){
//     case "top":
//         elem.style.top = `${coordinates.top - elem.offsetHeight}px`;
//         elem.style.left = `${coordinates.left}px`;
//     break;

//     case "right":
//         elem.style.top = `${coordinates.top}px`;
//         elem.style.left = `${coordinates.right}px`;
//     break;
//     case "bottom":
//         elem.style.top = `${coordinates.top + anchor.offsetHeight}px`;
//         elem.style.left = `${coordinates.left}px`;
//     break;
// }




// Задание №5. Покажите заметку около элемента (абсолютное позиционирование)
// Измените код решения предыдущего задания так, чтобы элемент заметки использовал свойство position:absolute вместо position:fixed.
// Это предотвратит расхождение элементов при прокрутке страницы.
// Используйте решение предыдущего задания для начала. 
// Чтобы проверить решение в условиях с прокруткой, добавьте стиль элементу <body style="height: 2000px">.


// Задание №6. Расположите заметку внутри элемента (абсолютное позиционирование)
// Усовершенствуйте решение предыдущего задания: научите функцию positionAt(anchor, position, elem) вставлять elem внутрь anchor.
// Новые значения для аргумента position:
// • top-out, right-out, bottom-out – работают так же, как раньше, они вставляют elem сверху/справа/снизу anchor.
// • top-in, right-in, bottom-in – вставляют elem внутрь anchor: приклеивают его к верхнему/правому/нижнему краю.
// Например:
// // показывает заметку поверх цитаты positionAt(blockquote, "top-out", note);
// // показывает заметку внутри цитаты вблизи верхнего края элемента positionAt(blockquote, "top-in", note);

// function positionAt(anchor, position, elem) {

// let coordinates = anchor.getBoundingClientRect();

// switch(position){

//     case "top-out":
//         elem.style.top = `${coordinates.top - elem.offsetHeight}px`;
//         elem.style.left = `${coordinates.left}px`;
//     break;

//     case "right-out":
//         elem.style.top = `${coordinates.top}px`;
//         elem.style.left = `${coordinates.right}px`;
//     break;

//     case "bottom-out":
//         elem.style.top = `${coordinates.top + anchor.offsetHeight}px`
//         elem.style.left = `${coordinates.left}px`;
//     break;

//     case "top-in":
//         elem.style.top = `${coordinates.top}px`;
//         elem.style.left = `${coordinates.left}px`;
//     break;

//     case "right-in":
//         elem.style.top = `${coordinates.top}px`;
//         elem.style.left = `${coordinates.right - elem.offsetWidth}px`;
//     break;

//     case "bottom-in":
//         elem.style.top = `${coordinates.top + anchor.offsetHeight - elem.offsetHeight}px`
//         elem.style.left = `${coordinates.left}px`;
//     break;
//     }
// }




// Задание №7. Скрыть элемент по нажатию кнопки
// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.
// document.getElementById('hider').onclick = function() {
//     document.getElementById('text').style.display = "none";
// };





// Задание №8. Какой обработчик запустится?
// В переменной button находится кнопка. Изначально на ней нет обработчиков.
// Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?
// button.addEventListener("click", () => alert("1"));
// button.removeEventListener("click", () => alert("1"));
// button.onclick = () => alert(2);
// -- выведуться оба счётчика, так как сначала на кнопку вешается событие, а затем снимается. В данном случае button.onclick независим.




// Задание №9**. Передвиньте мяч по полю
// Пусть мяч перемещается при клике на поле, туда, куда был клик. 
// Требования:
// Центр мяча должен совпадать с местом нажатия мыши (если это возможно без пересечения краёв поля);
// CSS-анимация желательна, но не обязательна;
// Мяч ни в коем случае не должен пересекать границы поля;
// При прокрутке страницы ничего не должно ломаться;
// Заметки:
// Код должен уметь работать с различными размерами мяча и поля, не привязываться к каким-либо фиксированным значениям.
// Используйте свойства event.clientX/event.clientY для определения координат мыши при клике.

// field.onclick = function(event) {
//     let fieldCoords = this.getBoundingClientRect();

//     let ballCoords = {
//         top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
//         left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
//     };
//     if (ballCoords.top < 0) ballCoords.top = 0;

//     if (ballCoords.left < 0) ballCoords.left = 0;

//     if (ballCoords.left + ball.clientWidth > field.clientWidth) {
//         ballCoords.left = field.clientWidth - ball.clientWidth;
//     }
//     if (ballCoords.top + ball.clientHeight > field.clientHeight) {
//         ballCoords.top = field.clientHeight - ball.clientHeight;
//     }
//     ball.style.left = ballCoords.left + 'px';
//     ball.style.top = ballCoords.top + 'px';
// };



// Задание №10. Добавить кнопку закрытия
// Есть список сообщений.
// При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.

// let divMassive = document.querySelectorAll('.pane');

// Array.from(divMassive, function (item) {
//     let newButton = document.createElement('button');
//     newButton.innerHTML = '[x]';
//     newButton.classList.add('remove-button');

//     newButton.addEventListener('click', function () {
//         this.parentNode.hidden = true;
//     });

//     item.prepend(newButton);
// });



/* Задание №11. Добавьте пункт к выпадающему списку
Используя JavaScript:
1. Выведите значение и текст выбранного пункта.
2. Добавьте пункт: <option value="classic">Классика</option>.
3. Сделайте его выбранным. */

// let newListOption = new Option("Классика", "classic");
// genres.append(newListOption );

// newListOption.selected = true;
// document.querySelector('#genres').onchange = () => {
//     let selectedOption = genres.options[genres.selectedIndex];
//     console.log(selectedOption.value);
//     console.log(selectedOption.text);
// };