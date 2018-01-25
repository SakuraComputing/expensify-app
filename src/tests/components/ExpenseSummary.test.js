import React from 'react';
import { shallow } from 'enzyme';
import {ExpensesSummary} from "../../components/ExpensesSummary";
import expenses from '../fixtures/expenses';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


beforeEach(() => {

});

test('it should render ',() => {
   const wrapper = shallow(<ExpensesSummary/>);
   expect(wrapper).toMatchSnapshot();
});

test('it should show one expense totalling $2.35',() => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>);
    const expenseSummaryField = wrapper.find('.expense-summary').text();
    expect(expenseSummaryField).toEqual('$2.35');
});

test('it should show twenty three expenses totalling $2,354,544.47',() => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={235454447}/>);
    const expenseSummaryField = wrapper.find('.expense-summary').text();
    expect(expenseSummaryField).toEqual('$2,354,544.47');
});

