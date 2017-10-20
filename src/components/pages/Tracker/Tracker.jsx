import { map } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import AddCombatant from '../../molecules/AddCombatant/AddCombatant';
import Combatant from '../../molecules/Combatant';

const Tracker = ({ combatants }) => (
  <div>
    <section>{map(combatants, combatant => <Combatant combatant={combatant} />)}</section>
    <AddCombatant />
  </div>
);

Tracker.propTypes = {
  combatants: PropTypes.arrayOf(Combatant.propTypes.combatant),
};

export default Tracker;
