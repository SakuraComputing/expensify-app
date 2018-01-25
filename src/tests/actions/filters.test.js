import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from "../../actions/filters";

test('should set start date action object',() => {
    const result = setStartDate(moment(0));
    expect(result).toEqual = ({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

test('should set end date action object',() => {
    const result = setEndDate(moment(0));
    expect(result).toEqual = ({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});

test('should set text filter object',() => {
   const action = setTextFilter('test');
   expect(action).toEqual = ({
       type: 'SET_TEXT_FILTER',
       text: 'test'
   })
});

test('should set default text filter object',() => {
    const action = setTextFilter();
    expect(action).toEqual = ({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});

test('should set sort by date action object',() => {
   expect(sortByDate()).toEqual = ({ type: 'SORT_BY_DATE' })
});

test('should set sort by amount action object',() => {
    expect(sortByAmount()).toEqual = ({ type: 'SORT_BY_AMOUNT' })
});

