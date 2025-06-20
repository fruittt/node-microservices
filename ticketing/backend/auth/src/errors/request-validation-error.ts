import { ValidationError } from 'express-validator';

export class RequestValidationError extends Error {
  statusCode = 400;
  reason: ValidationError[];

  constructor(private errors: ValidationError[]) {
    super('Invalid request parameters');
    this.reason = errors;
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.reason.map(err => ({
      message: err.msg,
      ...err
    }));
  }
}