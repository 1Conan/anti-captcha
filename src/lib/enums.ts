export enum TaskType {
  ImageToText = 'ImageToTextTask',
  RecaptchaV2 = 'RecaptchaV2Task',
  RecaptchaV2Proxyless = 'RecaptchaV2TaskProxyless',
  RecaptchaV2Enterprise = 'RecaptchaV2EnterpriseTask',
  RecaptchaV2EnterpriseProxyless = 'RecaptchaV2EnterpriseTaskProxyless',
  RecaptchaV3Proxyless = 'RecaptchaV3TaskProxyless',
  FunCaptcha = 'FunCaptchaTask',
  FunCaptchaProxyless = 'FunCaptchaTaskProxyless',
  GeeTest = 'GeeTestTask',
  GeeTestProxyless = 'GeeTestTaskProxyless',
  HCaptcha = 'HCaptchaTask',
  HCaptchaProxyless = 'HCaptchaTaskProxyless',
}

export enum LanguagePool {
  English = 'en',
  Russian = 'ru',
}

export enum ProxyType {
  HTTP = 'http',
  SOCKS4 = 'socks4',
  SOCKS5 = 'socks5',
}

export enum ErrorCode {
  ERROR_NONE = 0,
  ERROR_KEY_DOES_NOT_EXIST = 1,
  ERROR_NO_SLOT_AVAILABLE = 2,
  ERROR_ERROR_ZERO_CAPTCHA_FILESIZE = 3,
  ERROR_TOO_BIG_CAPTCHA_FILESIZE = 4,
  ERROR_ZERO_BALANCE = 10,
  ERROR_IP_NOT_ALLOWED = 11,
  ERROR_CAPTCHA_UNSOLVABLE = 12,
  ERROR_BAD_DUPLICATES = 13,
  ERROR_NO_SUCH_METHOD = 14,
  ERROR_IMAGE_TYPE_NOT_SUPPORTED = 15,
  ERROR_NO_SUCH_CAPCHA_ID = 16,
  ERROR_IP_BLOCKED = 21,
  ERROR_TASK_ABSENT = 22,
  ERROR_TASK_NOT_SUPPORTED = 23,
  ERROR_INCORRECT_SESSION_DATA = 24,
  ERROR_PROXY_CONNECT_REFUSED = 25,
  ERROR_PROXY_CONNECT_TIMEOUT = 26,
  ERROR_PROXY_READ_TIMEOUT = 27,
  ERROR_PROXY_BANNED = 28,
  ERROR_PROXY_TRANSPARENT = 29,
  ERROR_RECAPTCHA_TIMEOUT = 30,
  ERROR_RECAPTCHA_INVALID_SITEKEY = 31,
  ERROR_RECAPTCHA_INVALID_DOMAIN = 32,
  ERROR_TOKEN_EXPIRED = 34,
  ERROR_PROXY_HAS_NO_IMAGE_SUPPORT = 35,
  ERROR_PROXY_INCOMPATIBLE_HTTP_VERSION = 36,
  ERROR_PROXY_NOT_AUTHORISED = 49,
  ERROR_INVISIBLE_RECAPTCHA = 51,
  ERROR_FAILED_LOADING_WIDGET = 52,
  ERROR_VISIBLE_RECAPTCHA = 53,
  ERROR_ALL_WORKERS_FILTERED = 54,
  ERROR_ACCOUNT_SUSPENDED = 55,

  // Library Specific
  ERROR_TIMED_OUT = 1000,
}
