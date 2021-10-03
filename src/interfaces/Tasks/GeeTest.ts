import { TaskType } from '../../lib/enums';
import { ProxyInfo } from '../ProxyInfo';

export interface GeeTestBaseTask {
  websiteURL: string;
  gt: string;
  challenge: string;
  geetestApiServerSubdomain?: string;
  geetestGetLib?: string;
}

// Proxied
export interface GeeTest extends GeeTestBaseTask, ProxyInfo {
  type: TaskType.GeeTest;
}

export interface GeeTestResult {
  challenge: string;
  validate: string;
  seccode: string;
}

// Proxyless
export interface GeeTestProxyless extends GeeTestBaseTask {
  type: TaskType.GeeTestProxyless;
}

export type GeeTestProxylessResult = GeeTestResult;
