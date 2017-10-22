import { connect } from 'react-redux';
import { map, orderBy, filter, first } from 'lodash';

import {
  endTurnAction,
  sortCombatantsAction,
  updateCombatantAction,
} from '../../store/tracker/actions';
import Tracker from '../../components/pages/Tracker';

const mapStateToProps = ({ tracker: { combatantsById, allCombatants, turn } }) => {
  const sortedCombatants = orderBy(combatantsById, 'initiative', 'desc');
  const noTurnOverSortedCombatants = filter(sortedCombatants, { turnOver: false });
  const activeCombatants = filter(noTurnOverSortedCombatants, {
    initiative: (first(noTurnOverSortedCombatants) || {}).initiative,
  });

  return {
    combatants: map(allCombatants, id => combatantsById[id]),
    sortedCombatants,
    turn,
    activeCombatants,
  };
};
const mapDispatchToProps = dispatch => ({
  dispatchUpdateCombatant: newCombatant => dispatch(updateCombatantAction(newCombatant)),
  dispatchEndTurnActions: (combatantIdsSortedByInitiative) => {
    dispatch(endTurnAction());
    dispatch(sortCombatantsAction(combatantIdsSortedByInitiative));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Tracker);
