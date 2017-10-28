import { random, times, flatMapDeep, reduce, every } from 'lodash';

export default class Roll {
  constructor(config = {}) {
    this.config = {
      dice: 1,
      double: new Set([10]),
      reroll: new Set(),
      target: 7,
      autosuccesses: 0,
      ...config,
    };
    if (every(times(10, n => this.config.reroll.has(n + 1)))) {
      throw Error({ success: false, error: true, message: "You can't reroll every face" });
    }
  }

  static d10() {
    return random(1, 10);
  }

  static rollNDice(dice) {
    return times(dice, Roll.d10);
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
      (sum, d) => sum + (this.isSuccess(d, config) ? (this.isDoubled(d, config) ? 2 : 1) : 0),
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

  /**
 * Rolls based on config
 * @param  {Object} [config=this.config] Config item. Defaults to this.config
 * @return {Object}                      Returns an object representing the roll
 *          initialRoll                   roll before rerolls
 *          roll                          roll after rerolls
 *          successes                     number of successes scored
 *          htmlRoll                      roll marked up in html
 */
  roll(config = this.config) {
    const initialRoll = Roll.rollNDice(config.dice);
    const roll = this.reroll(initialRoll, config);
    return {
      initialRoll,
      roll,
      successes: this.countSuccesses(roll),
      // htmlRoll: this.htmlRollOutput(),
    };
  }
}
