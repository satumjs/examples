// @ts-check
import { register, start, use } from '@satumjs/core';
import singleSpaMidware from '@satumjs/midware-single-spa';

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

use(singleSpaMidware);

start();
