import { omit, without } from 'lodash';

import { ADD_COMBATANT, REMOVE_COMBATANT, action } from './actions';
import { initialCombatantState, initialState, emptyState } from './selectors';
import { mergeWithArrays } from '../../util';
import reducer from './reducer';

const addCombatantToState = (modifiedState, combatant) =>
  reducer(modifiedState, action(ADD_COMBATANT, { combatant }, { id: combatant.id }));

describe('Tracker reducer', () => {
  it('returns the intial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  describe('ADD_COMBATANT', () => {
    it('adds a new combatant to the initial state', () => {
      const combatant = initialCombatantState();
      expect(addCombatantToState(initialState, combatant))
        // comment for line length
        .toEqual(mergeWithArrays(initialState, {
          combatantsById: { [combatant.id]: combatant },
          allCombatants: [combatant.id],
        }));
    });

    it('adds a new combatant to an empty state', () => {
      const combatant = initialCombatantState();
      expect(reducer(emptyState, action(ADD_COMBATANT, { combatant }, { id: combatant.id })))
        // comment to keep line breaks
        .toEqual(mergeWithArrays(emptyState, {
          combatantsById: { [combatant.id]: combatant },
          allCombatants: [combatant.id],
        }));
    });

    it('adds a new combatant to a modified state', () => {
      const modifiedState = { ...emptyState };
      const combatant1 = initialCombatantState();
      expect(addCombatantToState(modifiedState, combatant1))
        // comment to keep line breaks
        .toEqual(mergeWithArrays(emptyState, {
          combatantsById: { [combatant1.id]: combatant1 },
          allCombatants: [combatant1.id],
        }));

      const combatant2 = initialCombatantState();
      expect(reducer(
        modifiedState,
        action(ADD_COMBATANT, { combatant: combatant2 }, { id: combatant2.id })
      ))
        // comment to keep line breaks
        .toEqual(mergeWithArrays(modifiedState, {
          combatantsById: { [combatant2.id]: combatant2 },
          allCombatants: [combatant2.id],
        }));
    });
  });

  describe('REMOVE_COMBATANT', () => {
    it('should remove HJ from combatants when passed her id', () => {
      const id = 1;
      expect(reducer(initialState, action(REMOVE_COMBATANT, {}, { id }))).toEqual({
        combatantsById: omit(initialState.combatantsById, { id }),
        allCombatants: without(initialState.allCombatants, id),
      });
    });

    it("should fail gracefully when attempting to remove combatant that doesn't exist", () => {
      const id = 999;
      expect(reducer(initialState, action(REMOVE_COMBATANT, {}, { id }))).toEqual(initialState);
    });
  });
});
