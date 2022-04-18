import { register, start } from '@satumjs/core';

register({
  name: 'store',
  entry: 'https://render.alipay.com/p/w/occ-appstore/index.html',
  rules: {
    rule: '/store',
    container: '#mountNode'
  },
});

start();