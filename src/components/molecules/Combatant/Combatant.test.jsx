import React from 'react';

import { defaultCombatant } from './combatantDescription';
import Combatant from './';

describe('Checkbox', () => {
  it('should shallow render', () => {
    const wrapper = shallow(<Combatant combatant={defaultCombatant} />);
    expect(wrapper).toMatchSnapshot();
  });
});
