// @ts-check
import { register, start, use, MidwareName, corsRuleLabel } from '@satumjs/core';

register({
  name: 'seeconf',
  entry: 'https://seeconf.antfin.com/',
  rules: {
    rule: '/',
    container: '#mountNode'
  },
});

use((sys, _, next) => {
  sys.set(MidwareName.urlOption, { corsRule: `https://thingproxy.freeboard.io/fetch/${corsRuleLabel}` });
  next();
});

start();