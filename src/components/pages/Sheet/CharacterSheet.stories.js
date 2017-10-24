import React from 'react';

import { storiesOf } from '@storybook/react';

import CharacterSheet from './';

const defaultSheet = {
  id: 1,
  name: 'Harmonious Jade',
};

storiesOf('Sheet.pages.CharacterSheet', module).add('default', () => <CharacterSheet character={defaultSheet} />);
