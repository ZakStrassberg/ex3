import React from 'react';
import { random } from 'lodash';
import { storiesOf } from '@storybook/react';

import Dotscale from './';

storiesOf('Sheet.molecules.Dotscale', module)
  .add('default', () => (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <Dotscale label="Athletics" />
    </div>
  ));
