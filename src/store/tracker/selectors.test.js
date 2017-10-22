import { noop, omit } from 'lodash';

import {
  emptyState,
  getAllCombatants,
  getCombatant,
  getCombatantsById,
  initialCombatantState,
  initialState,
} from './selectors';

const altState = {
  combatantsById: {
    3: {
      onChange: noop,
      turnOver: false,
      id: 1,
      name: 'Harmonious Jade',
      initiative: 12,
    },
    4: {
      onChange: noop,
      id: 2,
      name: 'Peleps Deled',
      initiative: -3,
      turnOver: true,
    },
  },
  allCombatants: [3, 4],
};

test('initialState', () => {
  expect(initialState).toEqual({
    combatantsById: {
      1: {
        onChange: noop,
        turnOver: false,
        id: 1,
        name: 'Harmonious Jade',
        initiative: 12,
      },
      2: {
        onChange: noop,
        turnOver: false,
        id: 2,
        name: 'Lotus',
        initiative: 12,
      },
      3: {
        onChange: noop,
        turnOver: false,
        id: 3,
        name: 'Dread Scarlet',
        initiative: 6,
      },
      4: {
        onChange: noop,
        id: 4,
        name: 'Peleps Deled',
        initiative: -3,
        turnOver: false,
      },
    },
    allCombatants: [1, 2, 3, 4],
    turn: 0,
  });
});

test('emptyState', () => {
  expect(emptyState).toEqual({
    combatantsById: {},
    allCombatants: [],
    turn: 0,
  });
});

test('initialCombatantState', () => {
  expect(omit(initialCombatantState(), 'id')).toEqual({
    // id: Math.random(),
    name: '',
    initiative: 0,
    turnOver: false,
    onChange: noop,
  });
});

describe('getCombatant', () => {
  it('should get initialCombatantState when not passed store or given incorrect key', () => {
    expect(omit(getCombatant(), 'id')).toEqual(omit(initialCombatantState(), 'id'));
    expect(omit(getCombatant(undefined, 999), 'id')).toEqual(omit(initialCombatantState(), 'id'));
  });
  it('should find Harmonious Jade when passed altState and combatantId 3', () => {
    expect(getCombatant(altState, 3)).toBe(altState.combatantsById[3]);
  });
});

describe('getCombatantsById', () => {
  it('should always retrieve combatantsById object', () => {
    expect(getCombatantsById()).toBe(initialState.combatantsById);
    expect(getCombatantsById({})).toBe(initialState.combatantsById);
    expect(getCombatantsById(undefined)).toBe(initialState.combatantsById);
    expect(getCombatantsById(altState)).toBe(altState.combatantsById);
  });
});

test('getAllCombatants', () => {
  expect(getAllCombatants()).toBe(initialState.allCombatants);
  expect(getAllCombatants({})).toBe(initialState.allCombatants);
  expect(getAllCombatants(undefined)).toBe(initialState.allCombatants);
  expect(getAllCombatants(altState)).toBe(altState.allCombatants);
});

describe('initialCombatantState', () => {
  it('should generate a blank combatant with no params', () => {
    const genCombatant = initialCombatantState();
    expect(genCombatant).toEqual({
      name: '',
      initiative: 0,
      turnOver: false,
      id: genCombatant.id,
      onChange: noop,
    });
  });

  it('should take an object to customize combatant', () => {
    const genCombatant = initialCombatantState({ name: 'Peerless Typhoon', initiative: 22 });
    expect(genCombatant).toEqual({
      name: 'Peerless Typhoon',
      initiative: 22,
      onChange: noop,
      turnOver: false,
      id: genCombatant.id,
    });
  });
});
