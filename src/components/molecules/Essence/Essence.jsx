import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import { Caption } from '../../atoms/Typography';
import { FlexBox, Row } from '../../atoms/Layout';
import Dotscale from '../Dotscale';

const EssenceWrapper = styled.section``;
const Pool = styled.article``;

export default class Essence extends Component {
  static defaultProps = {
    essence: {
      essence: 2,
      personal: {
        total: 20,
        available: 7,
        comitted: 0,
      },
      peripheral: {
        total: 35,
        available: 10,
        comitted: 5,
      },
    },
  };

  static propTypes = {
    essence: PropTypes.shape({
      essence: PropTypes.number,
      personal: PropTypes.shape({
        total: PropTypes.number,
        available: PropTypes.number,
        comitted: PropTypes.number,
      }),
      peripheral: PropTypes.shape({
        total: PropTypes.number,
        available: PropTypes.number,
        comitted: PropTypes.number,
      }),
    }),
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderEssencePools = poolName => (
    <Pool key={poolName}>
      <Caption>{poolName} Essence</Caption>
      <div>
        {this.props.essence[poolName].available} / {this.props.essence[poolName].total}
      </div>
    </Pool>
  );

  render() {
    return (
      <EssenceWrapper>
        <Caption>Essence</Caption>
        <Dotscale score={this.props.essence.essence} name="essence" />
        <Row>
          <FlexBox columns={2}>{this.renderEssencePools('personal')}</FlexBox>
          <FlexBox columns={2}>{this.renderEssencePools('peripheral')}</FlexBox>
        </Row>
      </EssenceWrapper>
    );
  }
}
