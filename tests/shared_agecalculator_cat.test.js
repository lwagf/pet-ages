import AgeCalculatorCat from '../shared/agecalculator/cat';

describe('shared_agecalculator_cat', () => {
  describe('thirdPlusYearIncrement', () => {
    it('should return the expected integer', () => {
      expect(AgeCalculatorCat.thirdPlusYearIncrement).toEqual(4);
    });
  });
  describe('convertHumanYears', () => {
    it('should perform correct conversion', () => {
      expect(AgeCalculatorCat.convertHumanYears(1)).toEqual(15);
      expect(AgeCalculatorCat.convertHumanYears(2)).toEqual(24);
      expect(AgeCalculatorCat.convertHumanYears(3)).toEqual(28);
      expect(AgeCalculatorCat.convertHumanYears(4)).toEqual(32);
      expect(AgeCalculatorCat.convertHumanYears(5)).toEqual(36);
    });
  });
});
