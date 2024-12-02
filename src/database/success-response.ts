export class SuccessResponse<T> {
  statusCode: number;
  payload: T;

  constructor(statusCode: number, payload: T) {
    this.statusCode = statusCode;
    this.payload = payload;
  }
}
