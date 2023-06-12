import AgeCalculatorCat from './shared/agecalculator/cat';
import AgeCalculatorDog from './shared/agecalculator/dog';
import Response from './shared/response';

// eslint-disable-next-line import/prefer-default-export
export const handler = async (event) => {
  const humanYears = parseInt(event?.queryStringParameters?.humanYears, 10);
  if (Number.isNaN(humanYears) || humanYears < 1) {
    return new Response(
      400,
      {
        message: 'humanYears must be an integer greater than 0',
      },
    ).toJSON();
  }
  return new Response(
    200,
    {
      humanYears,
      catYears: AgeCalculatorCat.convertHumanYears(humanYears),
      dogYears: AgeCalculatorDog.convertHumanYears(humanYears),
    },
  ).toJSON();
};
