'use strict';

let money = +prompt('Ваш месячный доход?'),
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?');

console.log('Расходы за период:'+addExpenses.split(','));
console.log('Тип money ' + typeof(money));
console.log('Тип addExpenses ' + typeof(addExpenses));
console.log('Тип deposit ' + typeof(deposit));

let costs1 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    money1 = +prompt('Во сколько это обойдется?'),
    costs2 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    money2 = +prompt('Во сколько это обойдется?');

let budgetMonth = money - money1 - money2;
console.log('Доход за месяц:' + budgetMonth);

const mission = 5000000;
console.log('Через '+ Math.ceil(mission / budgetMonth)+' месяц(ев) будет достигнута цель в ' + mission+ ' руб.');

let budgetDay = Math.floor(budgetMonth / 30);

if (budgetDay>800){
   console.log('Высокий уровень дохода');  
} else if (budgetDay>300 && budgetDay<800) {
    console.log('Средний уровень дохода');  
} else if (budgetDay>0 && budgetDay<300) {
    console.log('Низкий уровень дохода');  
} else if (budgetDay<0) {
    console.log('Что то пошло не так');  
} else {
    console.log('Значения 0, 300 и 800'); 
}    

