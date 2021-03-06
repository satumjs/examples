// @ts-check
import { register, start, use, MidwareName, corsRuleLabel } from '@satumjs/core';
import { simpleSandboxMidware } from '@satumjs/simple-midwares';
import singleSpaMidware from '@satumjs/midware-single-spa';

function noop() {}

register([{
  name: 'cnpm',
  entry: 'https://npmmirror.com/package/@icatjs/micro',
  rules: {
    rule: '/',
    container: '#mountNode',
    blocks: [{
      path: '/post/icatjs-micro',
      container: '.yue',
    }]
  },
}, {
  name: 'post-icatjs-micro',
  entry: 'https://vklife.fun/blog/archives/62/',
  rules: {
    rule: '/post/icatjs-micro',
    container: '#mountNode',
  }
}]);

use((sys, _, next) => {
  sys.set(MidwareName.urlOption, { corsRule: `https://thingproxy.freeboard.io/fetch/${corsRuleLabel}` });
  next();
});

use(simpleSandboxMidware, { docVariable(k) { if (k === 'write') return noop; } });
use(singleSpaMidware);

start({ ignoreFileRule: ['cnzz.com', 'aplus_v2'] });
