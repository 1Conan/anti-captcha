import { TaskType } from '../../lib/enums';
import { ProxyInfo } from '../ProxyInfo';

export interface HCaptchaBaseTask {
  websiteURL: string;
  websiteKey: string;
}

export interface HCaptchaBaseResult {
  gRecaptchaResponse: string;
}

// Proxied
export interface HCaptcha extends HCaptchaBaseTask, ProxyInfo {
  type: TaskType.HCaptcha;
}

export type HCaptchaResult = HCaptchaBaseResult;

// Proxyless
export interface HCaptchaProxyless extends HCaptchaBaseTask {
  type: TaskType.HCaptchaProxyless;
}

export type HCaptchaProxylessResult = HCaptchaBaseResult;
