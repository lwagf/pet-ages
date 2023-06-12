import AgeCalculatorAbstract from '../shared/agecalculator/abstract';

describe('shared_agecalculator_abstract', () => {
  describe('firstYearIncrement', () => {
    it('should return the expected integer', () => {
      expect(AgeCalculatorAbstract.firstYearIncrement).toEqual(15);
    });
  });
  describe('secondYearIncrement', () => {
    it('should return the expected integer', () => {
      expect(AgeCalculatorAbstract.secondYearIncrement).toEqual(9);
    });
  });
  describe('thirdPlusYearIncrement', () => {
    it('should throw', () => {
      expect(() => {
        AgeCalculatorAbstract.thirdPlusYearIncrement
      }).toThrow('Implement thirdPlusYearIncrement in child');
    });
  });
  describe('convertHumanYears', () => {
    it('should perform correct conversion', () => {
      expect(AgeCalculatorAbstract.convertHumanYears(1)).toEqual(15);
      expect(AgeCalculatorAbstract.convertHumanYears(2)).toEqual(24);
    });
    it('should throw if given an invalid integer', () => {
      const input = 'abc';
      expect(() => {
        AgeCalculatorAbstract.convertHumanYears(input)
      }).toThrow(`convertHumanYears expects an integer; Received ${input}`);
    });
  });
});
