'use strict';

let btnStart = document.getElementById('start'),
	btnCancel = document.querySelector('#cancel'),
	btnPlus_income_add = document.getElementsByTagName('button')[0],
	btnPlus_expenses_add = document.getElementsByTagName('button')[1],
	chk = document.querySelector('#deposit-check'),
	profit = document.querySelectorAll('.additional_income-item'),
	rstBudgetMonth = document.getElementsByClassName('budget_month-value')[0],
	rstBudgetDay = document.getElementsByClassName('budget_day-value')[0],
	rstExpensesMonth = document.getElementsByClassName('expenses_month-value')[0],
	rstAdditionalIncome = document.getElementsByClassName('additional_income-value')[0],
	rstAdditionalExpenses = document.getElementsByClassName('additional_expenses-value')[0],
	rstIncomePeriod = document.getElementsByClassName('income_period-value')[0],
	rstTargetMonth = document.getElementsByClassName('target_month-value')[0],
	salaryAmount = document.querySelector('.salary-amount'),
	incomeTitle = document.querySelector('.income-title'),
	incomeAmount = document.querySelector('.income-amount'),
	addIncomeItem = document.querySelectorAll('.additional_income-item'),
	expensesTitle = document.querySelector('.expenses-title'),
	expensesItems = document.querySelectorAll('.expenses-items'),
	additionalExpenses = document.querySelector('.result-additional_income'),
	resultExpensesItem = document.querySelector('.additional_expenses-value'),
	addExpensesItem = document.querySelector('.additional_expenses-item'),
	targetAmount = document.querySelector('.target-amount'),
	periodSelect = document.querySelector('.period-select'),
	additionalExpensesItem = document.querySelector('.additional_expenses_item'),
	incomeItems = document.querySelectorAll('.income-items'),
	periodAmount = document.querySelector('.period-amount');

let income = 'Фриланс';

const AppData = function () {
	this.budget = 0;
	this.budgetDay = 0;
	this.budgetMonth = 0;
	this.expensesMonth = 0;
	this.income = {};
	this.incomeMonth = 0;
	this.addIncome = [];
	this.expensess = {};
	this.addExpenses = [];
	this.deposit = false;
	this.percentDeposit = 0;
	this.moneyDeposit = 0;
	this.period = 3;
};

AppData.prototype.start = function () {
	this.getExpenses();

	this.budget = +salaryAmount.value;

	this.getExpensesMonth();
	this.getIncome();
	this.getAddExpenses();
	this.getAddIncome();
	this.getBudget();

	this.showResult();
	this.blockInput();
};

AppData.prototype.addExpensesBlock = function () {
	let cloneExpesesItem = expensesItems[0].cloneNode(true);
	expensesItems[0].parentNode.insertBefore(cloneExpesesItem, btnPlus_expenses_add);
	expensesItems = document.querySelectorAll('.expenses-items');
	if (expensesItems.length === 3) {
		btnPlus_expenses_add.style.display = 'none';
	}
};

