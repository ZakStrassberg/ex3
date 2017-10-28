import { fromPairs, map } from 'lodash';

import { ABILITIES, ATTRIBUTES, AWARENESS, SOLAR, SOLAR_NIGHT } from './constants';

export const defaultAttributes = fromPairs(map(ATTRIBUTES, label => [label, 1]));
export const defaultAbilities = fromPairs(map(ABILITIES, label => [label, 0]));

export const defaultCharacter = {
  name: 'Peerless Typhoon',
  player: 'Zak',
  concept: 'Hero for Hire',
  splat: {
    type: SOLAR,
    caste: SOLAR_NIGHT,
    supernal: AWARENESS,
    anima: 'Golden Cobra',
  },
  attributes: defaultAttributes,
  abilities: defaultAbilities,
  specialties: {},
  merits: [],
  willpower: {
    total: 5,
    available: 3,
  },
  limit: 0,
  limitTrigger: '',
  essence: 3,
  motes: {
    peripheral: {
      total: 20,
      comitted: 0,
      available: 13,
    },
    personal: {
      total: 40,
      comitted: 8,
      available: 33,
    },
  },
  experience: {
    total: 125,
    current: 125,
    splatTotal: 40,
    splatCurrent: 30,
  },
  weapons: {},
  health: {},
};

export const initialState = {
  charactersById: {
    1: defaultCharacter,
  },
  allCharacters: [1],
};
