import { random, times, flatMapDeep, reduce, every, get } from 'lodash';

export default class Roll {
  constructor(config = {}) {
    const doubleTen = get(config, 'doubleTen', true);
    const double = get(config, 'double', new Set());
    this.config = {
      doubleTen,
      dice: 1,
      reroll: new Set(),
      target: 7,
      autosuccesses: 0,
      ...config,
      double: doubleTen ? new Set([...double.values(), 10]) : new Set(double.values()),
    };
    if (every(times(10, n => this.config.reroll.has(n + 1)))) {
      throw Error({ success: false, error: true, message: "You can't reroll every face" });
    }
  }

  static d10() {
    return random(1, 10);
  }

  rollNDice(config = this.config) {
    return times(config.dice, Roll.d10);
  }

  reroll(roll, config = this.config) {
    return flatMapDeep(
      roll,
      r => (this.isRerolled(r, config) ? [r, this.reroll([Roll.d10()])] : r)
    );
  }

  countSuccesses(roll, config = this.config) {
    return reduce(
      roll,
      // eslint-disable-next-line no-nested-ternary
      (sum, d) => (sum + this.isSuccess(d, config) ? (this.isDoubled(d, config) ? 2 : 1) : 0),
      config.autosuccesses
    );
  }

  isSuccess(d, config = this.config) {
    return d >= config.target;
  }

  isRerolled(d, config = this.config) {
    return config.reroll.has(d);
  }
  isDoubled(d, config = this.config) {
    return config.double.has(d);
  }

  roll() {
    const initialRoll = this.rollNDice();
    const roll = this.reroll(initialRoll);
    return {
      initialRoll,
      roll,
      successes: this.countSuccesses(roll),
      // htmlRoll: this.htmlRollOutput(),
    };
  }
}
