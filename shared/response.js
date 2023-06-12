export default class Response {
  constructor(statusCode, body) {
    this.statusCode = statusCode || 200;
    this.body = JSON.stringify(body) || '{}';
  }

  toJSON() {
    return {
      statusCode: this.statusCode,
      body: this.body,
    };
  }
}
