/* eslint-disable import/prefer-default-export */

export class AntiCaptchaError extends Error {
  public readonly code: number;

  constructor(code: number, message: string) {
    super(message);
    this.code = code;
  }
}
