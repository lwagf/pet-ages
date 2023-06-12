import AgeCalculator from './abstract';

export default class AgeCalculatorCat extends AgeCalculator {
  static get thirdPlusYearIncrement() {
    return 4;
  }
}
