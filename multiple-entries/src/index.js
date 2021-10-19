import { register, start } from "@satumjs/core";

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

start();
