import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { times } from 'lodash';
import styled from 'styled-components';

const DotscaleWrapper = styled.section`
  display: flex;
  justify-content: space-between;
`;
const DotsWrapper = styled.article``;
const DotLabel = styled.label`
  user-select: none;
  cursor: pointer;
  font-size: 120%;
  &:not(:last-child) {
    margin-right: 2px;
  }
`;
const Dot = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

export default class Dotscale extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    displayLabel: PropTypes.bool,
    className: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
  };

  static defaultProps = {
    displayLabel: true,
    className: '',
    min: 0,
    max: 5,
  };

  constructor(props) {
    super(props);

    this.state = {
      score: null,
    };
  }

  handleChange = idx => () => {
    const score = this.state.score ? this.state.score : this.props.score;

    this.setState({
      score: score === 1 && idx === 1 && this.props.min === 0 ? 0 : idx,
    });
  };

  render() {
    const { label, score: propScore, displayLabel, className, max } = this.props;
    const score = this.state.score ? this.state.score : propScore;
    return (
      <DotscaleWrapper className={className}>
        {displayLabel ? <span>{label}</span> : null}
        <DotsWrapper>
          {times(max, idx => (
            <DotLabel key={`dotscale-${label}-${idx}`} htmlFor={`dotscale-${label}-${idx}`}>
              {idx < score ? '●' : '○'}
              <Dot
                name={`dotscale-${label}-${idx}`}
                id={`dotscale-${label}-${idx}`}
                checked={idx < score}
                onChange={this.handleChange(idx + 1)}
              />
            </DotLabel>
          ))}
        </DotsWrapper>
      </DotscaleWrapper>
    );
  }
}
