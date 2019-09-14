'use strict';

let money,
	addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', '100,5000,500'),
	deposit = confirm('Есть ли у вас депозит в банке?');

let start = function () {
	// do {
	// 	money = prompt('Ваш месячный доход?', 16000);
	// } while (money === '' || money === null || isNaN(money));
	money = ifResult('Ваш месячный доход?', 16000);
}
start();

function ifResult(desc, def) {
	let res;
	do {
		res = prompt(desc, def);
	} while (res === '' || res === null || isNaN(res));
	return +res;
}

console.log('Расходы за период:' + addExpenses.split(','));

function showTypeof(data) {
	return data, typeof data;
}

console.log('Тип ' + showTypeof(money));
console.log('Тип ' + showTypeof(addExpenses));
console.log('Тип ' + showTypeof(deposit));


const mission = 5000000;

function getStatusIncome(b) {
	if (b > 800) {
		return 'Высокий уровень дохода';
	} else if (b > 300 && b < 800) {
		return 'Средний уровень дохода';
	} else if (b > 0 && b < 300) {
		return 'Низкий уровень дохода';
	} else if (b < 0) {
		return 'Что то пошло не так';
	} else {
		return 'Значения 0, 300 и 800';
	}
}



//Функция возвращает сумму всех расходов за месяц
function getExpensesMonth() {
	let sum = 0,
		ifSum = false;


	for (let i = 0; i < 2; i++) {
		if (i == 0) {
			let costs1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Детский сад');
		} else {
			let costs2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'ЖКХ');
		}
		sum += ifResult('Во сколько это обойдется?', 2000);
	}
	return sum;
}


let ExpensesMonth = getExpensesMonth();
console.log('ExpensesMonth' + ExpensesMonth);

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

console.log('Накопления за период: ' + accumulatedMonth);

if (getTargetMonth() < 0) {
	console.log('Цель не будет достигнута');
} else {
	console.log('Cрок достижения цели в месяцах: ' + getTargetMonth());
}