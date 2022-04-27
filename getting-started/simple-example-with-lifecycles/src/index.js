// @ts-check
import { register, start, use, MidwareName, corsRuleLabel } from '@satumjs/core';

register({
  name: 'store',
  entry: 'https://render.alipay.com/p/w/occ-appstore/index.html',
  rules: {
    rule: '/store',
    container: '#mountNode'
  },
});

use((sys, _, next) => {
  sys.set(MidwareName.urlOption, { corsRule: `https://thingproxy.freeboard.io/fetch/${corsRuleLabel}` });
  next();
});

start();