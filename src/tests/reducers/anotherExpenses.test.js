import ExpenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('it should test default',() => {
    const state = ExpenseReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('it should add expense',() => {
    const expense = {
        id: '5',
        description: 'test',
        amount: 1095,
        createdAt: moment(0).add(5, 'days')
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = ExpenseReducer(expenses, action);
    expect(state).toEqual([...expenses, expense])
});

test('it should edit expense when valid id is passed in',() => {
    const description  = 'Change';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description
        }
    };
    const state = ExpenseReducer(expenses, action);
    expect(state[1].description).toBe('Change');
});

test('it should not edit expense when an invalid id is passed it', () => {
   const action = {
       type: 'EDIT_EXPENSE',
       id: -1000
   };
   const state = ExpenseReducer(expenses, action);
   expect(state).toEqual(expenses)
});

test('it should remove an expense when a valid id is passed in ',() => {
   const action = {
       type: 'REMOVE_EXPENSE',
       id: expenses[1].id
   }
   const state = ExpenseReducer(expenses, action);
   expect(state).toEqual([expenses[0], expenses[2]])
});