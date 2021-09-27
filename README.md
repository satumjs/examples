# satum-micro examples

## 入门

- [独立使用的简单例子](./getting-started/simple-example)，无需修改代码，轻松集成 seeconf 官网。
- [使用 @satumjs/midware-single-spa](./getting-started/simple-midware-single-spa)，融合 single-spa 的单应用加/卸载能力。
- [使用 @satumjs/midware-qiankun-sandbox](./getting-started/simple-midware-qiankun-sandbox)，融合了 qiankun 作为一个中间件提供沙箱能力。

## 基础功能

- [配置路径规则 rules]，基于规则会计算应用间的依赖，进而支持多个应用同时激活，或一个应用同时多次激活。
- [配置过滤文件规则]，支持配置规则过滤应用中的资源文件，比如应用独立运行时依赖的三方库，在微前端加载时可从其他应用中共享，进而需要忽略。
- [使用`layout`的例子](./layout)，使 todomvc 和 [404](https://vklife.fun/blog/404) 合并在一个页面。
- [使用`区块`的例子](./block)，使 cnpm 和 [@icatjs/micro post](https://vklife.fun/blog/archives/62/) 合并在一个页面。

## 进阶功能

- [使用官方中间件]，iframe 沙箱渲染页面，把 iframe 当做 js 运行引擎。
- [自定义中间件](./custom-midware)，定义一款中间件，轻松改进*加载应用流程中*的一些返回值。
- [多入口文件]，支持多入口文件，如果数组中包含多个 html，则以最后一个 html 为真正的入口文件。
- [多应用同时激活&一个应用同时多次激活]，配置相关依赖，使复杂场景正常渲染。
- [跨应用共享组件]，做到应用间 UI 共享，提升重用性。
- [三方库共享]，应用间共享三方库，减少重复加载。
