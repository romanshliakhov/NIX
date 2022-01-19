// Задание №1. Создайте календарь в виде таблицы
// Напишите функцию createCalendar(elem, year, month).
// Вызов функции должен создать календарь для заданного месяца month в году year и вставить его в elem.
// Календарь должен быть таблицей, где неделя – это <tr>, а день – это <td>. У таблицы должен быть заголовок с названиями дней недели, каждый день – <th>, первым днём недели должен быть понедельник.
// Например, createCalendar(cal, 2012, 9) сгенерирует в cal следующий календарь:
// P.S. В этой задаче достаточно сгенерировать календарь, кликабельным его делать не нужно.





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





/* Задание №3. Найдите координаты точек относительно окна браузера
Ниже располагается код документа с зелёным «полем».
Используйте JavaScript, чтобы найти координаты углов, обозначенных стрелками.
В документе уже реализована функциональность, когда при клике на любом месте 
показываются соответствующие координаты.
Кликните в любом месте для получения координат в контексте окна. 
Это для тестирования, чтобы проверить результат, который вы получили с помощью JavaScript.
Содержимое документа index.html:
<!DOCTYPE HTML>
<html>
<head>
 <meta charset="utf-8">
 <link rel="stylesheet" href="index.css">
 <script>
 document.onclick = function(e) { // показывает координаты точки
клика
 coords.innerHTML = e.clientX + ':' + e.clientY;
 };
 </script>
</head>
<body>
 Кликните в любом месте для получения координат в контексте окна.
 <br> Это для тестирования, чтобы проверить результат, который вы получили с помощью JavaScript.
 <br>
 <div id="coords">(координаты покажутся здесь)</div>
 <div id="field">
 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . .
 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . .
 </div>
 <div class="triangle-right" style="left:-20px;top:-176px">1</div>
 <div class="triangle-right" style="left:-10px;top:-178px">3</div>
 <div class="triangle-right" style="left:190px;top:-40px">4</div>
 <div class="triangle-right" style="left:200px;top:-42px">2</div>
 <script>
 // ...ваш код...
 </script>
</body>
</html>
Содержимое документа index.css:
body {
 padding: 20px 0 0 20px;
 cursor: pointer;
}
#field {
 overflow: hidden;
 width: 200px;
 height: 150px;
 border-top: 10px solid black;
 border-right: 10px solid gray;
 border-bottom: 10px solid gray;
 border-left: 10px solid black;
 background-color: #00FF00;
 font: 10px/1.2 monospace;
}
.triangle-right {
 position: relative;
 width: 0;
 height: 0;
 border-top: 6px solid transparent;
 border-bottom: 6px solid transparent;
 border-left: 20px solid red;
 text-indent: -20px;
 font: 12px/1 monospace;
}
Ваш код должен при помощи DOM получить четыре пары координат:
• верхний левый, внешний угол (это просто).
• нижний правый, внешний угол (тоже просто).
• верхний левый, внутренний угол (чуть сложнее).
• нижний правый, внутренний угол (есть несколько способов, выберите один).
Координаты, вычисленные вами, должны совпадать с теми, которые возвращаются по клику мыши.
P.S. Код должен работать, если у элемента другие размеры или есть рамка, без 
привязки к конкретным числам. */





// Задание №4. Покажите заметку рядом с элементом
// Создайте функцию positionAt(anchor, position, elem), которая позиционирует элемент elem в зависимости от значения свойства position рядом с элементом anchor.
// Аргумент position – строка с одним из 3 значений:
// • "top" – расположить elem прямо над anchor
// • "right" – расположить elem непосредственно справа от anchor
// • "bottom" – расположить elem прямо под anchor
// Она используется внутри функции showNote(anchor, position, html), которая уже есть в исходном коде задачи. Она создаёт и показывает элемент-«заметку» с текстом html на заданной позиции position рядом с элементом anchor.
// Содержимое документа index.html:
// <!DOCTYPE HTML>
// <html>
// <head>
//  <meta charset="utf-8">
//  <link rel="stylesheet" href="index.css">
// </head>
// <body>
//  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
// Reprehenderit sint atque dolorum fuga ad incidunt voluptatum error 
// fugiat animi amet! Odio temporibus nulla id unde quaerat dignissimos 
// enim nisi rem provident molestias sit tempore omnis recusandae
//  esse sequi officia sapiente.</p>
//  <blockquote>
//  Teacher: Why are you late?
//  Student: There was a man who lost a hundred dollar bill.
//  Teacher: That's nice. Were you helping him look for it?
//  Student: No. I was standing on it.
//  </blockquote>
//  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
// Reprehenderit sint atque dolorum fuga ad incidunt voluptatum error 
// fugiat animi amet! Odio temporibus nulla id unde quaerat dignissimos 
// enim nisi rem provident molestias sit tempore omnis recusandae
//  esse sequi officia sapiente.</p>
//  <script>
//  /**
//  * Позиционирует элемент elem относительно элемента anchor в соответствии со значением position.
//  *
//  * @param {Node} anchor элемент, около которого позиционируется другой элемент
//  * @param {string} position одно из: top/right/bottom
//  * @param {Node} elem элемент, который позиционируется
//  *
//  * Оба элемента elem и anchor должны присутствовать в документе
//  */
//  function positionAt(anchor, position, elem) {
//  // ... ваш код ...
//  }
//  /**
//  * Показывает заметку с заданным содержимым на заданной позиции относительно элемента anchor.
//  */
//  function showNote(anchor, position, html) {
//  let note = document.createElement('div');
//  note.className = "note";
//  note.innerHTML = html;
//  document.body.append(note);
//  positionAt(anchor, position, note);
//  }
//  // test it
//  let blockquote = document.querySelector('blockquote');
//  showNote(blockquote, "top", "note above");
//  showNote(blockquote, "right", "note at the right");
//  showNote(blockquote, "bottom", "note below");
//  </script>
// </body>
// </html>
// Содержимое документа index.css:
// .note {
//  position: fixed;
//  z-index: 1000;
//  padding: 5px;
//  border: 1px solid black;
//  background: white;
//  text-align: center;
//  font: italic 14px serif;
// }
// blockquote {
//  background: #f9f9f9;
//  border-left: 10px solid #ccc;
//  margin: 0 0 0 100px;
//  padding: .5em 10px;
//  quotes: "\201C""\201D""\2018""\2019";
//  display: inline-block;
//  white-space: pre;
// }
// blockquote:before {
//  color: #ccc;
//  content: open-quote;
//  font-size: 4em;
//  line-height: .1em;
//  margin-right: .25em;
//  vertical-align: -.4em;
// }
// DEMO заметки:




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
// // показывает заметку поверх цитаты
// positionAt(blockquote, "top-out", note);
// // показывает заметку внутри цитаты вблизи верхнего края элемента
// positionAt(blockquote, "top-in", note);




