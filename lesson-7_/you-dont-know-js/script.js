'use strict';

let listBooks = document.querySelectorAll('.book'),
	books = document.querySelector('.books'),
	body = document.querySelector('body'),
	titleBook = listBooks[4].querySelector('h2 a'),
	adv = document.querySelector('.adv'),
	ulBook2 = listBooks[0].querySelector('ul'),
	liBook2 = ulBook2.querySelectorAll('li'),
	ulBook5 = listBooks[5].querySelector('ul'),
	liBook5 = ulBook5.querySelectorAll('li'),
	ulBook6 = listBooks[2].querySelector('ul'),
	liBook6 = ulBook6.querySelectorAll('li');;

// Восстановить порядок книг.
books.insertBefore(listBooks[2], null);
books.insertBefore(listBooks[1], listBooks[0]);
books.insertBefore(listBooks[4], listBooks[3]);

//Заменить картинку заднего фона на другую из папки image
body.setAttribute('style', 'background: url(./image/you-dont-know-js.jpg) center center');

//Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
titleBook.textContent = 'Книга 3. this и Прототипы Объектов';

//Удалить рекламу со страницы
body.removeChild(adv);

//Восстановить порядок глав во второй и пятой книге
ulBook2.insertBefore(liBook2[6], liBook2[4]);
ulBook2.insertBefore(liBook2[8], liBook2[4]);
ulBook2.insertBefore(liBook2[2], liBook2[10]);

ulBook5.insertBefore(liBook5[9], liBook5[2]);
ulBook5.insertBefore(liBook5[2], liBook5[5]);
ulBook5.insertBefore(liBook5[5], liBook5[8]);

//в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
let elemLi = document.createElement('li');
elemLi.textContent = 'Глава 8: За пределами ES6';
ulBook6.insertBefore(elemLi, liBook6[9]);