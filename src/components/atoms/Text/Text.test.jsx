import React from 'react';

import Text from './';

describe('Checkbox', () => {
  it('should shallow render', () => {
    const wrapper = shallow(<Text value="" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render value when passed props', () => {
    const value = 'Test';
    const wrapper = shallow(<Text value={value} />);
    expect(wrapper.find('input').props().value).toBe(value);
    expect(wrapper).toMatchSnapshot();
  });
});
