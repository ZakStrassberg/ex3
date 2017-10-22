import { omit, without, mapValues, map, orderBy } from 'lodash';

import { ADD_COMBATANT, END_TURN, REMOVE_COMBATANT, SORT_COMBATANTS, action } from './actions';
import { initialCombatantState, initialState, emptyState } from './selectors';
import { mergeWithArrays } from '../../services/util';
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
        .toEqual(
          mergeWithArrays(initialState, {
            combatantsById: { [combatant.id]: combatant },
            allCombatants: [combatant.id],
          })
        );
    });

    it('adds a new combatant to an empty state', () => {
      const combatant = initialCombatantState();
      expect(reducer(emptyState, action(ADD_COMBATANT, { combatant }, { id: combatant.id })))
        // comment to keep line breaks
        .toEqual(
          mergeWithArrays(emptyState, {
            combatantsById: { [combatant.id]: combatant },
            allCombatants: [combatant.id],
          })
        );
    });

    it('adds a new combatant to a modified state', () => {
      const modifiedState = { ...emptyState };
      const combatant1 = initialCombatantState();
      expect(addCombatantToState(modifiedState, combatant1))
        // comment to keep line breaks
        .toEqual(
          mergeWithArrays(emptyState, {
            combatantsById: { [combatant1.id]: combatant1 },
            allCombatants: [combatant1.id],
          })
        );

      const combatant2 = initialCombatantState();
      expect(
        reducer(
          modifiedState,
          action(ADD_COMBATANT, { combatant: combatant2 }, { id: combatant2.id })
        )
      )
        // comment to keep line breaks
        .toEqual(
          mergeWithArrays(modifiedState, {
            combatantsById: { [combatant2.id]: combatant2 },
            allCombatants: [combatant2.id],
          })
        );
    });
  });

  describe('REMOVE_COMBATANT', () => {
    it('should remove HJ from combatants when passed her id', () => {
      const id = 1;
      expect(reducer(initialState, action(REMOVE_COMBATANT, {}, { id }))).toEqual({
        combatantsById: omit(initialState.combatantsById, { id }),
        allCombatants: without(initialState.allCombatants, id),
        turn: 0,
      });
    });

    it("should fail gracefully when attempting to remove combatant that doesn't exist", () => {
      const id = 999;
      expect(reducer(initialState, action(REMOVE_COMBATANT, {}, { id }))).toEqual(initialState);
    });
  });

  describe('END_TURN', () => {
    it('advances turn number', () => {
      expect(reducer(initialState, action(END_TURN))).toEqual({
        ...initialState,
        turn: initialState.turn + 1,
      });
    });

    it('sets turnOver of all characters to false', () => {
      const endOfTurnCombatants = mapValues(initialState.combatantsById, c => ({
        ...c,
        turnOver: true,
      }));
      expect(
        reducer({ ...initialState, combatantsById: endOfTurnCombatants }, action(END_TURN))
      ).toEqual({ ...initialState, turn: initialState.turn + 1 });
    });
  });

  describe('SORT_COMBATANTS', () => {
    it('sorts combatants by initiative', () => {
      const unsortedState = {
        ...initialState,
        allCombatants: map(orderBy(initialState.combatantsById, 'name', 'desc'), ({ id }) => id),
      };
      expect(
        reducer(
          unsortedState,
          action(SORT_COMBATANTS, {
            combatantIdsSortedByInitiative: initialState.allCombatants,
          })
        )
      ).toEqual(initialState);
    });
  });
});
