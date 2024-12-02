export class ErrorResponse<T> {
  errorCode: number;
  payload: T;
  message: string | string[];

  constructor(errorCode: number, message: string | string[], payload: T) {
    this.errorCode = errorCode;
    this.message = message;
    this.payload = payload;
  }
}
