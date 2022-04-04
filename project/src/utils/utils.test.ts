import {ModeReceivingStarringData, RatingLevel} from './const';
import {convertRunTime, getRatingLevel, getStarringArrayToString} from './utils';

// describe('', () => {
//   it('', () => {

//   });
// });

describe('Тестим весь utils.ts', () => {
  describe('тестим ф-ию getRatingLevel', () => {
    it('тест на корректность возвращаемого значения ф-ии', () => {
      expect(getRatingLevel(1)).toBe(RatingLevel.Bad);
      expect(getRatingLevel(3)).toBe(RatingLevel.Normal);
      expect(() => {
        getRatingLevel(-1);
      }).toThrow();
      expect(() => {
        getRatingLevel(11);
      }).toThrow();
    });
  });
  describe('тест ф-ии getStarringArrayToString', () => {
    it('тест на корректность возвращаемого значения ф-ии', () => {
      const starring = ['ducalis sasha', 'petya mahno', 'edick rovnyi'];
      expect(getStarringArrayToString(ModeReceivingStarringData.Overview, starring)).toBe('ducalis sasha, petya mahno, edick rovnyi');
      // expect(getStarringArrayToString(ModeReceivingStarringData.Overview, starring)).toBe('ducalis sasha, \npetya mahno, \nedick rovnyi');
      // НЕ РАБОТАЕТ ЗДЕСЬ
      expect(() => {
        getStarringArrayToString('aaa', starring);
      }).toThrow();
    });
  });
  describe('тест ф-ии convertRunTime', () => {
    it('тест на корректность возвращаемого значения ф-ии', () => {
      expect(convertRunTime(50)).toBe('50m');
      expect(convertRunTime(60)).toBe('1h');
      expect(convertRunTime(120)).toBe('2h');
      expect(convertRunTime(62)).toBe('1h 2m');
      expect(convertRunTime(0)).toBe('0m');
      expect(() => {
        convertRunTime(-1);
      }).toThrow();
    });
  });
  // describe('тест ф-ии getDurationFormatTime', () => {
  //   it('тест на корректность возвращаемого значения ф-ии', () => {
  //     expect(getDurationFormatTime(50)).toBe('-50');
  //     // expect(getDurationFormatTime()).toBe();
  //     // expect(getDurationFormatTime()).toBe();
  //     // expect(() => {
  //     //   getDurationFormatTime();
  //     // }).toThrow();
  //   });
  // });


});
