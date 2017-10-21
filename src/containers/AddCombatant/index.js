import { connect } from 'react-redux';

import { addCombatantAction } from '../../store/tracker/actions';
import AddCombatant from '../../components/molecules/AddCombatant/AddCombatant';

const mapDispatchToProps = dispatch => ({
  sendAddCombatantRequest: (name, initiative) => dispatch(addCombatantAction(name, initiative)),
});

export default connect(null, mapDispatchToProps)(AddCombatant);
