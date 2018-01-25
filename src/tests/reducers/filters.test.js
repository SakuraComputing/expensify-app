import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values',() => {
   const state = filtersReducer(undefined, { type: '@@INIT' });
   expect(state).toEqual({
       text: '',
       sortBy: 'date',
       startDate: moment().startOf('month'),
       endDate: moment().endOf('month')
   });
});

test('should set sort by to amount',() => {
   const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});
   expect(state.sortBy).toBe('amount');
});

test('should set sortBy date',() => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = { type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

// should set text filter
test('should set the test filter',() => {
    const state = filtersReducer( undefined, { type: 'SET_TEXT_FILTER', text: 'test'});
    expect(state.text).toBe('test');

});

// should set start date
test('should set the start date',() => {
    const state = filtersReducer( undefined, { type: 'SET_START_DATE', startDate: 1000 });
    expect(state.startDate).toBe(1000);
});

// should set end date
test('should set end date',() => {
   const state = filtersReducer( undefined, { type: 'SET_END_DATE', endDate: 2000 });
   expect(state.endDate).toBe(2000);
});