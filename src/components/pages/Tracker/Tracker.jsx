import { map } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { Caption, Display } from '../../atoms/Typography';
import AddCombatant from '../../../containers/AddCombatant';
import Button from '../../atoms/Button';
import Combatant from '../../molecules/Combatant';

const TrackerContainer = styled.div`
  max-width: 415px;
  margin: 0 auto;
  > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;
const TrackerHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TurnDisplay = styled.div``;
const ActiveDisplay = styled.div`
  flex: 0 0 auto;
`;
const TurnOverButton = styled(Button)``;

const Tracker = ({
  combatants,
  dispatchUpdateCombatant,
  dispatchEndTurnActions,
  turn,
  activeCombatants,
  sortedCombatants,
}) => (
  <TrackerContainer>
    <TrackerHeader>
      <TurnDisplay>
        <Caption>Turn</Caption>
        <Display>{turn}</Display>
      </TurnDisplay>
      <TurnOverButton onClick={() => dispatchEndTurnActions(sortedCombatants.map(({ id }) => id))}>
        End Turn
      </TurnOverButton>
      <ActiveDisplay>
        <Caption>Active</Caption>
        <Display>{activeCombatants.map(({ name }) => name).join(' ')}</Display>
      </ActiveDisplay>
    </TrackerHeader>
    {map(combatants, combatant => (
      <Combatant key={combatant.id} combatant={combatant} onChange={dispatchUpdateCombatant} />
    ))}
    <AddCombatant />
  </TrackerContainer>
);

Tracker.propTypes = {
  combatants: PropTypes.arrayOf(Combatant.propTypes.combatant).isRequired,
  sortedCombatants: PropTypes.arrayOf(Combatant.propTypes.combatant).isRequired,
  activeCombatants: PropTypes.arrayOf(Combatant.propTypes.combatant),
  dispatchUpdateCombatant: PropTypes.func.isRequired,
  dispatchEndTurnActions: PropTypes.func.isRequired,
  turn: PropTypes.number.isRequired,
};

Tracker.defaultProps = {
  activeCombatants: [],
};

export default Tracker;
