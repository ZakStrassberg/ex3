import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Checkbox from './';

storiesOf('Checkbox', module)
  .add('without label', () => (
    <div>
      <Checkbox name="checkbox" />
      <Checkbox name="checkbox" checked />
    </div>
  ))
  .add('with labels', () => (
    <div>
      <div>
        <Checkbox name="checkbox" label="Unchecked" />
      </div>
      <div>
        <Checkbox name="checkbox" label="Checked" checked />
      </div>
    </div>
  ));
