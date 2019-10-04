'use strict';

let p = document.querySelector('p');
let div = document.querySelectorAll('div');
let dateNow = new Date();
let dateDay = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let dayNow = dateNow.getDay();
let timeOfDay, dayWeek, quantityDay;
console.log(dateNow);


// время суток
if (dateNow.getHours() >= 0 && dateNow.getHours() < 6) {
    timeOfDay = 'Доброй ночи';
} else if(dateNow.getHours() >= 6 && dateNow.getHours() < 12) {
    timeOfDay = 'Доброе утро';
} else if(dateNow.getHours() >= 12 && dateNow.getHours() < 18) {
    timeOfDay = 'Добрый день';
} else {
    timeOfDay = 'Добрый вечер';
}

// день недели
function getDays(days) {
    dayWeek = dateDay[days];
}
getDays(dayNow);

// таймер
function currentClock() {
    let dateNow = new Date();

    let currentSec = dateNow.getSeconds();
    let currentMin = dateNow.getMinutes();
    let currentHour = dateNow.getHours();    
    let ampm = currentHour >= 12 ? 'PM' : 'AM';

    currentHour = currentHour % 12;
    currentHour = currentHour ? currentHour : 12;

    currentSec = (currentSec < 10) ? currentSec = "0" + currentSec : currentSec;    
    currentMin = (currentMin < 10) ? currentMin = "0" + currentMin : currentMin;    
    currentHour = (currentHour < 10) ? currentHour = "0" + currentHour : currentHour; 

    let time = `${currentHour} : ${currentMin} : ${currentSec}`;

    div[2].innerHTML = `Текущее время: ${time} ${ampm}`;
  }   

  setInterval(currentClock, 100);

// дней до нового года
function newYear(deadline) {

    let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000;     

        timeOfDay = Math.floor(timeRemaining / 60 / 60 / 24);
        
    div[3].innerHTML = `До нового года осталось ${timeOfDay} дней`;
    
}

setInterval(newYear, 100, '01 january 2020');


div[0].innerHTML = `${timeOfDay} !`;
div[1].innerHTML = `Сегодня: ${dayWeek}`;