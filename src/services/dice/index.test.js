import { every, isNumber, inRange, map, reduce } from 'lodash';

import Roll from './';

const isD10Roll = (roll) => {
  expect(every(roll, isNumber)).toBe(true);
  expect(every(roll, die => inRange(die, 1, 11))).toBe(true);
};

describe('dice roller', () => {
  it('can roll d10', () => {
    isD10Roll([Roll.d10()]);
    const multipleDice = new Roll({ dice: 10 });
    isD10Roll(multipleDice.roll().roll);
  });

  it('can count successes on dice', () => {
    const roller = new Roll();
    expect(every(map([1, 2, 3, 4, 5, 6], d => roller.countSuccesses([d])))).toBe(false);
    expect(every(map([7, 8, 9, 10], d => roller.countSuccesses([d])))).toBe(true);
    expect(reduce([7, 8, 9], (sum, d) => sum + roller.countSuccesses([d]), 0)).toBe(3);
    expect(reduce([10], (sum, d) => sum + roller.countSuccesses([d]), 0)).toBe(2);
  });

  describe('reroll', () => {
    it('can reroll dice', () => {
      const rerollTest = new Roll({ reroll: new Set([5, 6, 10]) });
      const reroll = rerollTest.reroll([1, 5, 6, 6, 10]);
      expect(reroll.length > 5).toBe(true);
      isD10Roll(reroll);
    });

    it("can't reroll every face", () => {
      expect(() => new Roll({ reroll: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) })).toThrow();
    });
  });

  describe('doubles', () => {
    it('can double dice', () => {
      const roller = new Roll({ double: new Set([7, 8, 9]) });
      expect(roller.countSuccesses([7])).toBe(2);
      expect(roller.countSuccesses([8])).toBe(2);
      expect(roller.countSuccesses([9])).toBe(2);
      expect(roller.countSuccesses([10])).toBe(2);
    });
    it('can turn off double 10s', () => {
      const roller = new Roll({ double: new Set([7, 8, 9]), doubleTen: false });
      expect(roller.countSuccesses([7])).toBe(2);
      expect(roller.countSuccesses([8])).toBe(2);
      expect(roller.countSuccesses([9])).toBe(2);
      expect(roller.countSuccesses([10])).toBe(1);
    });
    it('including 10 in double set overrides doubleTen = false', () => {
      const roller = new Roll({ double: new Set([10]), doubleTen: false });
      expect(roller.countSuccesses([10])).toBe(2);
    });
  });
  it('can change target numbers', () => {});
});
