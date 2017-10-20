import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Checkbox from './';

const defaultProps = {
  onClick: action('clicked'),
  name: "checkbox",
};

console.log('hi');

storiesOf('Checkbox', module)
  .add('without label', () => (
    <div>
      <Checkbox {...defaultProps} />
      <Checkbox {...defaultProps} checked />
    </div>
  ))
  .add('with labels', () => (
    <div>
      <div>
        <Checkbox {...defaultProps} label="Unchecked" />
      </div>
      <div>
        <Checkbox {...defaultProps} label="Checked" checked />
      </div>
    </div>
  ));
