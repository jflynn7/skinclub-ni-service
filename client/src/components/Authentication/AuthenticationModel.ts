/**
 * DTOs
 */
export type LoginDTO = {
  username: string;
  password: string;
  rememberMe?: boolean;
}

/**
 * Events
 */
export type FormInputEvent = {
  target: {
    name: string;
    value: string | number
  }
};
