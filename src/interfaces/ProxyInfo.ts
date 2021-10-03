import { ProxyType } from '../lib/enums';

export interface ProxyInfo {
  proxyType: ProxyType;
  proxyAddress: string;
  proxyPort: number;
  proxyLogin?: string;
  proxyPassword?: string;
  userAgent: string;
}
