import { MidwareName, HistoryType, register, start, use, defaultCrossRuleLabel } from '@satumjs/core';
import { simpleSandboxMidware } from '@satumjs/simple-midwares';
import midwareSingleSpa from '@satumjs/midware-single-spa';

register({
  name: 'vue-todomvc',
  entry: 'https://todomvc.com/examples/vue/',
  history: HistoryType.HASH,
  rules: {
    rule: '/',
    container: '#mountNode'
  },
});

use((system, _, next) => {
  system.set(MidwareName.urlOption, {
    crossRule: `https://vklife.fun/proxy?target=${defaultCrossRuleLabel}`
  });
  next();
});

use(simpleSandboxMidware);
use(midwareSingleSpa);

start({ baseHistoryType: HistoryType.HASH });