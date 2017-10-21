import { connect } from 'react-redux';
import { map } from 'lodash';

import { updateCombatantAction } from '../../store/tracker/actions';
import Tracker from '../../components/pages/Tracker';

const mapStateToProps = ({ tracker: { combatantsById, allCombatants } }) => ({
  combatants: map(allCombatants, id => combatantsById[id]),
});
const mapDispatchToProps = dispatch => ({
  dispatchUpdateCombatant: newCombatant => dispatch(updateCombatantAction(newCombatant)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tracker);
