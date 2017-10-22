import { mix } from 'polished';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import { Caption } from '../../atoms/Typography';
import { defaultCombatants } from '../../../store/tracker/selectors';
import Combatant from '../Combatant';

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
const Modal = styled.div`
  height: calc(100vh - 33%);
  min-height: 400px;
  width: 415px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  display: Flex;
`;
const FlexDiv = styled.div`
  flex: 0 0 50%;
  padding: 12px;
`;
const Attacker = styled(FlexDiv)`
  background: ${mix(0.7, 'FIREBRICK', 'white')};
  .name {
    color: ${mix(0.3, 'FIREBRICK', 'darkred')};
  }
`;
const Defender = styled(FlexDiv)`
  background: ${mix(0.9, 'skyblue', 'white')};
  .name {
    color: ${mix(0.5, 'skyblue', 'darkblue')};
  }
`;
const Name = styled.div`
  font-size: 1.5rem;
`;
const Initiative = styled.div``;
export default class AttackModal extends Component {
  static propTypes = {
    attacker: Combatant.propTypes.combatant,
    defender: Combatant.propTypes.combatant,
    clash: PropTypes.bool,
  };
  static defaultProps = {
    attacker: defaultCombatants[0],
    defender: defaultCombatants[3],
    clash: false,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderStatTemplate = (isAttacker) => {
    const El = isAttacker ? Attacker : Defender;
    const { name, initiative } = isAttacker ? this.props.attacker : this.props.defender;
    return (
      <El clash={this.props.clash}>
        <Caption>Name</Caption>
        <Name className="name">{name}</Name>
        <Caption>Initiative</Caption>
        <Initiative>{initiative}</Initiative>
      </El>
    );
  };

  render() {
    return (
      <ModalWrapper>
        <Modal>
          {this.renderStatTemplate(true)}
          {this.renderStatTemplate(false)}
        </Modal>
      </ModalWrapper>
    );
  }
}
