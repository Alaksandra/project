'use strict';

let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');
let staff = prompt('Введите обязательную статью расходов в этом месяце', '');
let cost = prompt('Во сколько обойдется?', '');

let appData = {
  butjet: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
}

appData.expenses[staff] = cost;

console.log(appData);

alert(appData.butjet / 30);