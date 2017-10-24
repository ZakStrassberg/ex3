import React from 'react';
import { random } from 'lodash';
import { storiesOf } from '@storybook/react';

import DotscaleGrid from './';

const attributes = [
  'Strength',
  'Dexterity',
  'Stamina',
  'Intelligence',
  'Wits',
  'Perception',
  'Charisma',
  'Manipulation',
  'Appearance',
].map(label => ({
  label,
  score: random(0, 5),
}));

const abilities = [
  'Athletics',
  'Archery',
  'Awareness',
  'Brawl',
  'Bureaucracy',
  'Craft',
  'Investigation',
  'Linguistics',
  'Martial',
  'Medicine',
  'Melee',
].map(label => ({
  label,
  score: random(0, 5),
}));

storiesOf('Sheet.molecules.DotscaleGrid', module)
  .add('default', () => (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <DotscaleGrid label="Abilities" items={abilities} />
    </div>
  ))
  .add('multicol', () => (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <DotscaleGrid label="Attributes" items={attributes} columns={3} min={1} />
      <div style={{ marginBottom: '50px' }} />
      <DotscaleGrid label="Abilities" items={abilities} columns={2} />
    </div>
  ));
