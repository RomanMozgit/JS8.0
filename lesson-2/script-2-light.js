let money = 55000,
    income = '25000',
    addExpenses = '16000,500,6000',
    deposit = true,
    mission = 10000000000,
    period = 9;

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log(income.length);
console.log('Период ('+period+') месяцев');
console.log('Цель заработать ('+mission+') долларов');
console.log(addExpenses.toLowerCase().split(',')); 
let budgetDay = (money % 30);
console.log(budgetDay);

 
 