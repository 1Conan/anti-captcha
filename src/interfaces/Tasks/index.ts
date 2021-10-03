import {
  FunCaptcha,
  FunCaptchaProxyless,
  FunCaptchaResult,
  FunCaptchaProxylessResult,
} from './FunCaptcha';
import {
  GeeTest, GeeTestProxyless, GeeTestResult, GeeTestProxylessResult,
} from './GeeTest';
import {
  HCaptcha, HCaptchaProxyless, HCaptchaResult, HCaptchaProxylessResult,
} from './HCaptcha';
import { ImageToText, ImageToTextResult } from './ImageToText';
import {
  RecaptchaV2,
  RecaptchaV2Proxyless,
  RecaptchaV2Enterprise,
  RecaptchaV2EnterpriseProxyless,
  RecaptchaV2Result,
  RecaptchaV2ProxylessResult,
  RecaptchaV2EnterpriseResult,
  RecaptchaV2EnterpriseProxylessResult,
} from './RecaptchaV2';
import { RecaptchaV3Proxyless, RecaptchaV3ProxylessResult } from './RecaptchaV3';

export type Task =
  | FunCaptcha
  | FunCaptchaProxyless
  | GeeTest
  | GeeTestProxyless
  | HCaptcha
  | HCaptchaProxyless
  | ImageToText
  | RecaptchaV2
  | RecaptchaV2Proxyless
  | RecaptchaV2Enterprise
  | RecaptchaV2EnterpriseProxyless
  | RecaptchaV3Proxyless;

export type Result =
  | FunCaptchaResult
  | FunCaptchaProxylessResult
  | GeeTestResult
  | GeeTestProxylessResult
  | HCaptchaResult
  | HCaptchaProxylessResult
  | ImageToTextResult
  | RecaptchaV2Result
  | RecaptchaV2ProxylessResult
  | RecaptchaV2EnterpriseResult
  | RecaptchaV2EnterpriseProxylessResult
  | RecaptchaV3ProxylessResult;

export * from './FunCaptcha';
export * from './GeeTest';
export * from './HCaptcha';
export * from './ImageToText';
export * from './RecaptchaV2';
export * from './RecaptchaV3';