AppData.prototype.addIncomeBlock = function () {
	let cloneIncomeItem = incomeItems[0].cloneNode(true);
	incomeItems[0].parentNode.insertBefore(cloneIncomeItem, btnPlus_income_add);
	incomeItems = document.querySelectorAll('.income-items');
	if (incomeItems.length === 3) {
		btnPlus_income_add.style.display = 'none';
	}
};
AppData.prototype.delIncomeBlock = function () {
	let count = false;
	incomeItems = document.querySelectorAll('.income-items');

	incomeItems.forEach(function (item) {
		if (count) {
			item.remove();
		}
		count = true;
	});

	btnPlus_income_add.style.display = 'block';
};
AppData.prototype.delExpensesBlock = function () {
	let count = false;
	expensesItems = document.querySelectorAll('.expenses-items');

	expensesItems.forEach(function (item) {
		if (count) {
			item.remove();
		}
		count = true;
	});

	btnPlus_expenses_add.style.display = 'block';
};
AppData.prototype.getAddIncome = function () {
	const _this = this;
	profit.forEach(function (item) {
		let itemValue = item.value.trim();
		if (itemValue !== '') {
			_this.addIncome.push(itemValue);
		}
	})
};
AppData.prototype.getAddExpenses = function () {
	const _this = this;
	let addExpenses = addExpensesItem.value.split(',');
	addExpenses.forEach(function (item) {

		item = item.trim();
		if (item !== '') {
			_this.addExpenses.push(item);
		}
	})
};
AppData.prototype.getExpenses = function () {
	const _this = this;
	expensesItems.forEach(function (item) {

		let itemExpenses = item.querySelector('.expenses-title').value;
		let cashExpenses = item.querySelector('.expenses-amount').value;
		if (itemExpenses !== '' && cashExpenses !== '') {
			_this.expensess[itemExpenses] = cashExpenses;
		}
	})
};
AppData.prototype.getIncome = function () {
	const _this = this;
	incomeItems.forEach(function (item) {

		let itemIncome = item.querySelector('.income-title').value;
		let cashIncome = item.querySelector('.income-amount').value;
		if (itemIncome !== '' && cashIncome !== '') {
			_this.income[itemIncome] = cashIncome;
		}
	})

	for (let key in this.income) {
		this.incomeMonth += +this.income[key];
	}
};
AppData.prototype.showResult = function () {
	rstBudgetMonth.value = this.budgetMonth;
	rstExpensesMonth.value = this.expensesMonth;
	rstBudgetDay.value = this.budgetDay;
	resultExpensesItem.value = this.addExpenses.join(', ');
	rstAdditionalIncome.value = this.addIncome.join(', ');
	rstTargetMonth.value = this.getTargetMonth();
	rstIncomePeriod.value = this.calcPeriod();

};
AppData.prototype.getInfoDeposit = function () {
	this.deposit = confirm('Есть ли у вас депозит в банке?');
	if (this.deposit) {
		this.percentDeposit = ifResult('Какой годовой процент?', 10, true);
		this.moneyDeposit = ifResult('Какая сумма заложена?', 8000, true);
	}
};
AppData.prototype.getExpensesMonth = function () {
	for (let key in this.expensess) {
		this.expensesMonth += +this.expensess[key];

	}
};
AppData.prototype.blockInput = function () {
	let mainBlock = document.querySelector('.data'),
		mainBlockItem = document.querySelectorAll('input');

	mainBlockItem.forEach(function (item) {
		if (item.type == 'text') {
			item.disabled = true;
		};
	})

	btnStart.setAttribute('style', 'display: none;');
	btnCancel.setAttribute('style', 'display: block;');
};
AppData.prototype.getBudget = function () {
	this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
	this.budgetDay = Math.floor(this.budgetMonth / 30);
};
AppData.prototype.getTargetMonth = function () {
	return Math.ceil(targetAmount.value / this.budgetMonth);
};
AppData.prototype.getStatusIncome = function () {
	if (this.budgetDay > 800) {
		return 'Высокий уровень дохода';
	} else if (this.budgetDay > 300) {
		return 'Средний уровень дохода';
	} else if (this.budgetDay > 0) {
		return 'Низкий уровень дохода';
	} else {
		return 'Что то пошло не так';
	}
};
AppData.prototype.calcPeriod = function () {
	return this.budgetMonth * periodSelect.value;
};
AppData.prototype.caclPeriodChange = function () {
	periodAmount.innerHTML = periodSelect.value;
	appData.showResult();
};
AppData.prototype.reset = function () {
	let mainBlock = document.querySelector('.data'),
		mainBlockItem = document.querySelectorAll('input');

	rstTargetMonth = document.getElementsByClassName('target_month-value')[0];

	mainBlockItem.forEach(function (item) {
		if (item.type == 'text') {
			item.disabled = false;
			item.value = '';
		}
	});

	this.budget = 0;
	this.budgetDay = 0;
	this.budgetMonth = 0;
	periodSelect.value = 1;


	this.caclPeriodChange();
	this.showResult();
	this.delIncomeBlock();
	this.delExpensesBlock();

	rstTargetMonth.value = 0;

	btnStart.setAttribute('style', 'display: block;');
	btnCancel.setAttribute('style', 'display: none;');
	btnStart.disabled = true;
}
AppData.prototype.eventsListeners = function () {
	btnStart.disabled = true;

	btnCancel.addEventListener('click', appData.reset.bind(appData));

	salaryAmount.addEventListener('input', function () {
		if (salaryAmount.value.trim() === '') {
			btnStart.disabled = true;
		} else {
			btnStart.disabled = false;
		}
	}, false);
	btnStart.addEventListener('click', appData.start.bind(appData));
	btnPlus_expenses_add.addEventListener('click', appData.addExpensesBlock.bind(appData));
	btnPlus_income_add.addEventListener('click', appData.addIncomeBlock.bind(appData));
	periodSelect.addEventListener('input', appData.caclPeriodChange.bind(appData));

};

const appData = new AppData();

appData.eventsListeners();

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



//console.log('Расходы за период:' + appData.addExpenses);

// appData.accumulatedMonth = appData.getAccumulatedMonth();

// console.log('Уровень дохода: ' + appData.getStatusIncome(appData.getAccumulatedMonth()));
// console.log('Накопления за период: ' + appData.getAccumulatedMonth());

// if (appData.getTargetMonth() < 0) {
// 	console.log('Цель не будет достигнута');
// } else {
// 	console.log('Cрок достижения цели в месяцах: ' + appData.getTargetMonth());
// }
// console.log('Наша программа включает в себя данные:');
// for (let key in appData) {
// 	console.log(key + ' ' + appData[key]);
// }

// let s;
// for (let i = 0; i <= appData.addExpenses.length - 1; i++) {
// 	s = appData.addExpenses[i];
// 	appData.addExpenses[i] = s[0].toUpperCase() + s.slice(1);
// }
// console.log(appData.addExpenses.join(', '));