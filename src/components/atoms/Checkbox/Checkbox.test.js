import { noop } from 'lodash';
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

  it('should change from unchecked to checked when clicked', () => {
    // let checkboxProps = {};
    // const toggleChecked = (value) => {
    //   console.log('!!!!!!');
    //   console.log(value);
    //   checkboxProps.checked = value.currentTarget.checked;
    // };
    // checkboxProps = {
    //   checked: false,
    //   onClick: toggleChecked,
    // };
    // const wrapper = shallow(<Checkbox {...checkboxProps} />);
    // expect(wrapper.find('input').props().checked).toBe(false);
    //
    // wrapper.find('input').simulate('click', {
    //   stopPropagation: noop,
    //   preventDefault: noop,
    //   currentTarget: {
    //     checked: !checkboxProps.checked,
    //   },
    // });
    // expect(wrapper.find('input').props().checked).toBe(true);
  });
});
