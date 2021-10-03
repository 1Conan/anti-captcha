# anti-captcha

API wrapper for [Anti Captcha](https://anti-captcha.com)

## Example

```ts
import { AntiCaptcha, RecaptchaV2ProxylessResult, TaskType } from '@1conan/anti-captcha';

const ac = new AntiCaptcha('<insert clientKey>');

(async () => {
  const balance = await ac.getBalance();
  console.log(`Balance: ${balance}`);

  const taskId = await ac.createTask({
    type: TaskType.RecaptchaV2Proxyless,
    websiteURL: 'https://example.com',
    websiteKey: '<insert recaptcha public key>',
    isInvisible: true,
  });
  console.log(`Task ID: ${taskId}`);

  const result = await ac.getTaskResult<RecaptchaV2ProxylessResult>(taskId);

  const solvingTime = (result.solvedAt.getTime() - result.createdAt.getTime()) / 1000;

  console.log(`Cost: US$${result.cost}`);
  console.log(`Solving Time: ${solvingTime.toFixed(2)} seconds`);
  console.log(`Result: ${result.gRecaptchaResponse}`);
})();
```

```js
const { AntiCaptcha, TaskType } = require('@1conan/anti-captcha');

const ac = new AntiCaptcha('<insert clientKey>');

(async () => {
  const balance = await ac.getBalance();
  console.log(`Balance: ${balance}`);

  const taskId = await ac.createTask({
    type: TaskType.RecaptchaV2Proxyless,
    websiteURL: 'https://example.com',
    websiteKey: '<insert recaptcha public key>',
    isInvisible: true,
  });
  console.log(`Task ID: ${taskId}`);

  const result = await ac.getTaskResult(taskId);

  const solvingTime = (result.solvedAt.getTime() - result.createdAt.getTime()) / 1000;

  console.log(`Cost: US$${result.cost}`);
  console.log(`Solving Time: ${solvingTime.toFixed(2)} seconds`);
  console.log(`Result: ${result.gRecaptchaResponse}`);
})();
```
