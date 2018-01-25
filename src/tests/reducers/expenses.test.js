import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state',() => {
   const state = expensesReducer(undefined, { type: '@@INIT'});
   expect(state).toEqual([]);
});

test('should remove expense by id',() => {
    const action = {
      type: 'REMOVE_EXPENSE',
      id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove when invalid id passed in',() => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense',() => {
    const expense = {
        id: '5',
        description: 'test',
        note: '',
        amount: 14500,
        createdAt: moment().add(40, 'years')
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses , action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense',() => {
    const text = 'Update Text';

    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            text
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].text).toBe('Update Text');
});

// should not edit an expense if expense is not found
test('it should not edit an expense if the id is incorrect',() => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: -1000
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('it should set the expense data',() => {
   const action = {
       type: 'SET_EXPENSES',
       expenses
   };
   const state = expensesReducer(expenses, action);
   expect(state).toEqual(expenses);
});
