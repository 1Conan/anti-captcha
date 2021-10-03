import { TaskType } from '../../lib/enums';
import { ProxyInfo } from '../ProxyInfo';

export interface FunCaptchaBaseTask {
  websiteURL: string;
  websitePublicKey: string;
  funcaptchaApiJSSubdomain?: string;
  data?: string;
}

export interface FunCaptchaBaseResult {
  token: string;
}

// Proxied
export interface FunCaptcha extends FunCaptchaBaseTask, ProxyInfo {
  type: TaskType.FunCaptcha;
}

export type FunCaptchaResult = FunCaptchaBaseResult;

// Proxyless
export interface FunCaptchaProxyless extends FunCaptchaBaseTask {
  type: TaskType.FunCaptchaProxyless;
}

export type FunCaptchaProxylessResult = FunCaptchaBaseResult;
