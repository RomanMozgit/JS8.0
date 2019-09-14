'use strict';

let // Получить кнопку "Рассчитать" через id
    btnStart = document.getElementById('start'),
    
    // Получить кнопки “+” (плюс) через Tag, каждую в своей переменной. 
    btnPlus_income_add = document.getElementsByTagName('button')[0],    
    btnPlus_expenses_add = document.getElementsByTagName('button')[1],
    
    // получить чекбокс по id через querySelector
    chk = document.querySelector('#deposit-check'), 
    
    // Получить поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll
    profit = document.querySelectorAll('.additional_income-item'),
    
    // Получить все блоки в правой части программы через классы (которые имеют класс название-value, 
    //начиная с class="budget_day-value" и заканчивая class="target_month-value">)
    rstBudgetMonth = document.getElementsByClassName('budget_month-value'),
    rstBudgetDay = document.getElementsByClassName('budget_day-value'),
    rstExpensesMonth = document.getElementsByClassName('expenses_month-value'),
    rstAdditionalIncome = document.getElementsByClassName('additional_income-value'),
    rstAdditionalExpenses = document.getElementsByClassName('additional_expenses-value'),
    rstIncomePeriod = document.getElementsByClassName('income_period-value'),
    rstTargetMonth = document.getElementsByClassName('target_month-value'),
    
    // Получить оставшиеся поля через querySelector каждый в отдельную переменную (Инпуты с левой 
    //стороны не забудьте про range)
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    addIncomeItem = document.querySelectorAll('.additional_income-item'),    
    expensesTitle = document.querySelector('.expenses-title'),
    expensesAmount = document.querySelector('.expenses-amount'),
    addExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select');
  