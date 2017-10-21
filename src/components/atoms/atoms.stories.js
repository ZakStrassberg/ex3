import React from 'react';

import { storiesOf } from '@storybook/react';

import Textarea from './Textarea';
import Button from './Button';
import Checkbox from './Checkbox';
import Input from './Input';
import Label from './Label';

storiesOf('Atoms', module)
  .add('input', () => (
    <div>
      <h1>Input</h1>
      <h2>Empty</h2>
      <Input />
      <h2>With text</h2>
      <Input value="Some text" />
    </div>
  ))
  .add('checkbox', () => (
    <div>
      <h1>Checkbox</h1>
      <h2>Unchecked</h2>
      <Checkbox checked={false} />
      <h2>Checked</h2>
      <Checkbox checked />
    </div>
  ))
  .add('label', () => (
    <div>
      <Label>Label</Label>
    </div>
  ))
  .add('textarea', () => (
    <div>
      <Textarea>Label</Textarea>
    </div>
  ))
  .add('button', () => (
    <div>
      <Button>Button</Button>
    </div>
  ));
