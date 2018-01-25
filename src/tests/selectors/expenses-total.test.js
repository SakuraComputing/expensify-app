import React from 'react';
import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

let emptyExpenses;

test('it should return zero if no expenses exist',() => {
   emptyExpenses = [];
   const result = getExpensesTotal(emptyExpenses);
   expect(result).toBe(0);
});

test('it should return a single expense',() => {
   const result = getExpensesTotal([expenses[0]]);
   expect(result).toBe(195);
});

test('it should return multiple expenses',() => {
   const result = getExpensesTotal(expenses);
   expect(result).toBe(114195);
});