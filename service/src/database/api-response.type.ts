import { SuccessResponse } from './success-response';
import { ErrorResponse } from './error-response';

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse<T>;
