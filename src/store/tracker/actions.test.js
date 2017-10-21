import {
  ADD_COMBATANT,
  UPDATE_COMBATANT,
  action,
  addCombatantAction,
  updateCombatantAction,
} from './actions';
import { initialCombatantState } from './selectors';

describe('Tracker Actions', () => {
  it('should have a generic action creator helper', () => {
    const type = 'TEST_ACTION';
    const payload = {
      string: 'string',
      array: [1, 2],
    };
    const meta = {
      id: 0,
    };
    expect(action(type, payload, meta)).toEqual({
      type,
      payload,
      meta: {
        resource: 'tracker',
        ...meta,
      },
    });
  });

  it('should create addCombatantActions', () => {
    const newCombatant = initialCombatantState({
      name: 'Peerless Typhoon',
      initiative: 22,
    });
    expect(addCombatantAction(newCombatant.name, newCombatant.initiative)).toEqual({
      type: ADD_COMBATANT,
      payload: {
        combatant: {
          ...newCombatant,
          id: newCombatant.id + 1,
        },
      },
      meta: {
        resource: 'tracker',
        id: newCombatant.id + 1,
      },
    });
  });

  it('should create updateCombatantActions', () => {
    const newCombatant = initialCombatantState({
      name: 'Peerless Typhoon',
      initiative: 22,
    });
    expect(updateCombatantAction({
      ...newCombatant,
      initiative: 3,
      name: 'Flawless Tycoon',
    })).toEqual({
      type: UPDATE_COMBATANT,
      payload: {
        combatant: {
          ...newCombatant,
          initiative: 3,
          name: 'Flawless Tycoon',
        },
      },
      meta: {
        resource: 'tracker',
        id: newCombatant.id,
      },
    });
  });
});
