import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { map } from 'lodash';

import UnstyledDotscale from '../Dotscale';

const DotscaleGridWrapper = styled.section``;
const DotscaleGridLabel = styled.div`
  margin-bottom: 12px;
`;
const DotscalesWrapper = styled.article`
  column-count: ${({ columns }) => columns};
`;
const Dotscale = styled(UnstyledDotscale)`
  margin-bottom: 6px;
`;

export default class DotscaleGrid extends PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(Dotscale.propTypes)).isRequired,
    label: PropTypes.string,
    displayLabel: PropTypes.bool,
    columns: PropTypes.number,
  };

  static defaultProps = {
    displayLabel: true,
    label: '',
    columns: 1,
  };

  constructor(props) {
    super(props);

    this.state = {
      score: 0,
    };
  }

  handleChange = idx => () => {
    this.setState({
      score: this.state.score === 1 && idx === 0 ? 0 : idx + 1,
    });
  };

  render() {
    const { label, items, displayLabel, columns, ...globalDotscaleProps } = this.props;
    return (
      <DotscaleGridWrapper>
        {displayLabel ? <DotscaleGridLabel>{label}</DotscaleGridLabel> : null}
        <DotscalesWrapper columns={columns}>
          {map(items, (localdotscaleProps, idx) => (
            <Dotscale
              key={`${label}-${idx}`}
              {...{ ...globalDotscaleProps, ...localdotscaleProps }}
            />
          ))}
        </DotscalesWrapper>
      </DotscaleGridWrapper>
    );
  }
}
