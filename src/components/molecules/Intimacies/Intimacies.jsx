import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { every, get } from 'lodash';

import { Caption } from '../../atoms/Typography';
import Input from '../../atoms/Input';
import { StyledRadiogroup } from '../../atoms/Radiogroup';

const IntimaciesWrapper = styled.section``;
const IntimaciesList = styled.ul``;
const Intimacy = styled.li``;

export default class Intimacies extends Component {
  static propTypes = {
    intimacies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        level: PropTypes.oneOf(['MINOR', 'MAJOR', 'DEFINING']),
        type: PropTypes.oneOf(['TIE', 'PRINCIPLE']),
        description: PropTypes.string,
      })
    ).isRequired,
    createIntimacy: PropTypes.func.isRequired,
    updateIntimacy: PropTypes.func.isRequired,
    destroyIntimacy: PropTypes.func.isRequired,
  };
  static defaultProps = {
    intimacies: [
      {
        id: 1,
        level: 'DEFINING',
        type: 'TIE',
        description: 'Cynis Nadol (Brotherly Love)',
      },
    ],
  };

  constructor(props) {
    super(props);

    this.state = {
      newIntimacy: {
        level: null,
        type: null,
        description: '',
      },
    };
  }

  editNewIntimacy = field => (e) => {
    const value = get(e, 'target.value', e);
    this.setState({ newIntimacy: { ...this.state.newIntimacy, [field]: value } });
  };

  newIntimacyValid = () => every(this.state.newIntimacy);

  handleClickNewIntimacy = (e) => {
    e.preventDefault();
    if (this.newIntimacyValid()) {
      this.props.createIntimacy(this.state.newIntimacy);
    } else {
      console.warn('Intimacy Invalid:', this.state.newIntimacy);
    }
  };

  renderIntimacy = ({ id, level, type, description }) => (
    <Intimacy>
      {level} {type} - {description}
      <button
        onClick={() => {
          this.props.destroyIntimacy(id);
        }}
      >
        x
      </button>
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
            checked: this.state.newIntimacy.level === label,
          }))}
          onClick={this.editNewIntimacy('level')}
        />
        <StyledRadiogroup
          name="newType"
          items={['PRINCIPLE', 'TIE'].map(label => ({
            label,
            value: label,
            checked: this.state.newIntimacy.type === label,
          }))}
          onClick={this.editNewIntimacy('type')}
        />
        <Input
          name="newDescription"
          value={this.state.newIntimacy.description}
          onChange={this.editNewIntimacy('description')}
        />
        <Input type="submit" value="Add Intimacy" onClick={this.handleClickNewIntimacy} />
      </IntimaciesWrapper>
    );
  }
}
