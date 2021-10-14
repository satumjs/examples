import { register, start } from "@satumjs/core";

register([
  {
    name: "multiple",
    entry: [
      'https://www.baidu.com/',
      'https://www.hao123.com/',

    ],
    rules: {
      rule: "/",
      container: "#mountNode",
    },
  }
]);

start();
