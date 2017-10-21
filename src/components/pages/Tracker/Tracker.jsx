import { map } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import AddCombatant from '../../../containers/AddCombatant';
import Combatant from '../../molecules/Combatant';

const Tracker = ({ combatants, dispatchUpdateCombatant }) => (
  <div>
    <section>
      {map(combatants, combatant => (
        <Combatant
          key={combatant.id}
          combatant={combatant}
          onChange={dispatchUpdateCombatant}
        />
      ))}
    </section>
    <AddCombatant />
  </div>
);

Tracker.propTypes = {
  combatants: PropTypes.arrayOf(Combatant.propTypes.combatant).isRequired,
  dispatchUpdateCombatant: PropTypes.func.isRequired,
};

export default Tracker;
