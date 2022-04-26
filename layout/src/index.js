// @ts-check
import { register, start, use, HistoryType, MidwareName, crossRuleLabel, fakeTagName, fakeWrapTagName } from '@satumjs/core';
import { simpleSandboxMidware, simpleCssScopeMidware } from '@satumjs/simple-midwares';
import singleSpaMidware from '@satumjs/midware-single-spa';

register([{
  name: 'vue-todomvc',
  entry: 'https://todomvc.com/examples/vue/',
  history: HistoryType.HASH,
  rules: {
    rule: '/',
    container: '[data-pid="2cnaoaAH"]',
    layout: '/zhihu/post',
  },
}, {
  name: 'zhihu',
  entry: 'https://zhuanlan.zhihu.com/p/414666486',
  rules: {
    rule: '/zhihu/post',
    container: '#mountNode',
  }
}]);

use((system, _, next) => {
  system.set(MidwareName.urlOption, {
    crossRule: `https://vklife.fun/proxy?target=${crossRuleLabel}`
  });
  next();
});

use(simpleSandboxMidware);
use(simpleCssScopeMidware, { getScopeRule: (appName) => `[${fakeTagName}="${appName}"] :not(${fakeWrapTagName})` });
use(singleSpaMidware);

start({ ignoreFileRule: ['hm.js', 'aria.js'] });
