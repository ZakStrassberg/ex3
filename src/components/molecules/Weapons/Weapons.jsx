import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import { Caption } from '../../atoms/Typography';
import { StyledRadiogroup } from '../../atoms/Radiogroup';

const WeaponsWrapper = styled.section``;
const WeaponsList = styled.ul``;
const WeaponWrapper = styled.li``;
const AddWeaponWrapper = styled.article``;
const NameInput = styled.input``;

export default class Weapons extends Component {
  static propTypes = {
    weapons: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        artifact: PropTypes.bool,
        weaponType: PropTypes.string,
        weaponCategory: PropTypes.oneOf(['LIGHT', 'MEDIUM', 'HEAVY']),
        weaponTags: PropTypes.array,
      })
    ),
  };
  static defaultProps = {
    weapons: [
      {
        id: 1,
        name: 'The Perilous Branch',
        artifact: true,
        weaponType: 'Direstaff',
        weaponCategory: 'MEDIUM',
        weaponTags: ['Balanced', 'Mounted'],
      },
    ],
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  renderWeapon = ({ id, name, artifact, weaponType, weaponCategory, weaponTags }) => {
    return (
      <WeaponWrapper key={id}>
        {name} ({artifact ? 'Artifact' : 'Mundane'} {weaponType} [{weaponCategory},{' '}
        {weaponTags.join(', ')}])
      </WeaponWrapper>
    );
  };

  renderAddWeapon = () => (
    <AddWeaponWrapper>
      <Caption>Add Weapon:</Caption>
      <NameInput />
      <StyledRadiogroup
        name="artifact"
        items={[{ label: 'Artifact', value: true }, { label: 'Mundane', value: false }]}
      />
      <StyledRadiogroup
        name="newWeaponCategory"
        items={['LIGHT', 'MEDIUM', 'HEAVY'].map(label => ({
          label,
          value: label,
          checked: this.state.newWeaponCategory === label,
        }))}
      />
      <div>Tag select</div>
    </AddWeaponWrapper>
  );

  render() {
    return (
      <WeaponsWrapper>
        <Caption>Weapons</Caption>
        <WeaponsList>{this.props.weapons.map(this.renderWeapon)}</WeaponsList>
        {this.renderAddWeapon()}
      </WeaponsWrapper>
    );
  }
}
