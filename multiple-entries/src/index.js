// @ts-check
import { register, start, use } from "@satumjs/core";
import singleSpaMidware from '@satumjs/midware-single-spa';

register([
  {
    name: "multiple",
    entry: [
      'https://www.aliyun.com/',
      'https://vklife.fun/blog/archives/62/',
    ],
    rules: {
      rule: "/",
      container: "#mountNode",
    },
  }
]);

use(singleSpaMidware);
use((sys, _, next) => {
  sys.set('processUrlOption', { whiteList: ['g.alicdn.com', /\/(api|abs|delivery|adPlan|rest)/] });
  next();
});

start();
