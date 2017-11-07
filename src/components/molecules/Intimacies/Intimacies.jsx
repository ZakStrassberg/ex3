import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import { Caption } from '../../atoms/Typography';
import Input from '../../atoms/Input';
import {StyledRadiogroup} from '../../atoms/Radiogroup';

const IntimaciesWrapper = styled.section``;
const IntimaciesList = styled.ul``;
const Intimacy = styled.li``;

export default class Intimacies extends Component {
  static propTypes = {
    intimacies: PropTypes.arrayOf(
      PropTypes.shape({
        level: PropTypes.oneOf(['MINOR', 'MAJOR', 'DEFINING']),
        type: PropTypes.oneOf(['TIE', 'PRINCIPLE']),
        description: PropTypes.string,
      })
    ),
  };
  static defaultProps = {
    intimacies: [
      {
        level: 'DEFINING',
        type: 'TIE',
        description: 'Cynis Nadol (Brotherly Love)',
      },
    ],
  };

  constructor(props) {
    super(props);

    this.state = {
      newLevel: null,
      newType: null,
      newDescription: '',
    };
  }

  renderIntimacy = ({ level, type, description }) => (
    <Intimacy>
      {level} {type} - {description}
    </Intimacy>
  );

  render() {
    return (
      <IntimaciesWrapper>
        <Caption>Intimacies</Caption>
        <IntimaciesList>{this.props.intimacies.map(this.renderIntimacy)}</IntimaciesList>
        <Caption>Add Intimacy</Caption>
        <StyledRadiogroup
          name="newLevel"
          items={['MINOR', 'MAJOR', 'DEFINING'].map(label => ({
            label,
            value: label,
            checked: this.state.newLevel === label,
          }))}
        />
        <StyledRadiogroup
          name="newType"
          items={['PRINCIPLE', 'TIE'].map(label => ({
            label,
            value: label,
            checked: this.state.newType === label,
          }))}
        />
        <Input name="newDescription" value={this.state.newDescription} />
      </IntimaciesWrapper>
    );
  }
}
