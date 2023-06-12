# pet-ages
HTTP API for retrieving dogs and cats ages, relative to human years provided.

## Prerequisites
- Node.js v14
- An AWS account

## Getting Started
1. `npm install` the packages
2. Configure Serverless with your AWS credentials (for example: run `npx serverless config credentials` )
3. `npm run test` to run the tests and get a pass
4. `npm run deploy` to deploy to api gateway

## Testing locally
You can run `npm run invoke-age-get` to locally invoke the api endpoint without a deploy. The input given to the function can be configured in the `event.json` file.

## Testing through API Gateway
Once deployed you should see a message in your terminal showing the URL for the deployed api e.g. `endpoint: GET - https://xxxx.execute-api.eu-west-2.amazonaws.com/dev/age`
You can now call that endpoint, for example in terminal with curl: `curl https://xxxx.execute-api.eu-west-2.amazonaws.com/dev/age?humanYears=3`

## Endpoints
### GET /age
Query string parameters:
- humanYears: Integer

Response:
```
{
    "humanYears": Integer,
    "catYears": Integer,
    "dogYears": Integer
}
```
