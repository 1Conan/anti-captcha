import { TaskType } from '../../lib/enums';

export enum ImageToTextNumericRequirements {
  None = 0,
  NumbersOnly = 1,
  LettersOnly = 2,
}

export interface ImageToText {
  type: TaskType.ImageToText;
  body: string;
  phrase?: boolean;
  case?: boolean;
  numeric?: ImageToTextNumericRequirements;
  math?: boolean;
  minLength?: number;
  maxLength?: number;
  comment?: string;
  websiteURL?: string;
}

export interface ImageToTextResult {
  text: string;
  url: string;
}
