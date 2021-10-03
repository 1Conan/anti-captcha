import { TaskType } from '../../lib/enums';
import { RecaptchaV2BaseTask, RecaptchaV2BaseResult } from './RecaptchaV2';

export interface RecaptchaV3Proxyless extends RecaptchaV2BaseTask {
  type: TaskType.RecaptchaV3Proxyless;
  minScore: number;
  pageAction?: string;
  isEnterprise?: boolean;
}

export type RecaptchaV3ProxylessResult = RecaptchaV2BaseResult;