// Задание №7. Скрыть элемент по нажатию кнопки
// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.
// Содержимое документа index.html:
// <!DOCTYPE HTML>
// <html>
// <head>
//  <meta charset="utf-8">
// </head>
// <body>
//  <input type="button" id="hider" value="Нажмите, чтобы спрятать // текст" />
//  <div id="text">Текст</div>
//  <script>
//  /* ваш код */
//  </script>
// </body>
// </html>




// Задание №8. Какой обработчик запустится?
// В переменной button находится кнопка. Изначально на ней нет обработчиков.
// Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?
// button.addEventListener("click", () => alert("1"));
// button.removeEventListener("click", () => alert("1"));
// button.onclick = () => alert(2);





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
// Содержимое документа index.html:
// <!DOCTYPE HTML>
// <html>
// <head>
//  <meta charset="utf-8">
//  <style>
//  #field {
//  width: 200px;
//  height: 150px;
//  border: 10px solid black;
//  background-color: #00FF00;
//  overflow: hidden;
//  }
//  </style>
// </head>
// <body style="height:2000px">
//  Нажмите на поле для перемещения мяча.
//  <br> Мяч не должен выходить за границы поля.
//  <div id="field">
//  <img src="https://ru.js.cx/clipart/ball.svg" id="ball"> . . . . . 
// . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
// . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
// . . . . . . . . . . . . . . . . . . . . . .
//  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
// . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
// . . . . . . . . . . . .
//  </div>
// </body>
// </html>







// Задание №10. Добавить кнопку закрытия
// Есть список сообщений.
// При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.
// Результат должен выглядеть, как показано здесь:
// Содержимое документа index.html:
// <!DOCTYPE HTML>
// <html>
// <head>
//  <link rel="stylesheet" type="text/css" href="messages.css">
//  <meta charset="utf-8">
// </head>
// <body>
//  Код кнопки (возможно вам нужно будет изменить CSS):
//  <button class="remove-button">[x]</button>
//  <div>
//  <div class="pane">
//  <h3>Лошадь</h3>
//  <p>Домашняя лошадь — животное семейства непарнокопытных, 
// одомашненный и единственный сохранившийся подвид дикой лошади, 
// вымершей в дикой природе, за исключением небольшой популяции лошади
// Пржевальского.</p>
//  </div>
//  <div class="pane">
//  <h3>Осёл</h3>
//  <p>Домашний осёл (лат. Equus asinus asinus), или ишак, —
// одомашненный подвид дикого осла (Equus asinus), сыгравший важную
// историческую роль в развитии хозяйства и культуры человека и попрежнему широко в хозяйстве многих развивающихся стран.</p>
//  </div>
//  <div class="pane">
//  <h3>Кошка</h3>
//  <p>Кошка, или домашняя кошка (лат. Felis silvestris catus), —
// домашнее животное, одно из наиболее популярных(наряду с собакой) 
// «животных-компаньонов». Являясь одиночным охотником на грызунов и
// других мелких животных, кошка — социальное животное, использующее для
// общения широкий диапазон звуковых сигналов.</p>
//  </div>
//  </div>
// </body>
// </html>
// Содержимое документа messages.css:
// body {
//  margin: 10px auto;
//  width: 470px;
// }
// h3 {
//  margin: 0;
//  padding-bottom: .3em;
//  font-size: 1.1em;
// }
// p {
//  margin: 0;
//  padding: 0 0 .5em;
// }
// .pane {
//  background: #edf5e1;
//  padding: 10px 20px 10px;
//  border-top: solid 2px #c4df9b;
// }
// .remove-button {
//  font-size: 110%;
//  color: darkred;
//  right: 10px;
//  width: 24px;
//  height: 24px;
//  border: none;
//  background: transparent;
//  cursor: pointer;
// }




/* Задание №11. Добавьте пункт к выпадающему списку
Имеется <select>:
<select id="genres">
 <option value="rock">Рок</option>
 <option value="blues" selected>Блюз</option>
</select>
Используя JavaScript:
1. Выведите значение и текст выбранного пункта.
2. Добавьте пункт: <option value="classic">Классика</option>.
3. Сделайте его выбранным. */