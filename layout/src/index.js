// @ts-check
import { register, start, use, HistoryType, MidwareName, defaultCrossRuleLabel, actorTagAttrAppName } from '@satumjs/core';
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
    crossRule: `https://vklife.fun/proxy?target=${defaultCrossRuleLabel}`
  });
  next();
});

use(simpleSandboxMidware);
use(simpleCssScopeMidware, { getScopeRule: (appName) => `[${actorTagAttrAppName}="${appName}"] :not(x-satum-micro)` });
use(singleSpaMidware);

start({ ignoreFileRule: 'wza/aria.js' });
