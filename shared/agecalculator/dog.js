import AgeCalculator from './abstract';

export default class AgeCalculatorDog extends AgeCalculator {
  static get thirdPlusYearIncrement() {
    return 5;
  }
}
