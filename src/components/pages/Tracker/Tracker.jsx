import { map } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Combatant from '../../molecules/Combatant';

const Tracker = ({ combatants }) => (
  <div>{map(combatants, combatant => <Combatant combatant={combatant} />)}</div>
);

Tracker.propTypes = {
  combatants: PropTypes.arrayOf(Combatant.propTypes.combatant),
};

export default Tracker;
