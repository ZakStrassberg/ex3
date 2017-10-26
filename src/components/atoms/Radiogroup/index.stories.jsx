import { map } from 'lodash';
import React, { PureComponent } from 'react';

import { storiesOf } from '@storybook/react';

import Radiogroup, { StyledRadiogroup } from './';

export default class RadiogroupStateWrapper extends PureComponent {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          label: 'Red',
          value: 'red',
          checked: true,
        },
        {
          label: 'Orange',
          value: 'orange',
        },
        {
          label: 'Blue',
          value: 'blue',
        },
      ],
    };
  }

  handleChange = ({ target }) => {
    console.log(target);
    console.log(target.name, target.value, target.checked);
    this.setState({
      items: map(this.state.items, ({ label, value }) => ({
        label,
        value,
        checked: value === target.value,
      })),
    });
  };

  render() {
    return <Radiogroup name="stateful-test" onClick={this.handleChange} items={this.state.items} />;
  }
}

storiesOf('Common.molecules.Radiogroup', module)
  .add('default', () => (
    <div>
      <Radiogroup
        name="test"
        label="Radiogroup"
        items={[
          { label: 'one', checked: true },
          { label: 'Two', checked: false },
          { label: 'three', checked: false },
        ]}
        onClick={({ target, target: { value } }) => console.log(value, target)}
      />
      <StyledRadiogroup
        name="test"
        label="Radiogroup"
        items={[{ label: 'one', checked: true }, { label: 'Two', checked: false },       { label: 'three', checked: false },]}
        onClick={({ target, target: { value } }) => console.log(value, target)}
      />
    </div>
  ))
  .add('editable', () => <RadiogroupStateWrapper />);
