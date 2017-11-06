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
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    label: PropTypes.string,
    className: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    square: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    label: null,
    className: '',
    min: 0,
    max: 5,
    square: false,
    onChange: (...props) => {
      console.log(props);
    },
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
    this.props.onChange(idx);
  };

  render() {
    const { label, score: propScore, className, max, square, name } = this.props;
    const score = this.state.score ? this.state.score : propScore;
    const [unfilled, filled] = square ? ['◽', '◾'] : ['○', '●'];
    return (
      <DotscaleWrapper className={className}>
        {label ? <span>{label}</span> : null}
        <DotsWrapper>
          {times(max, idx => (
            <DotLabel
              key={`dotscale-${label}-${idx}`}
              htmlFor={`dotscale-${name}-${idx}`}
              onClick={this.handleChange(idx + 1)}
            >
              {idx < score ? filled : unfilled}
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
