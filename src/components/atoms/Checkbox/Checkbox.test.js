import React from 'react';

import Checkbox from './';

describe('Checkbox', () => {
  it('should shallow render', () => {
    const wrapper = shallow(<Checkbox />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not have checked=true when unchecked', () => {
    const wrapper = shallow(<Checkbox />);
    expect(wrapper.find('input').props().checked).toBe(false);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have checked=true when checked', () => {
    const wrapper = shallow(<Checkbox checked />);
    expect(wrapper.find('input').props().checked).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
