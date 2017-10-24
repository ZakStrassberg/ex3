import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Wrapper = styled.section`
  max-width: 1024px;
  margin: 0 auto;
`;
const Header = styled.header``;
const Sheet = styled.article``;
const Attributes = styled.div``;
const Abilities = styled.div``;

export default class CharacterSheet extends PureComponent {

  static propTypes = {
    character: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
    })
  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <Wrapper>
        <Header>
          name
          player
          caste
          concept
          anima
          supernal
        </Header>
        <Sheet>
          <Attributes>
            hi
          </Attributes>
          <Abilities>
            hi
          </Abilities>
        </Sheet>
      </Wrapper>
    );
  }

}
