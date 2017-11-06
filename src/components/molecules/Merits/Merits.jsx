import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { get } from 'lodash';

import { Caption } from '../../atoms/Typography';
import Button from '../../atoms/Button';
import Dotscale from '../Dotscale';
import Input from '../../atoms/Input';

const Wrapper = styled.section``;
const AddMeritWrapper = styled.article`
  display: flex;
  justify-content: space-between;
`;
const MeritList = styled.ul``;
const Merit = styled.li`
  display: flex;
  justify-content: space-between;
`;
const MeritDescription = styled.span``;

export default class Merits extends PureComponent {
  static defaultProps = {
    merits: [
      {
        id: 1,
        description: 'One',
        score: 1,
      },
      {
        id: 2,
        description: 'Two',
        score: 2,
      },
    ],
  };

  static propTypes = {
    merits: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        description: PropTypes.string,
        string: PropTypes.number,
      })
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      newMeritDescription: '',
      newMeritScore: 0,
    };
  }

  handleChange = field => (e) => {
    const value = get(e, 'target.value', e);
    console.log(field, value);
    this.setState({
      [field]: value,
    });
  };

  handleAddMeritClick = () => {};

  render() {
    return (
      <Wrapper>
        <Caption>Merits</Caption>
        <MeritList>
          {this.props.merits.map(({ id, description, score }) => (
            <Merit key={id}>
              <MeritDescription>{description}</MeritDescription>
              <Dotscale name={`merits-dotscale-${id}-${description}`} score={score} />
            </Merit>
          ))}
        </MeritList>
        <AddMeritWrapper>
          <Caption>New Merit:</Caption>
          <Input
            name="newMeritDescription"
            value={this.state.newMeritDescription}
            onChange={this.handleChange('newMeritDescription')}
          />
          <Dotscale
            name="newMeritScore"
            value={this.state.newMeritScore}
            onChange={this.handleChange('newMeritScore')}
          />
          <Button onClick={this.handleAddMeritClick}>Add Merit</Button>
        </AddMeritWrapper>
      </Wrapper>
    );
  }
}
