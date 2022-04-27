import {
  register,
  start,
  use,
  MidwareName,
  corsRuleLabel,
} from '@satumjs/core';
import midwareQiankunSandbox from '@satumjs/midware-qiankun-sandbox';

register({
  name: 'store',
  entry: 'https://render.alipay.com/p/w/occ-appstore/index.html',
  rules: {
    rule: '/',
    container: '#mountNode',
  },
});

use((system, _, next) => {
  system.set(MidwareName.urlOption, {
    whiteList: ['/api', 'gw.alipayobjects.com'],
    corsRule: `https://thingproxy.freeboard.io/fetch/${corsRuleLabel}`,
  });
  next();
});

use(midwareQiankunSandbox, { useQiankunStart: true, useLooseSandbox: true });

start();
