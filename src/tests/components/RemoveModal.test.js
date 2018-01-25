import React from 'react';
import { shallow } from 'enzyme';
import RemoveModal from '../../components/RemoveModal';


test('should render the remove modal form correctly', () => {
   const wrapper = shallow(<RemoveModal/>);
   expect(wrapper).toMatchSnapshot();
});
