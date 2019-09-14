'use strict';

let money,
	income = 'Фриланс';

let start = function () {

	return ifResult('Ваш месячный доход?', 16000, true);
}

let appData = {
	budget: start(),
	budgetDay: 0,
	budgetMonth: 0,
	expensesMonth: 0,
	income: {},
	addIncome: [],
	expenses: {},
	addExpenses: [],
	deposit: false,
	percentDeposit: 0,
	moneyDeposit: 0,
	mission: 50000,
	period: 3,
	asking: function () {
		let sum = 0,
			costsArr = new Array(),
			addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'ремонт,кредит,дет.сад');

		if (confirm('Есть ли у вас дополнительный заработок?')) {
			let itemIncome = ifResult('Какой у вас дополнительный заработок', 'Таксую', false),
				cashIncome = ifResult('Сколько в месяц вы на этом зарабатываете', 1000, true);
			appData.income[itemIncome] = cashIncome;
		}

		appData.addExpenses = addExpenses.toLowerCase().split(',');
		// console.log('appData.addExpenses ' + appData.addExpenses);

		appData.deposit = confirm('Есть ли у вас депозит в банке?');

		for (let i = 0; i < 2; i++) {
			if (i == 0) {
				costsArr['ответ на первый вопрос'] = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Детский сад');

			} else {
				costsArr['ответ на второй вопрос'] = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'ЖКХ');
			}
			appData.expenses = costsArr;

			sum += ifResult('Во сколько это обойдется?', 2000, true);
		}
		// console.log('sum ' + sum);
		return sum;

	},
	getExpensesMonth: function () {
		appData.expensesMonth = appData.asking();
		// console.log('appData.expensesMonth: ' + appData.expensesMonth);
	},
	getAccumulatedMonth: function () {
		// console.log('appData.budget' + appData.budget);
		// console.log('appData.expensesMonth' + appData.expensesMonth);

		return appData.budget - appData.expensesMonth;
	},
	getTargetMonth: function () {
		return Math.floor(appData.mission / appData.getAccumulatedMonth());
	},
	getStatusIncome: function (b) {
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
	},
	getInfoDeposit: function () {
		if (appData.deposit) {
			appData.percentDeposit = ifResult('Какой годовой процент?', 10, true);
			appData.moneyDeposit = ifResult('Какая сумма заложена?', 8000, true);
		}
	},
	calcSavedMoney: function () {
		return appData.budgetMonth * appData.period;
	}
}


function ifResult(desc, def, bool) {
	let res, b;
	if (bool) {
		do {
			res = prompt(desc, def);
		} while (res === '' || res === null || isNaN(res));
	} else {
		do {
			res = prompt(desc, def);
		} while (res === '' || res === null || !isNaN(res));
	}
	return +res;
}

appData.getExpensesMonth();

//console.log('Расходы за период:' + appData.addExpenses);

appData.accumulatedMonth = appData.getAccumulatedMonth();

console.log('Уровень дохода: ' + appData.getStatusIncome(appData.getAccumulatedMonth()));

console.log('Накопления за период: ' + appData.getAccumulatedMonth());

if (appData.getTargetMonth() < 0) {
	console.log('Цель не будет достигнута');
} else {
	console.log('Cрок достижения цели в месяцах: ' + appData.getTargetMonth());
}
console.log('Наша программа включает в себя данные:');
for (let key in appData) {
	console.log(key + ' ' + appData[key]);
}

let s;
for (let i = 0; i <= appData.addExpenses.length - 1; i++) {
	s = appData.addExpenses[i];
	appData.addExpenses[i] = s[0].toUpperCase() + s.slice(1);
}
console.log(appData.addExpenses.join(', '));