import { register, start, use } from '@satumjs/core';
import midwareQiankunSandbox from '@satumjs/midware-qiankun-sandbox';

register({
  name: 'occ-mobile',
  entry: 'https://render.alipay.com/p/w/occ-mobile/index.html',
  rules: {
    rule: '/',
    container: '#mountNode',
    endtype: 'none',
  },
});

use((system, _, next) => {
  system.set('processUrlOption', { whiteList: ['/api'] });
  next();
});

use(midwareQiankunSandbox, { useQiankunStart: true, useLooseSandbox: true });

start();
