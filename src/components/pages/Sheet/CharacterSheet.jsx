import { map } from 'lodash';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { ATTRIBUTE_GROUPS, ABILITIES } from '../../../store/sheet/constants';
import { FlexBox, Row } from '../../atoms/Layout';
import { Caption as UnstyledCaption } from '../../atoms/Typography';
import Dotscale from '../../molecules/Dotscale';
import Merits from '../../molecules/Merits';
import Textarea from '../../atoms/Textarea';

const Wrapper = styled.section`
  max-width: 1024px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  > * {
    flex: 0 0 100%;
  }
`;
const Caption = styled(UnstyledCaption)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-weight: bold;
  letter-spacing: 1px;
  // margin-left: 6px;
  // margin-right: 6px;
  &:before {
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    height: 3px;
    background: yellow;
    content: '';
  }
`;
const Header = styled.header``;
const Sheet = styled.article``;
const Attributes = styled.div`
  display: flex;
`;
const Abilities = styled.div`
  display: flex;
  flex-direction: column;
`;
const Willpower = styled.div``;
const LimitBreak = styled.div``;

export default class CharacterSheet extends PureComponent {
  static propTypes = {
    character: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
    }),
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        <Header>name player caste concept anima supernal</Header>
        <Sheet>
          <Caption style={{ marginTop: '20px' }}>Attributes</Caption>
          <Attributes>
            {map(ATTRIBUTE_GROUPS, group => (
              <FlexBox columns={3}>
                {map(group, label => (
                  <Dotscale name={`attribute-${label}`} label={label} score={2} min={1} />
                ))}
              </FlexBox>
            ))}
          </Attributes>
          <Row style={{ marginTop: '20px' }}>
            <FlexBox columns={2}>
              <Caption>Abilities</Caption>
              <Abilities>
                {map(ABILITIES, label => (
                  <FlexBox>
                    <Dotscale name={`ability-${label}`} label={label} score={2} />
                  </FlexBox>
                ))}
              </Abilities>
            </FlexBox>
            <FlexBox columns={2}>
              <Merits />
              <Willpower>
                <Caption>Willpower</Caption>
                <Dotscale name="totalWillpower" max={10} score={3} />
                <Dotscale name="availableWillpower" max={10} score={1} square />
              </Willpower>
              <LimitBreak>
                <Caption>Limit Break</Caption>
                <Dotscale name="limit" max={10} score={4} square />
                <Caption>Limit Trigger</Caption>
                <Textarea />
              </LimitBreak>
            </FlexBox>
          </Row>
        </Sheet>
      </Wrapper>
    );
  }
}
