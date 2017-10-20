import React from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Text from './';

storiesOf('Text', module)
  .add('Empty', () => <Text value="" />)
  .add('With value', () => <Text value="Text input" />);
