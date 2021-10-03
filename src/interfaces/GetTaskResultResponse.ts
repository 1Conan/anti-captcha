import BaseResponse from './BaseResponse';

export type TaskStatus = 'processing' | 'ready';

export interface GetTaskResultResponse<T> extends BaseResponse {
  status: TaskStatus;
  solution: T;
  cost: number;
  ip: string;
  createTime: number;
  endTime: number;
  solveCount: number;
}
