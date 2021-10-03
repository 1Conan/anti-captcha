import { TaskType } from '../../lib/enums';
import { ProxyInfo } from '../ProxyInfo';

export interface RecaptchaV2BaseTask {
  websiteURL: string;
  websiteKey: string;
}

export interface RecaptchaV2BaseResult {
  gRecaptchaResponse: string;
}

// Proxied
export interface RecaptchaV2 extends RecaptchaV2BaseTask, ProxyInfo {
  type: TaskType.RecaptchaV2;
  recaptchaDataSValue?: string;
  cookies?: string;
  isInvisible?: boolean;
}

export interface RecaptchaV2Result extends RecaptchaV2BaseResult {
  cookies?: string[];
}

// Proxyless
export interface RecaptchaV2Proxyless extends RecaptchaV2BaseTask {
  type: TaskType.RecaptchaV2Proxyless;
  recaptchaDataSValue?: string;
  isInvisible?: boolean;
}

export type RecaptchaV2ProxylessResult = RecaptchaV2Result;

// Enterprise Proxied
export interface RecaptchaV2Enterprise extends RecaptchaV2BaseTask, ProxyInfo {
  type: TaskType.RecaptchaV2Enterprise;
  enterprisePayload?: object;
  cookies?: string;
}

export type RecaptchaV2EnterpriseResult = RecaptchaV2BaseResult;

// Enterprise Proxyless
export interface RecaptchaV2EnterpriseProxyless extends RecaptchaV2BaseTask {
  type: TaskType.RecaptchaV2EnterpriseProxyless;
  enterprisePayload?: object;
}

export type RecaptchaV2EnterpriseProxylessResult = RecaptchaV2BaseResult;
