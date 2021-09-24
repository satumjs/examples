import 'zone.js'; // for angular subapp
import { register as registerMicroApps, use, start } from '@satumjs/core';
import midwareQiankunSandbox from '@satumjs/midware-qiankun-sandbox';
import './index.less';

/**
 * 主应用 **可以使用任意技术栈**
 * 以下分别是 React 和 Vue 的示例，可切换尝试
 */
import render from './render/ReactRender';
// import render from './render/VueRender';

/**
 * Step1 初始化应用（可选）
 */
render({ loading: true });

const loader = loading => render({ loading });

/**
 * Step2 注册子应用
 */

 registerMicroApps(
  [
    {
      name: 'react16',
      entry: '//localhost:7100',
      container: '#subapp-viewport',
      loader,
      activeRule: '/react16',
    },
    {
      name: 'react15',
      entry: '//localhost:7102',
      container: '#subapp-viewport',
      loader,
      activeRule: '/react15',
    },
    {
      name: 'vue',
      entry: '//localhost:7101',
      container: '#subapp-viewport',
      loader,
      activeRule: '/vue',
    },
    {
      name: 'angular9',
      entry: '//localhost:7103',
      container: '#subapp-viewport',
      loader,
      activeRule: '/angular9',
    },
    {
      name: 'purehtml',
      entry: '//localhost:7104',
      container: '#subapp-viewport',
      loader,
      activeRule: '/purehtml',
    },
    {
      name: 'vue3',
      entry: '//localhost:7105',
      loader,
      container: '#subapp-viewport',
      activeRule: '/vue3',
      /* rules: {
        rule: '/vue3',
        container: '#subapp-viewport',
        blocks: [{
          path: '/react15',
          container: '.hello-content'
        }]
      } */
    },
  ],
  {
    beforeLoad: [
      app => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
      },
    ],
    beforeMount: [
      app => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
      },
    ],
    afterUnmount: [
      app => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
      },
    ],
  },
);

/* const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: 'qiankun',
}); */

// onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev));

/* setGlobalState({
  ignore: 'master',
  user: {
    name: 'master',
  },
}); */

/**
 * Step3 设置默认进入的子应用
 */
// setDefaultMountApp('/react16');

use((sysmtem, _, next) => {
  sysmtem.set('processUrlOption', { whiteList: ['cdn.bootcss.com'] });
  next();
});

use(midwareQiankunSandbox, { useQiankunStart: true/* , useLooseSandbox: true */ });

/**
 * Step4 启动应用
 */
start({ ignoreFileRule: '.hot-update.js' });

/* runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
}); */
