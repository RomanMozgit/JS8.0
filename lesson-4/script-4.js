'use strict';

let money = +prompt('Ваш месячный доход?', 16000),
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую','100,5000,500'),
    deposit = confirm('Есть ли у вас депозит в банке?');

console.log('Расходы за период:'+addExpenses.split(','));

function showTypeof(data) {
    return data, typeof data;
}

console.log('Тип ' + showTypeof(money));
console.log('Тип ' + showTypeof(addExpenses));
console.log('Тип ' + showTypeof(deposit));


let costs1 = prompt('Какие обязательные ежемесячные расходы у вас есть?','Детский сад'),
    money1 = +prompt('Во сколько это обойдется?', 100),
    costs2 = prompt('Какие обязательные ежемесячные расходы у вас есть?','ЖКХ'),
    money2 = +prompt('Во сколько это обойдется?', 600);

const mission = 5000000;

function getStatusIncome(b) {
    if (b>800){
    return 'Высокий уровень дохода';  
    } else if (b>300 && b<800) {
        return 'Средний уровень дохода';  
    } else if (b>0 && b<300) {
        return 'Низкий уровень дохода';  
    } else if (b<0) {
        return 'Что то пошло не так';  
    } else {
        return'Значения 0, 300 и 800'; 
    }    
}



//Функция возвращает сумму всех расходов за месяц
function getExpensesMonth(x,y) {
    return x + y;
}
let ExpensesMonth = getExpensesMonth(money1, money2);


// Функция возвращает Накопления за месяц (Доходы минус расходы)
function getAccumulatedMonth() {
    return money - ExpensesMonth;
};
let accumulatedMonth = getAccumulatedMonth();

console.log(getStatusIncome(accumulatedMonth));

// Подсчитывает за какой период будет достигнута цель, 
// зная результат месячного накопления и возвращает результат
function getTargetMonth() {
    return Math.floor(mission / accumulatedMonth);
}

console.log('Накопления за период: '+ accumulatedMonth);
console.log('Cрок достижения цели в месяцах: ' + getTargetMonth());