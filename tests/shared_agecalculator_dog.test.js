import AgeCalculatorDog from '../shared/agecalculator/dog';

describe('shared_agecalculator_dog', () => {
  describe('thirdPlusYearIncrement', () => {
    it('should return the expected integer', () => {
      expect(AgeCalculatorDog.thirdPlusYearIncrement).toEqual(5);
    });
  });
  describe('convertHumanYears', () => {
    it('should perform correct conversion', () => {
      expect(AgeCalculatorDog.convertHumanYears(1)).toEqual(15);
      expect(AgeCalculatorDog.convertHumanYears(2)).toEqual(24);
      expect(AgeCalculatorDog.convertHumanYears(3)).toEqual(29);
      expect(AgeCalculatorDog.convertHumanYears(4)).toEqual(34);
      expect(AgeCalculatorDog.convertHumanYears(5)).toEqual(39);
    });
  });
});
