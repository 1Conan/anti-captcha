import { setTimeout } from 'timers/promises';
import fetch from 'cross-fetch';
import { LanguagePool } from './enums';
import { AntiCaptchaError } from './error';
import BaseResponse from '../interfaces/BaseResponse';
import { GetTaskResultResponse } from '../interfaces/GetTaskResultResponse';
import { Task, Result } from '../interfaces/Tasks/index';

export interface CreateTaskOptions {
  softId?: number;
  languagePool?: LanguagePool;
  callbackUrl?: string;
}

export interface TaskResult {
  ip: string;
  cost: number;
  createdAt: Date;
  solvedAt: Date;
  solveCount: number;
}

export class AntiCaptcha {
  protected clientKey: string;

  private apiUrl = 'https://api.anti-captcha.com';

  private userAgent = 'nodejs/anti-captcha 1.0';

  constructor(clientKey: string, apiUrl?: string) {
    this.clientKey = clientKey;
    if (apiUrl) this.apiUrl = apiUrl;
  }

  public async createTask(taskData: Task, options: CreateTaskOptions = {}) {
    const res = await this.post<{ taskId: number }>('createTask', {
      task: taskData,
      ...options,
    });

    return res.taskId;
  }

  public async getTaskResult<T extends Result>(
    taskId: number,
    retries: number = 10,
    retryDelay: number = 4000,
  ): Promise<TaskResult & T> {
    const req = await this.post<GetTaskResultResponse<T>>('getTaskResult', { taskId });

    if (req.status === 'processing') {
      if (retries > 0) {
        // False positive on setTimeout promise
        // eslint-disable-next-line @typescript-eslint/no-implied-eval
        await setTimeout(retryDelay);
        return this.getTaskResult(taskId, retries - 1);
      }

      // retries = 0
      throw new AntiCaptchaError(1000, 'Retries ran out');
    }

    return {
      ...req.solution,
      ip: req.ip,
      cost: req.cost,
      createdAt: new Date(req.createTime * 1000),
      solvedAt: new Date(req.endTime * 1000),
      solveCount: req.solveCount,
    };
  }

  public async getBalance() {
    const req = await this.post<{ balance: number }>('getBalance');

    return req.balance;
  }

  public async reportIncorrectImageCaptcha(taskId: number) {
    const req = await this.post<{ status: string }>('reportIncorrectImageCaptcha', { taskId });

    return req.status === 'success';
  }

  public async reportIncorrectRecaptcha(taskId: number) {
    const req = await this.post<{ status: string }>('reportIncorrectRecaptcha', { taskId });

    return req.status === 'success';
  }

  public async reportCorrectRecaptcha(taskId: number) {
    const req = await this.post<{ status: string }>('reportCorrectRecaptcha', { taskId });

    return req.status === 'success';
  }

  private async post<T>(endpoint: string, body: any = {}) {
    const req = await fetch(`${this.apiUrl}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': this.userAgent,
      },
      body: JSON.stringify({
        clientKey: this.clientKey,
        ...body,
      }),
    });

    const data = (await req.json()) as BaseResponse & T;

    if (req.status !== 200 || data.errorId !== 0) {
      throw new AntiCaptchaError(data.errorId, data.errorDescription);
    }

    return data;
  }
}
