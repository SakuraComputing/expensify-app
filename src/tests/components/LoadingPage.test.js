import React from 'react';
import LoadingPage from '../../components/LoadingPage';
import { shallow } from 'enzyme';

test('LoadingPage should render correctly', () => {
   const wrapper = shallow(<LoadingPage />);
   expect(wrapper).toMatchSnapshot();
});