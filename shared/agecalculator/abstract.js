export default class AgeCalculator {
  static get firstYearIncrement() {
    return 15;
  }

  static get secondYearIncrement() {
    return 9;
  }

  static get thirdPlusYearIncrement() {
    throw new Error('Implement thirdPlusYearIncrement in child');
  }

  static convertHumanYears(humanYears) {
    if (Number.isNaN(parseInt(humanYears))) {
      throw new Error(`convertHumanYears expects an integer; Received ${humanYears}`);
    }
    let animalYears = 0;
    if (humanYears >= 1) {
      animalYears += this.firstYearIncrement;
    }
    if (humanYears >= 2) {
      animalYears += this.secondYearIncrement;
    }
    if (humanYears >= 3) {
      const yearsOffset = (humanYears - 2);
      animalYears += (this.thirdPlusYearIncrement * yearsOffset);
    }
    return animalYears;
  }
}
