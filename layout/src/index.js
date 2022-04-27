// @ts-check
import { register, start, use, HistoryType, MidwareName, corsRuleLabel } from '@satumjs/core';
import { simpleSandboxMidware } from '@satumjs/simple-midwares';
import singleSpaMidware from '@satumjs/midware-single-spa';

register([{
  name: 'vue-todomvc',
  entry: 'https://todomvc.com/examples/vue/',
  history: HistoryType.HASH,
  rules: {
    rule: '/vue-todo',
    container: '#mountNode',
  },
}, {
  name: 'icat-mocro',
  entry: 'https://vklife.fun/blog/archives/62/',
  rules: {
    rule: '/',
    container: '.info',
    layout: '/vue-todo',
  }
}]);

use((system, _, next) => {
  system.set(MidwareName.urlOption, { corsRule: `https://thingproxy.freeboard.io/fetch/${corsRuleLabel}` });
  next();
});

use(simpleSandboxMidware);
use(singleSpaMidware);

start();
